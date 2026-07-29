<?php
/**
 * Template Part: Hero Section
 *
 * @package DishaKewalramaniTheme
 */
$theme_assets_url = get_template_directory_uri() . '/assets/images/';
?>
<!-- Section 1: Hero Section -->
<section id="hero" class="relative min-h-[90vh] flex flex-col justify-end bg-studio-beige py-12 md:py-20 lg:py-28">
	<!-- Half-bleed Hero Visual Layer -->
	<div class="absolute inset-0 md:left-1/3 overflow-hidden">
		<img 
			src="<?php echo esc_url( $theme_assets_url . 'hero-interior.png' ); ?>" 
			alt="Serene modern luxury living room by Disha A Kewalramani" 
			class="w-full h-full object-cover object-center opacity-90 brightness-95"
		/>
		<!-- Soft plaster gradient filter -->
		<div class="absolute inset-0 bg-gradient-to-r from-studio-beige via-studio-beige/60 to-transparent md:from-studio-beige md:via-studio-beige/10"></div>
	</div>

	<div class="relative theme-container z-10">
		<div class="max-w-2xl md:max-w-xl animate-fade-in-up">
			<span class="text-xs tracking-[0.3em] font-medium text-studio-terracotta uppercase block">
				INTERIOR DESIGN
			</span>
			
			<h1 class="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-studio-charcoal">
				Creating timeless spaces with warmth, elegance and thoughtful details.
			</h1>
			
			<div class="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
				<a 
					href="#projects" 
					class="group inline-flex items-center gap-3 text-xs tracking-[0.2em] font-semibold text-studio-charcoal hover:text-studio-terracotta transition-colors duration-300"
					id="hero-cta-btn"
				>
					<span>VIEW PORTFOLIO</span>
					<svg class="h-4 w-4 stroke-[1.5] transform group-hover:translate-x-2 transition-transform duration-300 text-studio-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
					</svg>
				</a>
				
				<!-- Scroll Indicator -->
				<a 
					href="#about"
					class="hidden sm:inline-flex items-center text-[10px] tracking-[0.2em] font-light text-studio-charcoal/40 hover:text-studio-charcoal/80 transition-colors"
				>
					SCROLL TO DISCOVER
				</a>
			</div>
		</div>
	</div>
</section>
