<?php
/**
 * Disha A Kewalramani - Quiet Luxury Interior Studio Theme Functions
 *
 * @package DishaKewalramaniTheme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Setup Theme Supports & Nav Menus
 */
function disha_kewalramani_theme_setup() {
	// Enable dynamic title tag support
	add_theme_support( 'title-tag' );

	// Enable featured image support
	add_theme_support( 'post-thumbnails' );

	// Enable custom logo support
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 280,
		'flex-height' => true,
		'flex-width'  => true,
	) );

	// HTML5 Support
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script'
	) );

	// Register Navigation Menus
	register_nav_menus( array(
		'primary' => __( 'Primary Header Menu', 'disha-kewalramani-theme' ),
		'footer'  => __( 'Footer Links Menu', 'disha-kewalramani-theme' ),
	) );

	// Elementor Theme Compatibility Support
	add_theme_support( 'elementor' );
}
add_action( 'after_setup_theme', 'disha_kewalramani_theme_setup' );


/**
 * Enqueue Theme Styles and Scripts
 */
function disha_kewalramani_theme_scripts() {
	// Google Fonts (Cormorant Garamond & Inter)
	wp_enqueue_style( 
		'disha-kewalramani-google-fonts', 
		'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap', 
		array(), 
		null 
	);

	// Theme Main Stylesheet (style.css)
	wp_enqueue_style( 
		'disha-kewalramani-style', 
		get_stylesheet_uri(), 
		array('disha-kewalramani-google-fonts'), 
		'1.0.0' 
	);

	// Theme Vanilla JavaScript (assets/js/main.js)
	wp_enqueue_script( 
		'disha-kewalramani-main-script', 
		get_template_directory_uri() . '/assets/js/main.js', 
		array(), 
		'1.0.0', 
		true 
	);
}
add_action( 'wp_enqueue_scripts', 'disha_kewalramani_theme_scripts' );


/**
 * Elementor Page Template Filter Override
 */
function disha_kewalramani_elementor_canvas_reset( $template ) {
	if ( is_page() && get_post_meta( get_the_ID(), '_wp_page_template', true ) === 'elementor_canvas' ) {
		return $template;
	}
	return $template;
}
add_filter( 'template_include', 'disha_kewalramani_elementor_canvas_reset' );
