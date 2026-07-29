<?php
/**
 * Main Template File
 *
 * @package DishaKewalramaniTheme
 */

get_header();
?>

<?php get_template_part( 'template-parts/content', 'hero' ); ?>

<?php get_template_part( 'template-parts/content', 'about' ); ?>

<?php get_template_part( 'template-parts/content', 'projects' ); ?>

<?php get_template_part( 'template-parts/content', 'process' ); ?>

<?php get_template_part( 'template-parts/content', 'testimonials' ); ?>

<?php get_template_part( 'template-parts/content', 'contact' ); ?>

<?php
get_footer();
