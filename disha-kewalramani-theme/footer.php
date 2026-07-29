<?php
/**
 * Disha A Kewalramani - Quiet Luxury Interior Studio Theme Footer
 *
 * @package DishaKewalramaniTheme
 */
?>
	</main><!-- .site-content -->

	<!-- SITE FOOTER -->
	<footer class="bg-studio-beige border-t border-studio-charcoal-10 py-12">
		<div class="theme-container">
			
			<div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-studio-charcoal-10">
				
				<!-- Footer Brand Logo -->
				<div class="font-serif text-xl tracking-wide text-studio-charcoal">
					<?php echo esc_html( get_bloginfo( 'name' ) ?: 'Disha A Kewalramani' ); ?>
				</div>
				
				<!-- Social Media Icons -->
				<div class="flex items-center gap-6">
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-studio-charcoal/60 hover:text-studio-terracotta transition-colors" aria-label="Instagram Profile">
						<svg class="h-5 w-5 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
						</svg>
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-studio-charcoal/60 hover:text-studio-terracotta transition-colors" aria-label="LinkedIn Profile">
						<svg class="h-5 w-5 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
							<rect x="2" y="9" width="4" height="12"/>
							<circle cx="4" cy="4" r="2"/>
						</svg>
					</a>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[10px] tracking-widest text-studio-charcoal/40 uppercase">
				<div>
					&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All Rights Reserved.
				</div>

				<div class="flex gap-6">
					<a href="#" class="hover:text-studio-charcoal transition-colors">Privacy Policy</a>
					<a href="#" class="hover:text-studio-charcoal transition-colors">Terms &amp; Conditions</a>
				</div>

				<!-- Back to top button -->
				<a href="<?php echo esc_url( home_url( '/#hero' ) ); ?>" class="group inline-flex items-center gap-2 hover:text-studio-terracotta transition-colors" aria-label="Scroll back to top" id="back-to-top-btn">
					<span>Back To Top</span>
					<svg class="h-3.5 w-3.5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
					</svg>
				</a>
			</div>

		</div>
	</footer>

</div><!-- .site-wrapper -->

<?php wp_footer(); ?>
</body>
</html>
