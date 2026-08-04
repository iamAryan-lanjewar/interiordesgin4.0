"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function LazyMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Lakhwani+Hall+Jaripatka+Nagpur";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0886191632734!2d79.08581781538743!3d21.188737385913217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c114f7b2c7e9%3A0xe54fb7144be7d94f!2sLakhwani%20Hall%2C%20Jaripatka%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin";

  // Automatically load standard Google Map when user scrolls near the contact/map section
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-[4/3] border border-studio-charcoal/10 overflow-hidden relative shadow-sm bg-studio-beige/40"
    >
      {isLoaded ? (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Disha A Kewalramani Studio Location Map"
          className="w-full h-full border-0 transition-opacity duration-300"
          id="map-embed-frame"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-studio-beige/60 p-6 text-center">
          <MapPin className="h-8 w-8 text-studio-terracotta mb-2 animate-bounce" />
          <span className="text-xs tracking-widest text-studio-charcoal/70 uppercase font-medium">
            Loading Google Map...
          </span>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[11px] text-studio-terracotta hover:underline flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  );
}
