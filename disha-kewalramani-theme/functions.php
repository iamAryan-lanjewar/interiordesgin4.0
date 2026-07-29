<?php
/**
 * Disha A Kewalramani - Quiet Luxury Interior Studio Theme Functions
 *
 * @package DishaKewalramaniTheme
 * @version 1.0.1
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

	// Gutenberg / Block Editor Support
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'wp-block-styles' );

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
	// 1. Google Fonts (Cormorant Garamond & Inter)
	wp_enqueue_style( 
		'disha-kewalramani-google-fonts', 
		'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap', 
		array(), 
		null 
	);

	// 2. Tailwind CSS Standalone Engine (Ensures all utility classes work out of the box in WordPress)
	wp_enqueue_script(
		'tailwindcss-cdn',
		'https://cdn.tailwindcss.com',
		array(),
		'3.4.1',
		false // Load in header so styles apply before render
	);

	// 3. Configure Tailwind Custom Theme Tokens
	wp_add_inline_script(
		'tailwindcss-cdn',
		'tailwind.config = {
			theme: {
				extend: {
					colors: {
						"studio-beige": "#EBE7E1",
						"studio-terracotta": "#B85032",
						"studio-offwhite": "#FAF9F6",
						"studio-charcoal": "#2A2A2A",
						"studio-darker": "#DCD8D1",
					},
					fontFamily: {
						serif: ["Cormorant Garamond", "Georgia", "serif"],
						sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
					}
				}
			}
		};'
	);

	// 4. Theme Main Stylesheet (style.css)
	wp_enqueue_style( 
		'disha-kewalramani-style', 
		get_stylesheet_uri(), 
		array('disha-kewalramani-google-fonts'), 
		'1.0.1' 
	);

	// 5. Theme Vanilla JavaScript (assets/js/main.js)
	wp_enqueue_script( 
		'disha-kewalramani-main-script', 
		get_template_directory_uri() . '/assets/js/main.js', 
		array(), 
		'1.0.1', 
		true 
	);
}
add_action( 'wp_enqueue_scripts', 'disha_kewalramani_theme_scripts' );


/**
 * Safe Elementor Page Check Helper
 */
function disha_kewalramani_is_elementor_page( $post_id = null ) {
	if ( ! $post_id ) {
		$post_id = get_the_ID();
	}
	if ( ! $post_id ) {
		return false;
	}
	if ( class_exists( '\\Elementor\\Plugin' ) && isset( \Elementor\Plugin::$instance->db ) ) {
		return \Elementor\Plugin::$instance->db->is_built_with_elementor( $post_id );
	}
	return false;
}
