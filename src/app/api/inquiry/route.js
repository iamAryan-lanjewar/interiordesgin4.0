import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Simple in-memory rate limiter (IP -> Array of timestamps)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes window
const MAX_REQUESTS = 3; // Maximum 3 inquiries per 10 minutes per IP

// Helper to escape HTML characters (XSS mitigation)
function sanitizeText(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && email.length <= 100 && emailRegex.test(email);
}

export async function POST(req) {
  try {
    const headersList = req.headers;
    const origin = headersList.get("origin");
    const host = headersList.get("host");
    const referer = headersList.get("referer");

    // 1. CSRF Verification
    if (origin) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          return NextResponse.json(
            { error: "Forbidden: CSRF verification failed (origin mismatch)." },
            { status: 403 }
          );
        }
      } catch (e) {
        return NextResponse.json({ error: "Forbidden: Invalid origin." }, { status: 403 });
      }
    } else if (referer) {
      try {
        const refererUrl = new URL(referer);
        if (refererUrl.host !== host) {
          return NextResponse.json(
            { error: "Forbidden: CSRF verification failed (referer mismatch)." },
            { status: 403 }
          );
        }
      } catch (e) {
        return NextResponse.json({ error: "Forbidden: Invalid referer." }, { status: 403 });
      }
    }

    // 2. Sliding Window Rate Limiting
    const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               headersList.get("x-real-ip")?.trim() || 
               "127.0.0.1";

    const now = Date.now();
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap.get(ip);
    // Keep only active timestamps within the 10-minute window
    const activeTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

    if (activeTimestamps.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Too many inquiries. Please wait a few minutes before submitting again." },
        { status: 429 }
      );
    }

    // Record the current attempt
    activeTimestamps.push(now);
    rateLimitMap.set(ip, activeTimestamps);

    // 3. Request Parsing & Strict Validation
    let body;
    try {
      body = await req.json();
    } catch (err) {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const { name, email, projectType, budgetRange, message } = body;

    // Strict Field Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: "Name must be a text value between 1 and 100 characters." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const validProjectTypes = ["residential", "commercial", "styling", "other"];
    if (!projectType || typeof projectType !== "string" || !validProjectTypes.includes(projectType.toLowerCase())) {
      return NextResponse.json({ error: "Please select a valid project type." }, { status: 400 });
    }

    const validBudgets = ["budget-1", "budget-2", "budget-3", "budget-4"];
    if (!budgetRange || typeof budgetRange !== "string" || !validBudgets.includes(budgetRange)) {
      return NextResponse.json({ error: "Please select a valid budget range." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 1000) {
      return NextResponse.json({ error: "Message must be a text value between 1 and 1000 characters." }, { status: 400 });
    }

    // Sanitization
    const sanitizedName = sanitizeText(name.trim());
    const sanitizedEmail = email.trim(); // Form validated, no HTML escaping required for standard email characters
    const sanitizedProjectType = sanitizeText(projectType.trim());
    const sanitizedBudget = sanitizeText(budgetRange.trim());
    const sanitizedMessage = sanitizeText(message.trim());

    // 4. Data Persistence (Write to private json store)
    const dataDirectory = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
    }

    const dataFilePath = path.join(dataDirectory, "inquiries.json");
    let inquiries = [];

    if (fs.existsSync(dataFilePath)) {
      try {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        inquiries = JSON.parse(fileContent);
      } catch (err) {
        // In case of corrupt JSON, start fresh to preserve functionality
        inquiries = [];
      }
    }

    // Generate anonymized IP to preserve client privacy while facilitating rate logs
    const maskedIp = ip.replace(/(\d+)\.(\d+)$/, "xxx.xxx");

    const newEntry = {
      id: typeof crypto.randomUUID === "function" ? crypto.randomUUID() : Math.random().toString(36).substring(2, 11),
      name: sanitizedName,
      email: sanitizedEmail,
      projectType: sanitizedProjectType,
      budgetRange: sanitizedBudget,
      message: sanitizedMessage,
      submittedAt: new Date().toISOString(),
      senderIpMasked: maskedIp
    };

    inquiries.push(newEntry);
    fs.writeFileSync(dataFilePath, JSON.stringify(inquiries, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Inquiry received and stored securely." }, { status: 200 });

  } catch (error) {
    console.error("Critical error in POST /api/inquiry:", error);
    return NextResponse.json(
      { error: "An internal server error occurred while processing your request safely." },
      { status: 500 }
    );
  }
}
