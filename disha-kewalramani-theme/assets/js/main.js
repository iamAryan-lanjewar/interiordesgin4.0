/**
 * Disha A Kewalramani - Quiet Luxury Interior Studio Theme Scripts
 * Vanilla JS implementation for interactivity, sliders, tabs, and form logic
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------
   * 1. MOBILE NAVIGATION DRAWER
   * ------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer-overlay');
  const mobileDrawerPanel = document.getElementById('mobile-drawer-panel');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('opacity-0', 'pointer-events-none');
    mobileDrawer.classList.add('opacity-100', 'pointer-events-auto');
    if (mobileDrawerPanel) {
      mobileDrawerPanel.classList.remove('translate-x-full');
      mobileDrawerPanel.classList.add('translate-x-0');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('opacity-100', 'pointer-events-auto');
    mobileDrawer.classList.add('opacity-0', 'pointer-events-none');
    if (mobileDrawerPanel) {
      mobileDrawerPanel.classList.remove('translate-x-0');
      mobileDrawerPanel.classList.add('translate-x-full');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMobileMenu();
      }
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  /* -------------------------------------------------------------------------
   * 2. SMOOTH SCROLL FOR ANCHOR LINKS & BACK TO TOP
   * ------------------------------------------------------------------------- */
  const scrollLinks = document.querySelectorAll('a[href^="#"], button[data-scroll-to]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      let targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        targetId = link.getAttribute('data-scroll-to');
      }
      
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });


  /* -------------------------------------------------------------------------
   * 3. PORTFOLIO CATEGORY FILTER TABS
   * ------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const projectItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update button active styles
      filterButtons.forEach(b => {
        b.classList.remove('text-studio-terracotta', 'font-medium', 'active-filter');
        const indicator = b.querySelector('.filter-indicator');
        if (indicator) indicator.classList.add('hidden');
      });

      btn.classList.add('text-studio-terracotta', 'font-medium', 'active-filter');
      const activeIndicator = btn.querySelector('.filter-indicator');
      if (activeIndicator) activeIndicator.classList.remove('hidden');

      // Show/Hide project items
      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });


  /* -------------------------------------------------------------------------
   * 4. INTERACTIVE DESIGN PROCESS TIMELINE
   * ------------------------------------------------------------------------- */
  const processSteps = [
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

  let currentProcessStep = 0;
  const desktopNodes = document.querySelectorAll('.process-node-btn');
  const processDetailNumber = document.getElementById('process-detail-number');
  const processDetailMobileNumber = document.getElementById('process-detail-mobile-number');
  const processDetailTagline = document.getElementById('process-detail-tagline');
  const processDetailTitle = document.getElementById('process-detail-title');
  const processDetailMobileTitle = document.getElementById('process-detail-mobile-title');
  const processDetailDescription = document.getElementById('process-detail-description');
  const prevStepBtn = document.getElementById('process-prev-step');
  const nextStepBtn = document.getElementById('process-next-step');

  function updateProcessStep(index) {
    if (index < 0 || index >= processSteps.length) return;
    currentProcessStep = index;
    const stepData = processSteps[index];

    // Update Desktop Node Classes
    desktopNodes.forEach((node, idx) => {
      const circle = node.querySelector('.process-node-circle');
      const title = node.querySelector('.process-node-title');

      if (idx === index) {
        circle.classList.add('border-studio-terracotta', 'bg-studio-terracotta', 'text-studio-offwhite', 'shadow-md', 'scale-110');
        circle.classList.remove('border-studio-charcoal/20', 'bg-studio-offwhite', 'text-studio-charcoal/60');
        title.classList.add('text-studio-terracotta');
        title.classList.remove('text-studio-charcoal/80');
      } else {
        circle.classList.remove('border-studio-terracotta', 'bg-studio-terracotta', 'text-studio-offwhite', 'shadow-md', 'scale-110');
        circle.classList.add('border-studio-charcoal/20', 'bg-studio-offwhite', 'text-studio-charcoal/60');
        title.classList.remove('text-studio-terracotta');
        title.classList.add('text-studio-charcoal/80');
      }
    });

    // Update Detail Container Content
    if (processDetailNumber) processDetailNumber.textContent = stepData.number;
    if (processDetailMobileNumber) processDetailMobileNumber.textContent = `STEP ${stepData.number}`;
    if (processDetailTagline) processDetailTagline.textContent = stepData.tagline;
    if (processDetailTitle) processDetailTitle.textContent = stepData.title;
    if (processDetailMobileTitle) processDetailMobileTitle.textContent = stepData.title;
    if (processDetailDescription) processDetailDescription.textContent = stepData.description;

    // Mobile prev/next buttons disabled state
    if (prevStepBtn) prevStepBtn.disabled = (currentProcessStep === 0);
    if (nextStepBtn) nextStepBtn.disabled = (currentProcessStep === processSteps.length - 1);
  }

  desktopNodes.forEach(node => {
    node.addEventListener('click', () => {
      const idx = parseInt(node.getAttribute('data-step-index'), 10);
      updateProcessStep(idx);
    });
  });

  if (prevStepBtn) {
    prevStepBtn.addEventListener('click', () => updateProcessStep(currentProcessStep - 1));
  }

  if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => updateProcessStep(currentProcessStep + 1));
  }


  /* -------------------------------------------------------------------------
   * 5. CLIENT TESTIMONIALS SLIDER
   * ------------------------------------------------------------------------- */
  const testimonials = [
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

  let testimonialIndex = 0;
  const quoteText = document.getElementById('testimonial-quote');
  const quoteAuthor = document.getElementById('testimonial-author');
  const quoteLocation = document.getElementById('testimonial-location');
  const testimonialPrevBtn = document.getElementById('testimonial-prev-btn');
  const testimonialNextBtn = document.getElementById('testimonial-next-btn');
  const testimonialDotsContainer = document.getElementById('testimonial-dots');

  function renderTestimonial(index) {
    if (!quoteText) return;
    testimonialIndex = index;

    // Fade out
    quoteText.style.opacity = '0';
    quoteText.style.transform = 'translateY(10px)';

    setTimeout(() => {
      const item = testimonials[testimonialIndex];
      quoteText.innerHTML = `&ldquo;${item.quote}&rdquo;`;
      if (quoteAuthor) quoteAuthor.textContent = `— ${item.author}`;
      if (quoteLocation) quoteLocation.textContent = `${item.location} Client`;

      // Fade in
      quoteText.style.opacity = '1';
      quoteText.style.transform = 'translateY(0)';

      // Update dots
      if (testimonialDotsContainer) {
        const dots = testimonialDotsContainer.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, dIdx) => {
          if (dIdx === testimonialIndex) {
            dot.className = 'testimonial-dot h-1.5 w-6 bg-studio-terracotta transition-all duration-300 rounded-full';
          } else {
            dot.className = 'testimonial-dot h-1.5 w-1.5 bg-studio-charcoal/15 transition-all duration-300 rounded-full';
          }
        });
      }
    }, 250);
  }

  // Create pagination dots
  if (testimonialDotsContainer) {
    testimonialDotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = idx === 0 
        ? 'testimonial-dot h-1.5 w-6 bg-studio-terracotta transition-all duration-300 rounded-full'
        : 'testimonial-dot h-1.5 w-1.5 bg-studio-charcoal/15 transition-all duration-300 rounded-full';
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => renderTestimonial(idx));
      testimonialDotsContainer.appendChild(dot);
    });
  }

  if (testimonialPrevBtn) {
    testimonialPrevBtn.addEventListener('click', () => {
      const newIdx = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(newIdx);
    });
  }

  if (testimonialNextBtn) {
    testimonialNextBtn.addEventListener('click', () => {
      const newIdx = (testimonialIndex + 1) % testimonials.length;
      renderTestimonial(newIdx);
    });
  }

  // Auto play slider every 8 seconds
  setInterval(() => {
    const newIdx = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial(newIdx);
  }, 8000);


  /* -------------------------------------------------------------------------
   * 6. INQUIRY FORM & WHATSAPP REDIRECT FALLBACK
   * ------------------------------------------------------------------------- */
  const inquiryForm = document.getElementById('inquiry-form');
  const formSuccessMsg = document.getElementById('form-status-success');
  const formErrorMsg = document.getElementById('form-status-error');
  const submitBtn = document.getElementById('submit-inquiry-btn');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const projectType = document.getElementById('form-project-type')?.value || 'residential';
      const budget = document.getElementById('form-budget')?.value || 'budget-1';
      const message = document.getElementById('form-message')?.value || '';

      if (!name || !email || !message) {
        if (formErrorMsg) {
          formErrorMsg.classList.remove('hidden');
          formErrorMsg.querySelector('.error-text').textContent = 'Please fill out all required fields (*).';
        }
        return;
      }

      // Show processing state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>PROCESSING...</span>';
      }

      // Construct WhatsApp message URL
      const projectTypeLabels = {
        residential: "Residential Design",
        commercial: "Commercial Workspace",
        styling: "Styling & Art Curation",
        other: "Other Space Planning"
      };
      const budgetLabels = {
        "budget-1": "₹5L – ₹15L (INR)",
        "budget-2": "₹15L – ₹50L (INR)",
        "budget-3": "₹50L – ₹1.5Cr (INR)",
        "budget-4": "Over ₹1.5Cr (INR)"
      };

      const projectLabel = projectTypeLabels[projectType] || projectType;
      const budgetLabel = budgetLabels[budget] || budget;

      const waText = `Hello Disha A Kewalramani,\n\nI would like to start a project journey with you! Here are my inquiry details:\n\n• Name: ${name}\n• Email: ${email}\n• Project Type: ${projectLabel}\n• Budget: ${budgetLabel}\n• Message: ${message}`;

      const whatsappUrl = `https://wa.me/919823577149?text=${encodeURIComponent(waText)}`;

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>SEND INQUIRY</span><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>';
        }

        if (formErrorMsg) formErrorMsg.classList.add('hidden');
        if (formSuccessMsg) formSuccessMsg.classList.remove('hidden');

        // Open WhatsApp connect window
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Reset form
        inquiryForm.reset();
      }, 600);
    });
  }


  /* -------------------------------------------------------------------------
   * 7. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   * ------------------------------------------------------------------------- */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px"
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-element');
  revealElements.forEach(el => revealObserver.observe(el));

});
