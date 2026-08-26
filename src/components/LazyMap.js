"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

export default function LazyMap() {
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef(null);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Shop+No.+3,+Ground,+2,+Besa-Pipla+Rd,+Atharva+Nagri+2,+Manewada,+Besa+Pipla,+Maharashtra+440037";
  const embedUrl = "https://maps.google.com/maps?q=Shop+No.+3,+Ground,+2,+Besa-Pipla+Rd,+Atharva+Nagri+2,+Manewada,+Besa+Pipla,+Maharashtra+440037&t=&z=16&ie=UTF8&iwloc=&output=embed";

  useEffect(() => {
    // 1. Preload early using wide IntersectionObserver (800px margin)
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRenderIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" } // Starts fetching long before scrolling into view
    );

    observer.observe(containerRef.current);

    // 2. Fallback: Preload automatically after 1.5s idle delay regardless of scroll position
    const idleTimer = setTimeout(() => {
      setShouldRenderIframe(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-[4/3] border border-studio-charcoal/10 overflow-hidden relative shadow-sm bg-studio-beige/40 rounded-sm group"
    >
      {/* Background placeholder card (shown while iframe is initializing) */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center bg-studio-beige/80 p-6 text-center transition-opacity duration-500 z-0 ${
          iframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MapPin className="h-7 w-7 text-studio-terracotta mb-2 animate-pulse" />
        <span className="font-serif text-sm text-studio-charcoal font-medium">
          Nagpur Studio Location
        </span>
        <span className="text-[11px] text-studio-charcoal/60 mt-1 font-light max-w-xs">
          Besa-Pipla Rd, Manewada, Nagpur
        </span>
      </div>

      {/* Google Map iframe frame with fast background loading */}
      {shouldRenderIframe && (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Patil Associates Studio Location Map"
          onLoad={() => setIframeLoaded(true)}
          className={`w-full h-full border-0 relative z-10 transition-opacity duration-500 ${
            iframeLoaded ? "opacity-100" : "opacity-0"
          }`}
          id="map-embed-frame"
        />
      )}

      {/* Floating Action Badge to open direct directions on Google Maps */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-studio-beige/90 backdrop-blur-md border border-studio-charcoal/15 text-[11px] font-medium tracking-wide text-studio-charcoal hover:bg-studio-terracotta hover:text-studio-offwhite hover:border-studio-terracotta transition-all duration-300 shadow-sm rounded-sm"
        id="open-google-maps-btn"
      >
        <Navigation className="h-3 w-3 text-studio-terracotta group-hover:text-studio-offwhite transition-colors" />
        <span>Get Directions</span>
        <ExternalLink className="h-3 w-3 opacity-60" />
      </a>
    </div>
  );
}

