<?php
/**
 * Template Part: Client Stories / Testimonials
 *
 * @package DishaKewalramaniTheme
 */
$theme_assets_url = get_template_directory_uri() . '/assets/images/';

$testimonials = array(
	array(
		'quote'    => "Disha has an incredible ability to blend raw aesthetics with functionality. Our home feels warm, elegant, and truly reflects our family's personality. Every corner tells a quiet, beautiful story.",
		'author'   => "THE RAJ FAMILY",
		'location' => "Nagpur"
	),
	array(
		'quote'    => "Working with Disha A Kewalramani was an absolute pleasure. Her architectural understanding and emphasis on textures rather than clutter transformed our corporate workspace into a serene, inspiring oasis.",
		'author'   => "MEHTA ASSOCIATES",
		'location' => "Nagpur"
	),
	array(
		'quote'    => "She delivered our penthouse with absolute precision in schedule. The bespoke furniture pieces are works of art in themselves. Her focus on curated materiality sets her studio apart.",
		'author'   => "DR. ANANYA & VIKRAM",
		'location' => "Nagpur"
	)
);
?>
<!-- Section 5: Client Stories & Testimonials -->
<section id="testimonials" class="relative bg-studio-beige py-24 md:py-32 overflow-hidden">
	
	<!-- Soft ambient background image -->
	<div class="absolute left-[-100px] bottom-[-50px] w-[350px] h-[350px] opacity-10 pointer-events-none select-none">
		<img 
			src="<?php echo esc_url( $theme_assets_url . 'hero-interior.png' ); ?>" 
			alt="Decoration ambient detail" 
			class="w-full h-full object-cover rounded-full filter grayscale"
		/>
	</div>

	<div class="theme-container relative z-10 text-center max-w-4xl mx-auto">
		<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
			CLIENT STORIES
		</span>
		
		<!-- Testimonial Slider Display -->
		<div class="mt-12 min-h-[160px] flex items-center justify-center">
			<blockquote class="transition-opacity duration-500 ease-in-out max-w-3xl mx-auto">
				<p id="testimonial-quote" class="font-serif text-xl sm:text-2xl lg:text-3xl italic font-light leading-relaxed text-studio-charcoal transition-all duration-300">
					&ldquo;<?php echo esc_html( $testimonials[0]['quote'] ); ?>&rdquo;
				</p>
				<cite class="mt-8 not-italic block">
					<span id="testimonial-author" class="text-xs tracking-[0.2em] font-semibold text-studio-charcoal block">
						— <?php echo esc_html( $testimonials[0]['author'] ); ?>
					</span>
					<span id="testimonial-location" class="text-[10px] tracking-widest text-studio-charcoal/40 uppercase block mt-1">
						<?php echo esc_html( $testimonials[0]['location'] ); ?> Client
					</span>
				</cite>
			</blockquote>
		</div>

		<!-- Slider Controls: Arrows & Pagination Dots -->
		<div class="mt-12 flex items-center justify-center gap-8">
			<button
				type="button"
				id="testimonial-prev-btn"
				class="p-2 border border-studio-charcoal-10 hover:border-studio-terracotta hover:text-studio-terracotta transition-colors text-studio-charcoal/60"
				aria-label="Previous testimonial quote"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/></svg>
			</button>

			<!-- Pagination Dots Container -->
			<div id="testimonial-dots" class="flex gap-2.5 items-center">
				<!-- Injected by main.js -->
			</div>

			<button
				type="button"
				id="testimonial-next-btn"
				class="p-2 border border-studio-charcoal-10 hover:border-studio-terracotta hover:text-studio-terracotta transition-colors text-studio-charcoal/60"
				aria-label="Next testimonial quote"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/></svg>
			</button>
		</div>

	</div>
</section>
