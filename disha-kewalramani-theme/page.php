<?php
/**
 * Single Page Template & Elementor Canvas Support Page
 *
 * @package DishaKewalramaniTheme
 */

get_header();
?>

<div class="theme-container py-12 md:py-20">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry-content' ); ?>>
				<?php if ( ! is_front_page() && ! Elementor\Plugin::$instance->db->is_built_with_elementor( get_the_ID() ) ) : ?>
					<h1 class="font-serif text-3xl md:text-5xl font-light text-studio-charcoal mb-8">
						<?php the_title(); ?>
					</h1>
				<?php endif; ?>

				<div class="page-content font-sans text-studio-charcoal/80 leading-relaxed">
					<?php
					the_content();

					wp_link_pages( array(
						'before' => '<div class="page-links">' . __( 'Pages:', 'disha-kewalramani-theme' ),
						'after'  => '</div>',
					) );
					?>
				</div>
			</article>
			<?php
		endwhile;
	else :
		get_template_part( 'template-parts/content', 'none' );
	endif;
	?>
</div>

<?php
get_footer();
