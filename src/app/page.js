"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUp,
  Instagram,
  Linkedin,
  Compass,
  Layers,
  Award,
  CheckCircle,
  Loader2
} from "lucide-react";

// Project Details Data
const PROJECTS = [
  {
    id: "proj-1",
    title: "The Terracotta Haven",
    category: "residential",
    subtitle: "Modern Minimalist Residence",
    location: "Nagpur",
    year: "2023",
    image: "/images/project-terracotta.png"
  },
  {
    id: "proj-2",
    title: "Plaster & Oak Studio",
    category: "commercial",
    subtitle: "Commercial Workspace",
    location: "Nagpur",
    year: "2024",
    image: "/images/project-plaster.png"
  },
  {
    id: "proj-3",
    title: "Villa Sereno",
    category: "residential",
    subtitle: "Luxury Penthouse Interior",
    location: "Nagpur",
    year: "2024",
    image: "/images/project-villa.png"
  }
];

// Design Process Timeline Data
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Spatial Planning",
    tagline: "Vision & Flow",
    description: "We begin with a deep dive into your lifestyle, preferences, and spatial aspirations. By analyzing the structural blueprint, we craft custom floor layouts that optimize circulation, balance, and volume before any aesthetic layers are introduced."
  },
  {
    number: "02",
    title: "Material Selection & 3D Visualization",
    tagline: "Honest Materiality",
    description: "Here, the palette is born. We curate tactile samples—hand-finished plasters, raw oaks, terracotta tiles, and custom fabrics. These are paired with high-fidelity 3D renderings, allowing you to walk through and feel the textures of your future space."
  },
  {
    number: "03",
    title: "Execution & Custom Furniture Crafting",
    tagline: "Bespoke Artistry",
    description: "Collaborating with master artisans, we bring technical drawings to life. From tailor-made joinery and custom lounge chairs to structural site execution, we manage every detail on-site to ensure precise alignment with the design vision."
  },
  {
    number: "04",
    title: "Final Styling & Handover",
    tagline: "The Art of Detail",
    description: "The final layer. We source organic ceramics, curated artwork, lighting fixtures, and custom textiles to layer warmth into the space. We style each nook before handing over the keys to a complete, living work of art."
  }
];

// Client Testimonials Data
const TESTIMONIALS = [
  {
    quote: "Disha has an incredible ability to blend raw aesthetics with functionality. Our home feels warm, elegant, and truly reflects our family's personality. Every corner tells a quiet, beautiful story.",
    author: "THE RAJ FAMILY",
    location: "Nagpur"
  },
  {
    quote: "Working with Disha A Kewalramani was an absolute pleasure. Her architectural understanding and emphasis on textures rather than clutter transformed our corporate workspace into a serene, inspiring oasis.",
    author: "MEHTA ASSOCIATES",
    location: "Nagpur"
  },
  {
    quote: "She delivered our penthouse with absolute precision in schedule. The bespoke furniture pieces are works of art in themselves. Her focus on curated materiality sets her studio apart.",
    author: "DR. ANANYA & VIKRAM",
    location: "Nagpur"
  }
];

