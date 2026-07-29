<!DOCTYPE html>
<html <?php language_attributes(); ?> class="h-full scroll-smooth antialiased">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'min-h-full flex flex-col bg-studio-beige text-studio-charcoal' ); ?>>
<?php wp_body_open(); ?>

<div class="site-wrapper flex-1 flex flex-col">

	<!-- SITE HEADER (Sticky Header Logic) -->
	<header class="site-header sticky top-0 z-50 w-full border-b border-studio-charcoal-10 bg-studio-beige/85 backdrop-blur-md transition-all duration-300">
		<div class="theme-container flex h-20 items-center justify-between">
			
			<!-- Brand Logo -->
			<a href="<?php echo esc_url( home_url( '/#hero' ) ); ?>" class="brand-logo font-serif text-xl sm:text-2xl font-light tracking-wide text-studio-charcoal hover:opacity-80 transition-opacity" id="brand-logo">
				<?php 
				if ( has_custom_logo() ) {
					the_custom_logo();
				} else {
					echo esc_html( get_bloginfo( 'name', 'display' ) ?: 'Disha A Kewalramani' );
				}
				?>
			</a>

			<!-- Desktop Menu Navigation -->
			<nav class="desktop-nav hidden md:flex items-center space-x-10 text-sm tracking-widest font-light text-studio-charcoal/80">
				<a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>" class="hover:text-studio-terracotta transition-colors duration-300" id="nav-projects">PROJECTS</a>
				<a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" class="hover:text-studio-terracotta transition-colors duration-300" id="nav-about">ABOUT</a>
				<a href="<?php echo esc_url( home_url( '/#process' ) ); ?>" class="hover:text-studio-terracotta transition-colors duration-300" id="nav-process">PROCESS</a>
				<a href="<?php echo esc_url( home_url( '/#testimonials' ) ); ?>" class="hover:text-studio-terracotta transition-colors duration-300" id="nav-journal">TESTIMONIALS</a>
				<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="hover:text-studio-terracotta transition-colors duration-300 font-medium text-studio-terracotta" id="nav-contact">CONTACT</a>
			</nav>

			<!-- Mobile Hamburger Menu Button -->
			<button type="button" id="mobile-menu-btn" class="block md:hidden text-studio-charcoal p-1 hover:text-studio-terracotta transition-colors" aria-label="Open navigation menu">
				<svg class="h-6 w-6 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
				</svg>
			</button>

		</div>
	</header>

	<!-- Mobile Minimalist Overlay Drawer -->
	<div id="mobile-drawer-overlay" class="mobile-drawer-overlay fixed inset-0 z-50 flex justify-end bg-studio-charcoal/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300">
		<div id="mobile-drawer-panel" class="mobile-drawer-panel h-full w-full max-w-sm bg-studio-beige px-8 py-6 flex flex-col justify-between shadow-2xl translate-x-full transition-transform duration-500 ease-out">
			
			<div class="flex items-center justify-between">
				<span class="font-serif text-lg text-studio-charcoal/80">Disha A K.</span>
				<button type="button" id="close-menu-btn" class="text-studio-charcoal hover:text-studio-terracotta transition-colors" aria-label="Close navigation menu">
					<svg class="h-6 w-6 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>
			</div>

			<nav class="flex flex-col space-y-8 my-auto text-2xl font-serif text-studio-charcoal">
				<a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>" class="mobile-nav-link hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal-10">Projects</a>
				<a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" class="mobile-nav-link hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal-10">About Studio</a>
				<a href="<?php echo esc_url( home_url( '/#process' ) ); ?>" class="mobile-nav-link hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal-10">Design Process</a>
				<a href="<?php echo esc_url( home_url( '/#testimonials' ) ); ?>" class="mobile-nav-link hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal-10">Client Stories</a>
				<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="mobile-nav-link hover:text-studio-terracotta transition-colors py-2 border-b border-studio-charcoal-10">Contact Inquiry</a>
			</nav>

			<div class="text-xs text-studio-charcoal/50 tracking-wider">
				Nagpur, Maharashtra, India
			</div>
		</div>
	</div>

	<main class="site-content flex-1">
