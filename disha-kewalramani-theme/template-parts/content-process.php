<?php
/**
 * Template Part: Design Process Interactive Timeline
 *
 * @package DishaKewalramaniTheme
 */

$process_steps = array(
	array(
		'number'      => '01',
		'title'       => 'Discovery & Spatial Planning',
		'tagline'     => 'Vision & Flow',
		'description' => 'We begin with a deep dive into your lifestyle, preferences, and spatial aspirations. By analyzing the structural blueprint, we craft custom floor layouts that optimize circulation, balance, and volume before any aesthetic layers are introduced.'
	),
	array(
		'number'      => '02',
		'title'       => 'Material Selection & 3D Visualization',
		'tagline'     => 'Honest Materiality',
		'description' => 'Here, the palette is born. We curate tactile samples—hand-finished plasters, raw oaks, terracotta tiles, and custom fabrics. These are paired with high-fidelity 3D renderings, allowing you to walk through and feel the textures of your future space.'
	),
	array(
		'number'      => '03',
		'title'       => 'Execution & Custom Furniture Crafting',
		'tagline'     => 'Bespoke Artistry',
		'description' => 'Collaborating with master artisans, we bring technical drawings to life. From tailor-made joinery and custom lounge chairs to structural site execution, we manage every detail on-site to ensure precise alignment with the design vision.'
	),
	array(
		'number'      => '04',
		'title'       => 'Final Styling & Handover',
		'tagline'     => 'The Art of Detail',
		'description' => 'The final layer. We source organic ceramics, curated artwork, lighting fixtures, and custom textiles to layer warmth into the space. We style each nook before handing over the keys to a complete, living work of art.'
	)
);
?>
<!-- Section 4: Design Process (Interactive Timeline) -->
<section id="process" class="bg-studio-offwhite py-20 md:py-32 border-t border-b border-studio-charcoal-10">
	<div class="theme-container">
		
		<div class="text-center max-w-xl mx-auto mb-16 md:mb-24 reveal-element reveal-text-up">
			<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
				OUR DESIGN PROCESS
			</span>
			<h2 class="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
				From Concept to Handover
			</h2>
			<p class="mt-4 text-sm font-light text-studio-charcoal/60 leading-relaxed">
				Click on the steps below to explore our detailed design roadmap and see how we execute projects.
			</p>
		</div>

		<!-- Desktop Timeline Nodes -->
		<div class="hidden lg:grid grid-cols-4 gap-8 relative reveal-element reveal-text-up">
			<!-- Dotted connecting background line -->
			<div class="absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] process-line"></div>
			
			<?php foreach ( $process_steps as $idx => $step ) : ?>
				<button
					type="button"
					data-step-index="<?php echo esc_attr( $idx ); ?>"
					class="process-node-btn flex flex-col items-center text-center group focus:outline-none z-10"
					id="process-node-<?php echo esc_attr( $idx ); ?>"
				>
					<div class="process-node-circle h-14 w-14 rounded-full flex items-center justify-center border transition-all duration-500 <?php echo ($idx === 0) ? 'border-studio-terracotta bg-studio-terracotta text-studio-offwhite shadow-md scale-110' : 'border-studio-charcoal/20 bg-studio-offwhite text-studio-charcoal/60 group-hover:border-studio-charcoal group-hover:text-studio-charcoal'; ?>">
						<span class="font-serif text-sm font-medium"><?php echo esc_html( $step['number'] ); ?></span>
					</div>
					
					<h3 class="process-node-title mt-6 font-serif text-lg font-medium transition-colors <?php echo ($idx === 0) ? 'text-studio-terracotta' : 'text-studio-charcoal/80'; ?>">
						<?php echo esc_html( $step['title'] ); ?>
					</h3>
					
					<span class="text-[10px] tracking-widest text-studio-charcoal/40 uppercase mt-1">
						<?php echo esc_html( $step['tagline'] ); ?>
					</span>
				</button>
			<?php endforeach; ?>
		</div>

		<!-- Interactive Timeline Detail Box -->
		<div class="mt-12 lg:mt-16 mx-auto max-w-4xl bg-studio-beige border border-studio-charcoal-10 p-8 md:p-12 shadow-sm rounded-sm reveal-element reveal-text-up">
			
			<!-- Mobile Navigation Controls -->
			<div class="flex lg:hidden justify-between items-center border-b border-studio-charcoal-10 pb-6 mb-6">
				<button type="button" id="process-prev-step" disabled class="p-2 border border-studio-charcoal-10 hover:border-studio-terracotta disabled:opacity-30 disabled:pointer-events-none transition-colors" aria-label="Previous step">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
				</button>
				<div class="text-center">
					<span id="process-detail-mobile-number" class="text-xs text-studio-terracotta font-serif font-semibold uppercase tracking-wider block">
						STEP 01
					</span>
					<span id="process-detail-mobile-title" class="font-serif text-base text-studio-charcoal">
						<?php echo esc_html( $process_steps[0]['title'] ); ?>
					</span>
				</div>
				<button type="button" id="process-next-step" class="p-2 border border-studio-charcoal-10 hover:border-studio-terracotta disabled:opacity-30 disabled:pointer-events-none transition-colors" aria-label="Next step">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
				<div class="md:col-span-3 flex flex-col md:border-r border-studio-charcoal-10 md:pr-8 h-full justify-between">
					<div id="process-detail-number" class="hidden lg:block text-studio-terracotta font-serif text-6xl font-extralight tracking-tighter">
						01
					</div>
					<div>
						<span class="text-xs text-studio-terracotta font-medium tracking-widest uppercase block mb-1">
							FOCUS
						</span>
						<span id="process-detail-tagline" class="font-serif text-lg text-studio-charcoal font-medium">
							<?php echo esc_html( $process_steps[0]['tagline'] ); ?>
						</span>
					</div>
				</div>

				<div class="md:col-span-9 md:pl-4">
					<h4 id="process-detail-title" class="hidden lg:block font-serif text-2xl font-light text-studio-charcoal mb-4">
						<?php echo esc_html( $process_steps[0]['title'] ); ?>
					</h4>
					<p id="process-detail-description" class="text-sm md:text-base font-light text-studio-charcoal/70 leading-relaxed">
						<?php echo esc_html( $process_steps[0]['description'] ); ?>
					</p>
				</div>
			</div>

		</div>

	</div>
</section>
