"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Instagram, 
  Linkedin
} from "lucide-react";

// Gallery Items Collection featuring D:\proj img 2nd one images & Studio Works
const GALLERY_ITEMS = [
  // Left Column (Col 1) Items
  {
    id: "img-2nd-1",
    column: 1,
    title: "Minimalist Lounge Study",
    subtitle: "Organic Tones & Natural Light",
    category: "residential",
    image: "/images/projects-2nd/nathan-van-egmond-0IwypLLbHiA-unsplash.jpg",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "img-2nd-2",
    column: 1,
    title: "Sculptural Workspace",
    subtitle: "Tactile Wood & Muted Plaster",
    category: "commercial",
    image: "/images/projects-2nd/bilal-mansuri-mGI8b4KFoFM-unsplash.jpg",
    aspectRatio: "aspect-square"
  },
  {
    id: "img-2nd-3",
    column: 1,
    title: "Modern Solitude Living",
    subtitle: "Warm Earthy Textures",
    category: "living",
    image: "/images/projects-2nd/kam-idris-_HqHX3LBN18-unsplash.jpg",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "studio-1",
    column: 1,
    title: "The Terracotta Haven",
    subtitle: "Modern Minimalist Residence",
    category: "residential",
    image: "/images/project-living-room.jpg",
    aspectRatio: "aspect-[16/11]"
  },
  {
    id: "studio-2",
    column: 1,
    title: "Villa Sereno Penthouse",
    subtitle: "Panoramic Living Lounge",
    category: "commercial",
    image: "/images/project-villa.png",
    aspectRatio: "aspect-[4/5]"
  },

  // Right Column (Col 2 - Offset / Shifted Downwards) Items
  {
    id: "img-2nd-4",
    column: 2,
    title: "Serene Dining Alcove",
    subtitle: "Bespoke Lighting & Stone Table",
    category: "living",
    image: "/images/projects-2nd/suhyeon-choi-ehxwis6Ltxg-unsplash.jpg",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "img-2nd-5",
    column: 2,
    title: "Curated Reading Corner",
    subtitle: "Handcrafted Furnishings & Plaster",
    category: "residential",
    image: "/images/projects-2nd/bilal-mansuri-UUnxaJyzqb4-unsplash (1).jpg",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "studio-3",
    column: 2,
    title: "Plaster & Oak Studio",
    subtitle: "Executive Commercial Suite",
    category: "commercial",
    image: "/images/project-desk.jpg",
    aspectRatio: "aspect-[16/11]"
  },
  {
    id: "studio-4",
    column: 2,
    title: "Terracotta Artisan Lounge",
    subtitle: "Quiet Luxury Material Palette",
    category: "living",
    image: "/images/project-terracotta.png",
    aspectRatio: "aspect-square"
  },
  {
    id: "studio-5",
    column: 2,
    title: "Architectural Volume",
    subtitle: "High Ceiling Interior",
    category: "residential",
    image: "/images/hero-interior.png",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "img-styling",
    column: 2,
    title: "Curated Silhouette & Living Lounge",
    subtitle: "Minimalist Art & Tactile Curation",
    category: "styling",
    image: "/images/project-styling.jpg",
    aspectRatio: "aspect-[4/5]"
  }
];

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter gallery items by selected category
  const filteredItems = activeCategory === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const leftColItems = filteredItems.filter(item => item.column === 1);
  const rightColItems = filteredItems.filter(item => item.column === 2);

  // Flat array of currently visible images for lightbox sequence
  const currentImagesList = filteredItems;

  const openLightbox = (id) => {
    const idx = currentImagesList.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % currentImagesList.length);
    }
  }, [lightboxIndex, currentImagesList.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + currentImagesList.length) % currentImagesList.length);
    }
  }, [lightboxIndex, currentImagesList.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-studio-beige text-studio-charcoal selection:bg-studio-terracotta selection:text-studio-offwhite">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-studio-charcoal/10 bg-studio-beige/85 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          
          {/* Logo brand serif */}
          <Link 
            href="/"
            className="font-serif text-xl sm:text-2xl font-light tracking-wide text-studio-charcoal hover:opacity-80 transition-opacity"
            id="brand-logo-projects"
          >
            Patil Associates
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest font-light text-studio-charcoal/80">
            <Link 
              href="/"
              className="group inline-flex items-center gap-2 hover:text-studio-terracotta transition-colors duration-300"
              id="nav-back-home"
            >
              <ArrowLeft className="h-4 w-4 stroke-[1.5] text-studio-terracotta group-hover:-translate-x-1 transition-transform" />
              BACK TO HOME
            </Link>
            <span className="text-studio-terracotta font-medium tracking-widest border-b border-studio-terracotta pb-0.5">
              ALL PROJECTS
            </span>
            <Link 
              href="/#contact"
              className="hover:text-studio-terracotta transition-colors duration-300"
              id="nav-contact"
            >
              INQUIRE
            </Link>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden text-studio-charcoal p-1 hover:text-studio-terracotta transition-colors"
            aria-label="Open navigation menu"
            id="mobile-menu-btn-projects"
          >
            <Menu className="h-6 w-6 stroke-[1.25]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
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
            <span className="font-serif text-lg text-studio-charcoal/80">Patil Associates</span>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="text-studio-charcoal hover:text-studio-terracotta transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 stroke-[1.25]" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8 my-auto text-2xl font-serif text-studio-charcoal">
            <Link 
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowLeft className="h-5 w-5 rotate-180 text-studio-terracotta" />
            </Link>
            <Link 
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5 font-medium"
            >
              All Projects
            </Link>
            <Link 
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal/5"
            >
              Contact & Inquiry
            </Link>
          </nav>

          <div className="text-xs text-studio-charcoal/50 tracking-wider">
            Nagpur, Maharashtra, India
          </div>
        </div>
      </div>


      {/* 2. HERO INTRO SECTION - CENTERED */}
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-studio-beige border-b border-studio-charcoal/10">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center flex flex-col items-center">
            <div className="max-w-3xl">
              <span className="text-xs tracking-[0.3em] font-medium text-studio-terracotta uppercase block mb-3">
                ARCHITECTURAL & GALLERY SHOWCASE
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-studio-charcoal leading-[1.12]">
                Curated Spaces & Tactile Materiality.
              </h1>
              <p className="mt-4 text-base md:text-lg font-light text-studio-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                An unadorned visual exploration of our residential, commercial, and bespoke spatial designs. Form, light, and texture expressed in quiet balance.
              </p>
            </div>

            {/* Category Filter Tabs - WIDE PUSHED TO SIDES WITH GENEROUS INSET & NO UNDERLINE */}
            <div className="w-full max-w-6xl mx-auto mt-10 flex flex-wrap items-center justify-between gap-6 sm:gap-10 md:gap-14 border-t border-studio-charcoal/10 pt-8 text-xs sm:text-sm tracking-[0.25em] font-light text-studio-charcoal/60 uppercase px-8 sm:px-16 lg:px-24">
              {["all", "residential", "commercial", "styling", "living"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`transition-colors duration-300 relative py-2 px-1 hover:text-studio-charcoal ${
                    activeCategory === cat ? "text-studio-terracotta font-medium" : ""
                  }`}
                  id={`cat-filter-${cat}`}
                >
                  {cat === "living" ? "Living Spaces" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* 3. STAGGERED 2-COLUMN GALLERY GRID WITH CENTERED CAPTIONS */}
        <section className="py-12 md:py-20 bg-studio-offwhite">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              
              {/* Left Column */}
              <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-14">
                {leftColItems.map((item, idx) => (
                  <article key={item.id} className="flex flex-col items-center text-center">
                    <div
                      onClick={() => openLightbox(item.id)}
                      className="group relative cursor-pointer overflow-hidden border border-studio-charcoal/10 bg-studio-beige shadow-sm transition-all duration-500 hover:shadow-xl w-full rounded-sm"
                    >
                      <div className={`relative w-full overflow-hidden ${item.aspectRatio}`}>
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.subtitle} | Patil Associates Luxury Interior Portfolio Nagpur`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        
                        {/* Quiet zoom overlay icon */}
                        <div className="absolute inset-0 bg-studio-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-studio-beige/90 backdrop-blur-md text-studio-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Maximize2 className="h-5 w-5 stroke-[1.5] text-studio-terracotta" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Centered Captions under Image */}
                    <div className="mt-4 flex flex-col items-center text-center max-w-sm">
                      <span className="text-[10px] tracking-widest font-light text-studio-terracotta uppercase block mb-0.5">
                        0{idx * 2 + 1} • {item.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-light text-studio-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light text-studio-charcoal/60 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right Column (Offset Non-Parallel Rhythm) */}
              <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-14 pt-0 md:pt-12 lg:pt-16">
                {rightColItems.map((item, idx) => (
                  <article key={item.id} className="flex flex-col items-center text-center">
                    <div
                      onClick={() => openLightbox(item.id)}
                      className="group relative cursor-pointer overflow-hidden border border-studio-charcoal/10 bg-studio-beige shadow-sm transition-all duration-500 hover:shadow-xl w-full rounded-sm"
                    >
                      <div className={`relative w-full overflow-hidden ${item.aspectRatio}`}>
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.subtitle} | Patil Associates Luxury Interior Portfolio Nagpur`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        
                        {/* Quiet zoom overlay icon */}
                        <div className="absolute inset-0 bg-studio-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-studio-beige/90 backdrop-blur-md text-studio-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Maximize2 className="h-5 w-5 stroke-[1.5] text-studio-terracotta" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Centered Captions under Image */}
                    <div className="mt-4 flex flex-col items-center text-center max-w-sm">
                      <span className="text-[10px] tracking-widest font-light text-studio-terracotta uppercase block mb-0.5">
                        0{idx * 2 + 2} • {item.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-light text-studio-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light text-studio-charcoal/60 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

            </div>

          </div>
        </section>


        {/* 4. LIGHTBOX MODAL */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-studio-charcoal/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in-up">
            
            {/* Top Bar: Counter only — no close button */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-studio-offwhite/50 z-20">
              <span className="text-[10px] tracking-[0.3em] uppercase font-light">
                Studio Archive &nbsp;·&nbsp; {String(lightboxIndex + 1).padStart(2, '0')} of {String(currentImagesList.length).padStart(2, '0')}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-light hidden sm:block">
                Press <kbd className="px-1.5 py-0.5 bg-studio-offwhite/10 rounded text-studio-offwhite/60 font-mono text-[9px]">ESC</kbd> to exit &nbsp;·&nbsp; Arrow keys to navigate
              </span>
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-studio-offwhite/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
            </button>

            {/* Main Lightbox Image Frame */}
            <div className="relative max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center p-2 sm:p-6">
              <div className="relative w-full h-full max-h-[68vh] aspect-[4/5] sm:aspect-auto">
                <Image
                  src={currentImagesList[lightboxIndex].image}
                  alt={`${currentImagesList[lightboxIndex].title} — High Resolution Interior Project View | Patil Associates`}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-studio-offwhite/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
              aria-label="Next Image"
            >
              <ChevronRight className="h-8 w-8 stroke-[1.5]" />
            </button>

            {/* Bottom Description Panel */}
            <div className="relative z-20 mt-2 sm:mt-4 w-full max-w-3xl text-center px-6">
              <div className="border-t border-studio-offwhite/10 pt-4 sm:pt-5">
                <span className="text-[9px] tracking-[0.35em] text-studio-terracotta uppercase font-medium block mb-1.5">
                  {currentImagesList[lightboxIndex].category} &nbsp;·&nbsp; Patil Associates
                </span>
                <h2 className="font-serif text-lg sm:text-2xl font-light text-studio-offwhite leading-snug mb-2">
                  {currentImagesList[lightboxIndex].title}
                </h2>
                <p className="text-xs sm:text-sm font-light text-studio-offwhite/50 leading-relaxed max-w-xl mx-auto italic">
                  Every space we craft carries a silent conversation between light and shadow, texture and void. 
                  This work embodies our belief that true luxury whispers — it never shouts.
                </p>
                <p className="mt-2 text-[10px] tracking-widest text-studio-offwhite/30 uppercase">
                  {currentImagesList[lightboxIndex].subtitle}
                </p>
              </div>
            </div>

          </div>
        )}
      </main>


      {/* 5. FOOTER */}
      <footer className="bg-studio-charcoal text-studio-offwhite border-t border-studio-charcoal/20 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-studio-offwhite/10 pb-12">
            <div>
              <span className="font-serif text-2xl font-light tracking-wide text-studio-offwhite block">
                Patil Associates
              </span>
              <span className="text-xs text-studio-offwhite/60 tracking-widest uppercase block mt-1">
                Luxury Interior Design Studio • Nagpur, India
              </span>
            </div>

            <div className="flex items-center space-x-6 text-studio-offwhite/80">
              <a 
                href="https://www.instagram.com/showw_up/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-studio-terracotta transition-colors p-2"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5 stroke-[1.25]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-studio-terracotta transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 stroke-[1.25]" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-studio-offwhite/50 tracking-wider">
            <span>© {new Date().getFullYear()} Patil Associates. All rights reserved.</span>
            <Link href="/" className="hover:text-studio-offwhite transition-colors mt-4 sm:mt-0">
              Return to Home Page ↑
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
