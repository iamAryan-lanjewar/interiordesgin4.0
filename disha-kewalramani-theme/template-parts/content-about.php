<?php
/**
 * Template Part: About / Ethos Section
 *
 * @package DishaKewalramaniTheme
 */
$theme_assets_url = get_template_directory_uri() . '/assets/images/';
?>
<!-- Section 2: Statement & Ethos (About Preview) -->
<section id="about" class="bg-studio-offwhite py-20 md:py-32 border-t border-b border-studio-charcoal-10">
	<div class="theme-container">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
			
			<!-- Left Column: Portrait Visual -->
			<div class="lg:col-span-5">
				<div class="relative overflow-hidden aspect-[3/4] max-w-md mx-auto shadow-sm border border-studio-charcoal-10">
					<img 
						src="<?php echo esc_url( $theme_assets_url . 'project-chair.jpg' ); ?>" 
						alt="Bespoke handcrafted chair by Disha A Kewalramani" 
						class="w-full h-full object-cover"
					/>
				</div>
			</div>

			<!-- Right Column: Copy & 3 Pillars Grid -->
			<div class="lg:col-span-7 flex flex-col justify-center reveal-element reveal-text-up">
				<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
					THE STUDIO
				</span>
				
				<h2 class="mt-4 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal leading-tight">
					Every space tells a story.
				</h2>
				
				<p class="mt-6 text-base md:text-lg leading-relaxed font-light text-studio-charcoal/70">
					Based out of Nagpur, studio Disha A Kewalramani curates bespoke residential and commercial environments where functionality meets quiet luxury. We believe that true sophistication lies in the balance of light, line, and organic texture.
				</p>

				<!-- Read More link -->
				<div class="mt-6">
					<a 
						href="#contact" 
						class="group inline-flex items-center gap-2 text-xs tracking-wider font-light text-studio-charcoal/80 hover:text-studio-terracotta transition-colors duration-300"
					>
						<span>READ MORE</span>
						<svg class="h-3 w-3 transform group-hover:translate-x-1.5 transition-transform duration-300 text-studio-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
						</svg>
					</a>
				</div>

				<!-- Key Pillars (3-column micro grid) -->
				<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-studio-charcoal-10">
					
					<!-- Pillar 1 -->
					<div class="flex flex-col">
						<svg class="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10"/>
							<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
						</svg>
						<h3 class="font-serif text-lg font-medium text-studio-charcoal">
							Spatial Harmony
						</h3>
						<p class="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
							Thoughtful layouts that bring balance, flow and purpose to every space.
						</p>
					</div>

					<!-- Pillar 2 -->
					<div class="flex flex-col">
						<svg class="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<polygon points="12 2 2 7 12 12 22 7 12 2"/>
							<polyline points="2 17 12 22 22 17"/>
							<polyline points="2 12 12 17 22 12"/>
						</svg>
						<h3 class="font-serif text-lg font-medium text-studio-charcoal">
							Curated Materiality
						</h3>
						<p class="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
							We source and combine materials that age beautifully and feel honest.
						</p>
					</div>

					<!-- Pillar 3 -->
					<div class="flex flex-col">
						<svg class="h-6 w-6 stroke-[1.2] text-studio-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<circle cx="12" cy="8" r="7"/>
							<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
						</svg>
						<h3 class="font-serif text-lg font-medium text-studio-charcoal">
							Bespoke Craftsmanship
						</h3>
						<p class="mt-2 text-xs leading-relaxed font-light text-studio-charcoal/60">
							Custom furniture and details crafted with precision and care.
						</p>
					</div>

				</div>
			</div>

		</div>
	</div>
</section>