export default function Home() {
  // Mobile navigation drawer state
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Portfolio category filter state
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Interactive timeline step state
  const [activeStep, setActiveStep] = useState(0);
  
  // Testimonial slider state
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // Form input and submission states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formProjectType, setFormProjectType] = useState("residential");
  const [formBudgetRange, setFormBudgetRange] = useState("budget-1");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle, loading, success, error
  const [formErrorMsg, setFormErrorMsg] = useState("");

  // Auto-play testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Filter project grid list
  const filteredProjects = activeFilter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  // Secure inquiry submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormErrorMsg("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Send custom requested header for anti-CSRF check
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          projectType: formProjectType,
          budgetRange: formBudgetRange,
          message: formMessage
        })
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        // Reset fields
        setFormName("");
        setFormEmail("");
        setFormProjectType("residential");
        setFormBudgetRange("budget-1");
        setFormMessage("");
      } else {
        setFormStatus("error");
        setFormErrorMsg(data.error || "Something went wrong. Please check your inputs.");
      }
    } catch (err) {
      setFormStatus("error");
      setFormErrorMsg("Unable to connect to the server securely. Please try again later.");
    }
  };

  return (
    <div className="flex-1 flex flex-col font-sans selection:bg-studio-terracotta selection:text-studio-offwhite">
      
      {/* 2. SITE NAVIGATION & HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-studio-charcoal/10 bg-studio-beige/85 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          
          {/* Logo brand serif */}
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, "hero")}
            className="font-serif text-xl sm:text-2xl font-light tracking-wide text-studio-charcoal hover:opacity-80 transition-opacity"
            id="brand-logo"
          >
            Disha A Kewalramani
          </a>

          {/* Desktop Menu Link list */}
          <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest font-light text-studio-charcoal/80">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")} 
              className="hover:text-studio-terracotta transition-colors duration-300"
              id="nav-projects"
            >
              PROJECTS
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")} 
              className="hover:text-studio-terracotta transition-colors duration-300"
              id="nav-about"
            >
              ABOUT
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleScroll(e, "process")} 
              className="hover:text-studio-terracotta transition-colors duration-300"
              id="nav-process"
            >
              PROCESS
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => handleScroll(e, "testimonials")} 
              className="hover:text-studio-terracotta transition-colors duration-300"
              id="nav-journal"
            >
              TESTIMONIALS
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")} 
              className="hover:text-studio-terracotta transition-colors duration-300 font-medium text-studio-terracotta"
              id="nav-contact"
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden text-studio-charcoal p-1 hover:text-studio-terracotta transition-colors"
            aria-label="Open navigation menu"
            id="mobile-menu-btn"
          >
            <Menu className="h-6 w-6 stroke-[1.25]" />
          </button>
        </div>
      </header>

      {/* Mobile minimalist overlay drawer */}
      <div 
        className={`fixed inset-0 z-50 flex justify-end bg-studio-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className={`h-full w-full max-w-sm bg-studio-beige px-8 py-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg text-studio-charcoal/80">Disha A K.</span>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="text-studio-charcoal hover:text-studio-terracotta transition-colors"
              aria-label="Close navigation menu"
              id="close-menu-btn"
            >
              <X className="h-6 w-6 stroke-[1.25]" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8 my-auto text-2xl font-serif text-studio-charcoal">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
              id="mobile-nav-projects"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
              id="mobile-nav-about"
            >
              About Studio
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleScroll(e, "process")}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
              id="mobile-nav-process"
            >
              Design Process
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => handleScroll(e, "testimonials")}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
              id="mobile-nav-testimonials"
            >
              Client Stories
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
              id="mobile-nav-contact"
            >
              Contact Inquiry
            </a>
          </nav>

          <div className="text-xs text-studio-charcoal/50 tracking-wider">
            Nagpur, Maharashtra, India
          </div>
        </div>
      </div>

      <main className="flex-1">

        {/* Section 1: Hero Section */}
        <section 
          id="hero" 
          className="relative min-h-[90vh] flex flex-col justify-end bg-studio-beige py-12 md:py-20 lg:py-28"
        >
          {/* Half-bleed Hero Visual Layer */}
          <div className="absolute inset-0 md:left-1/3 overflow-hidden">
            <Image 
              src="/images/hero-interior.png" 
              alt="Serene modern luxury living room by Disha A Kewalramani" 
              fill
              priority
              className="object-cover object-center opacity-90 brightness-95"
            />
            {/* Subtle soft plaster gradient filter */}
            <div className="absolute inset-0 bg-gradient-to-r from-studio-beige via-studio-beige/60 to-transparent md:from-studio-beige md:via-studio-beige/10" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 z-10">
            <div className="max-w-2xl md:max-w-xl animate-fade-in-up">
              <span className="text-xs tracking-[0.3em] font-medium text-studio-terracotta uppercase">
                INTERIOR DESIGN
              </span>
              
              <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-studio-charcoal">
                Creating timeless spaces with warmth, elegance and thoughtful details.
              </h1>
              
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <a 
                  href="#projects" 
                  onClick={(e) => handleScroll(e, "projects")}
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] font-semibold text-studio-charcoal hover:text-studio-terracotta transition-colors duration-300"
                  id="hero-cta-btn"
                >
                  VIEW PORTFOLIO 
                  <ArrowRight className="h-4 w-4 stroke-[1.5] transform group-hover:translate-x-2 transition-transform duration-300 text-studio-terracotta" />
                </a>
                
                {/* Scroll Indicator */}
                <a 
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hidden sm:inline-flex items-center text-[10px] tracking-[0.2em] font-light text-studio-charcoal/40 hover:text-studio-charcoal/80 transition-colors"
                >
                  SCROLL TO DISCOVER
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Section 2: Statement & Ethos (About Preview) */}
        <section 
          id="about" 
          className="bg-studio-offwhite py-20 md:py-32 border-t border-b border-studio-charcoal/5"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5">
                <div className="relative hover-zoom-container aspect-[3/4] max-w-md mx-auto shadow-sm border border-studio-charcoal/5">
                  <Image 
                    src="/images/designer-portrait.png" 
                    alt="Interior Designer Disha A Kewalramani" 
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover-zoom-img"
                  />
                </div>
              </div>

              {/* Right Column: Copy & Grid */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase">
                  THE STUDIO
                </span>
                
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal leading-tight">
                  Every space tells a story.
                </h2>
                
                <p className="mt-6 text-base md:text-lg leading-relaxed font-light text-studio-charcoal/70">
                  Based out of Nagpur, studio Disha A Kewalramani curates bespoke residential and commercial environments where functionality meets quiet luxury. We believe that true sophistication lies in the balance of light, line, and organic texture.
                </p>

                {/* Read More button */}
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, "contact")}
                    className="group inline-flex items-center gap-2 text-xs tracking-wider font-light text-studio-charcoal/80 hover:text-studio-terracotta transition-colors duration-300"
                  >
                    READ MORE 
                    <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1.5 transition-transform duration-300 text-studio-terracotta" />
                  </a>
                </div>

                {/* Key Pillars (3-column micro grid) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-studio-charcoal/10">
                  
                  {/* Pillar 1 */}
                  <div className="flex flex-col">
                    <Compass className="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" />
                    <h3 className="font-serif text-lg font-medium text-studio-charcoal">
                      Spatial Harmony
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
                      Thoughtful layouts that bring balance, flow and purpose to every space.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex flex-col">
                    <Layers className="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" />
                    <h3 className="font-serif text-lg font-medium text-studio-charcoal">
                      Curated Materiality
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
                      We source and combine materials that age beautifully and feel honest.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex flex-col">
                    <Award className="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" />
                    <h3 className="font-serif text-lg font-medium text-studio-charcoal">
                      Bespoke Craftsmanship
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
                      Custom furniture and details crafted with precision and care.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Section 3: Selected Projects (Interactive Portfolio Grid) */}
        <section id="projects" className="bg-studio-beige py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            
            {/* Header + Filters */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-studio-charcoal/10">
              <div>
                <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase">
                  SELECTED PROJECTS
                </span>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
                  Interactive Portfolio
                </h2>
              </div>
              
              {/* Filter tabs */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs tracking-widest font-light text-studio-charcoal/60">
                {["all", "residential", "commercial", "styling"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`uppercase transition-colors duration-300 relative py-1 hover:text-studio-charcoal ${
                      activeFilter === cat ? "text-studio-terracotta font-medium" : ""
                    }`}
                    id={`filter-${cat}`}
                  >
                    {cat}
                    {activeFilter === cat && (
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-studio-terracotta animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric Masonry Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              
              {filteredProjects.map((project, idx) => {
                // Determine styling based on asymmetric indexes to give standard editorial layout
                let gridClasses = "md:col-span-6";
                if (idx === 0) gridClasses = "md:col-span-7 md:translate-y-0";
                if (idx === 1) gridClasses = "md:col-span-5 md:translate-y-8";
                if (idx === 2) gridClasses = "md:col-span-8 md:col-start-3 md:translate-y-12";

                return (
                  <article 
                    key={project.id} 
                    className={`${gridClasses} group flex flex-col bg-transparent`}
                  >
                    <div className="relative hover-zoom-container aspect-[4/3] md:aspect-[1.3] w-full border border-studio-charcoal/5 shadow-sm">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover hover-zoom-img"
                      />
                      
                      {/* Project quick details overlay on hover */}
                      <div className="absolute inset-0 bg-studio-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 backdrop-blur-[2px]">
                        <div className="text-studio-offwhite text-xs tracking-widest font-light flex items-center justify-between">
                          <span>{project.location}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start justify-between">
                      <div>
                        <span className="text-[10px] tracking-widest font-light text-studio-charcoal/40 uppercase block mb-1">
                          0{idx + 1}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-studio-charcoal group-hover:text-studio-terracotta transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-xs font-light text-studio-charcoal/60 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}

            </div>

            {/* View Full Portfolio Button */}
            <div className="mt-28 flex justify-center">
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-studio-charcoal/25 bg-transparent text-xs tracking-widest text-studio-charcoal hover:border-studio-terracotta hover:text-studio-terracotta transition-all duration-300 overflow-hidden"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-studio-terracotta" />
              </a>
            </div>

          </div>
        </section>


        {/* Section 4: Design Process (Interactive Timeline) */}
        <section 
          id="process" 
          className="bg-studio-offwhite py-20 md:py-32 border-t border-b border-studio-charcoal/5"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
              <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase">
                OUR DESIGN PROCESS
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
                From Concept to Handover
              </h2>
              <p className="mt-4 text-sm font-light text-studio-charcoal/60 leading-relaxed">
                Click on the steps below to explore our detailed design roadmap and see how we execute projects.
              </p>
            </div>

            {/* Desktop timeline nodes */}
            <div className="hidden lg:grid grid-cols-4 gap-8 relative">
              {/* Dotted connecting line background */}
              <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] process-line" />
              
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none z-10"
                  id={`process-node-${idx}`}
                >
                  {/* Circle step handle */}
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    activeStep === idx 
                      ? "border-studio-terracotta bg-studio-terracotta text-studio-offwhite shadow-md scale-110" 
                      : "border-studio-charcoal/20 bg-studio-offwhite text-studio-charcoal/60 group-hover:border-studio-charcoal group-hover:text-studio-charcoal"
                  }`}>
                    <span className="font-serif text-sm font-medium">{step.number}</span>
                  </div>
                  
                  <h3 className={`mt-6 font-serif text-lg font-medium transition-colors ${
                    activeStep === idx ? "text-studio-terracotta" : "text-studio-charcoal/80"
                  }`}>
                    {step.title}
                  </h3>
                  
                  <span className="text-[10px] tracking-widest text-studio-charcoal/40 uppercase mt-1">
                    {step.tagline}
                  </span>
                </button>
              ))}
            </div>

            {/* Interactive Timeline Detail Box */}
            <div className="mt-12 lg:mt-16 mx-auto max-w-4xl bg-studio-beige border border-studio-charcoal/10 p-8 md:p-12 shadow-sm rounded-sm">
              {/* Mobile steps controller */}
              <div className="flex lg:hidden justify-between items-center border-b border-studio-charcoal/10 pb-6 mb-6">
                <button
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="p-2 border border-studio-charcoal/10 hover:border-studio-terracotta disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-center">
                  <span className="text-xs text-studio-terracotta font-serif font-semibold uppercase tracking-wider block">
                    STEP {PROCESS_STEPS[activeStep].number}
                  </span>
                  <span className="font-serif text-base text-studio-charcoal">
                    {PROCESS_STEPS[activeStep].title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveStep(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  className="p-2 border border-studio-charcoal/10 hover:border-studio-terracotta disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 flex flex-col md:border-r border-studio-charcoal/10 md:pr-8 h-full justify-between">
                  <div className="hidden lg:block text-studio-terracotta font-serif text-6xl font-extralight tracking-tighter">
                    {PROCESS_STEPS[activeStep].number}
                  </div>
                  <div>
                    <span className="text-xs text-studio-terracotta font-medium tracking-widest uppercase block mb-1">
                      focus
                    </span>
                    <span className="font-serif text-lg text-studio-charcoal font-medium">
                      {PROCESS_STEPS[activeStep].tagline}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-9 md:pl-4">
                  <h4 className="hidden lg:block font-serif text-2xl font-light text-studio-charcoal mb-4">
                    {PROCESS_STEPS[activeStep].title}
                  </h4>
                  <p className="text-sm md:text-base font-light text-studio-charcoal/70 leading-relaxed">
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Section 5: Client Stories & Press / Testimonials */}
        <section 
          id="testimonials" 
          className="relative bg-studio-beige py-24 md:py-32 overflow-hidden"
        >
          {/* Subtle decoration plaster bowl image on left */}
          <div className="absolute left-[-100px] bottom-[-50px] w-[350px] h-[350px] opacity-10 pointer-events-none select-none">
            <Image 
              src="/images/hero-interior.png" 
              alt="Decoration item shadow detail" 
              width={350}
              height={350}
              className="object-cover rounded-full filter grayscale"
            />
          </div>

          <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10 text-center">
            <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase">
              CLIENT STORIES
            </span>
            
            {/* Testimonials slider display */}
            <div className="mt-12 min-h-[160px] flex items-center justify-center">
              <blockquote className="transition-opacity duration-500 ease-in-out">
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic font-light leading-relaxed text-studio-charcoal">
                  &ldquo;{TESTIMONIALS[testimonialIndex].quote}&rdquo;
                </p>
                <cite className="mt-8 not-italic block">
                  <span className="text-xs tracking-[0.2em] font-semibold text-studio-charcoal block">
                    — {TESTIMONIALS[testimonialIndex].author}
                  </span>
                  <span className="text-[10px] tracking-widest text-studio-charcoal/40 uppercase block mt-1">
                    {TESTIMONIALS[testimonialIndex].location} Client
                  </span>
                </cite>
              </blockquote>
            </div>

            {/* Slider arrows and pagination */}
            <div className="mt-12 flex items-center justify-center gap-8">
              <button
                onClick={() => setTestimonialIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="p-2 border border-studio-charcoal/10 hover:border-studio-terracotta hover:text-studio-terracotta transition-colors text-studio-charcoal/60"
                aria-label="Previous quote"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      testimonialIndex === idx ? "w-6 bg-studio-terracotta" : "w-1.5 bg-studio-charcoal/15"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length)}
                className="p-2 border border-studio-charcoal/10 hover:border-studio-terracotta hover:text-studio-terracotta transition-colors text-studio-charcoal/60"
                aria-label="Next quote"
                id="testimonial-next-btn"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </section>


        {/* Section 6: Contact & Studio Location */}
        <section 
          id="contact" 
          className="bg-studio-offwhite py-20 md:py-28 lg:py-32 border-t border-studio-charcoal/10"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
              
              {/* Left Column: Secure Inquiry Form */}
              <div className="lg:col-span-7">
                <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase">
                  LET'S CREATE SOMETHING BEAUTIFUL
                </span>
                
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
                  Start Your Project Journey
                </h2>
                
                <p className="mt-4 text-sm font-light text-studio-charcoal/60 max-w-md">
                  Share details about your residential or commercial space, and we will get back to you within 48 hours.
                </p>

                {/* Secure Form submit with server validation responses */}
                <form 
                  onSubmit={handleSubmit} 
                  className="mt-10 space-y-6"
                  id="inquiry-form"
                >
                  
                  {/* Status notifications */}
                  {formStatus === "success" && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span>Thank you. Your project inquiry has been received securely. We will contact you soon.</span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                      <p className="font-semibold">Submission failed:</p>
                      <p className="mt-1">{formErrorMsg}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-name" className="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        maxLength={100}
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-studio-beige/40 border border-studio-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        maxLength={100}
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-studio-beige/40 border border-studio-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-project-type" className="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
                        Project Type *
                      </label>
                      <select
                        id="form-project-type"
                        value={formProjectType}
                        onChange={(e) => setFormProjectType(e.target.value)}
                        className="w-full bg-studio-beige/40 border border-studio-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
                      >
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Workspace</option>
                        <option value="styling">Styling & Art Curation</option>
                        <option value="other">Other Space Planning</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-budget" className="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
                        Budget Range *
                      </label>
                      <select
                        id="form-budget"
                        value={formBudgetRange}
                        onChange={(e) => setFormBudgetRange(e.target.value)}
                        className="w-full bg-studio-beige/40 border border-studio-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
                      >
                        <option value="budget-1">₹5L – ₹15L (INR)</option>
                        <option value="budget-2">₹15L – ₹50L (INR)</option>
                        <option value="budget-3">₹50L – ₹1.5Cr (INR)</option>
                        <option value="budget-4">Over ₹1.5Cr (INR)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
                      Your Message *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      maxLength={1000}
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Tell us about your space, dimensions, timeline, and styling goals..."
                      className="w-full bg-studio-beige/40 border border-studio-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-studio-terracotta text-studio-offwhite px-8 py-4 text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
                    id="submit-inquiry-btn"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  
                </form>
              </div>

              {/* Right Column: Address, Quick Details & Map Frame */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
                
                {/* Details list */}
                <div className="space-y-8">
                  <span className="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
                    STUDIO DETAILS
                  </span>
                  
                  <div className="space-y-6 text-sm text-studio-charcoal/80">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-studio-charcoal block">Nagpur Head Office</span>
                        <p className="mt-1 font-light text-studio-charcoal/70 leading-relaxed">
                          Near Lakhwani Hall, Jaripatka, Nagpur, Maharashtra 440014
                        </p>
                      </div>
                    </div>

                    {/* Phone/WhatsApp Link */}
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-studio-charcoal block">Phone / WhatsApp</span>
                        <a 
                          href="https://wa.me/919876543210" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-1 font-light text-studio-charcoal/70 hover:text-studio-terracotta transition-colors block"
                        >
                          +91 98765 43210 (Quick Connect)
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-studio-charcoal block">Email Address</span>
                        <a 
                          href="mailto:hello@dishakewalramani.com" 
                          className="mt-1 font-light text-studio-charcoal/70 hover:text-studio-terracotta transition-colors block"
                        >
                          hello@dishakewalramani.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* High-end Styled Map Frame */}
                <div className="w-full aspect-[4/3] border border-studio-charcoal/10 overflow-hidden relative shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0886191632734!2d79.08581781538743!3d21.188737385913217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c114f7b2c7e9%3A0xe54fb7144be7d94f!2sLakhwani%20Hall%2C%20Jaripatka%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Disha A Kewalramani Studio Location Map"
                    className="grayscale contrast-125 opacity-75 invert hover:opacity-100 duration-500 transition-opacity"
                    id="map-embed-frame"
                  ></iframe>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-studio-beige border-t border-studio-charcoal/10 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-studio-charcoal/10">
            
            {/* Logo */}
            <div className="font-serif text-xl tracking-wide text-studio-charcoal">
              Disha A Kewalramani
            </div>
            
            {/* Social Icons list */}
            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-studio-charcoal/60 hover:text-studio-terracotta transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5 stroke-[1.25]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-studio-charcoal/60 hover:text-studio-terracotta transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 stroke-[1.25]" />
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[10px] tracking-widest text-studio-charcoal/40 uppercase">
            <div>
              &copy; {new Date().getFullYear()} Disha A Kewalramani. All Rights Reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-studio-charcoal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-studio-charcoal transition-colors">Terms & Conditions</a>
            </div>

            {/* Back to top button */}
            <button
              onClick={(e) => handleScroll(e, "hero")}
              className="group inline-flex items-center gap-2 hover:text-studio-terracotta transition-colors"
              aria-label="Scroll back to top"
              id="back-to-top-btn"
            >
              <span>Back To Top</span>
              <ArrowUp className="h-3.5 w-3.5 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
