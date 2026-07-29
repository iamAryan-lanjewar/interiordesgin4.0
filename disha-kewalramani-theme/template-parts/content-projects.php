<?php
/**
 * Template Part: Selected Projects Portfolio
 *
 * @package DishaKewalramaniTheme
 */
$theme_assets_url = get_template_directory_uri() . '/assets/images/';

$projects = array(
	array(
		'id'       => 'proj-1',
		'title'    => 'The Terracotta Haven',
		'category' => 'residential',
		'subtitle' => 'Modern Minimalist Residence',
		'location' => 'Nagpur',
		'year'     => '2023',
		'image'    => 'project-living-room.jpg'
	),
	array(
		'id'       => 'proj-2',
		'title'    => 'Plaster & Oak Studio',
		'category' => 'commercial',
		'subtitle' => 'Commercial Workspace',
		'location' => 'Nagpur',
		'year'     => '2024',
		'image'    => 'project-desk.jpg'
	),
	array(
		'id'       => 'proj-3',
		'title'    => 'Villa Sereno',
		'category' => 'residential',
		'subtitle' => 'Luxury Penthouse Interior',
		'location' => 'Nagpur',
		'year'     => '2024',
		'image'    => 'project-villa.png'
	)
);
?>
<!-- Section 3: Selected Projects (Interactive Portfolio Grid) -->
<section id="projects" class="bg-studio-beige py-20 md:py-32">
	<div class="theme-container">
		
		<!-- Header + Filter Tabs -->
		<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-studio-charcoal-10">
			<div>
				<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
					SELECTED PROJECTS
				</span>
				<h2 class="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
					Interactive Portfolio
				</h2>
			</div>
			
			<!-- Filter tabs -->
			<div class="flex flex-wrap items-center gap-6 sm:gap-8 text-xs tracking-widest font-light text-studio-charcoal/60">
				<?php
				$categories = array( 'all', 'residential', 'commercial', 'styling' );
				foreach ( $categories as $cat ) :
					$is_active = ( $cat === 'all' );
				?>
					<button 
						type="button"
						data-filter="<?php echo esc_attr( $cat ); ?>"
						class="portfolio-filter-btn uppercase transition-colors duration-300 relative py-1 hover:text-studio-charcoal <?php echo $is_active ? 'text-studio-terracotta font-medium active-filter' : ''; ?>"
						id="filter-<?php echo esc_attr( $cat ); ?>"
					>
						<?php echo esc_html( strtoupper( $cat ) ); ?>
						<span class="filter-indicator absolute bottom-0 left-0 w-full h-[1px] bg-studio-terracotta animate-pulse <?php echo $is_active ? '' : 'hidden'; ?>"></span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>

		<!-- Asymmetric Masonry Grid -->
		<div class="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
			
			<?php 
			foreach ( $projects as $idx => $project ) :
				$grid_classes = 'md:col-span-6';
				if ( $idx === 0 ) $grid_classes = 'md:col-span-7 md:translate-y-0';
				if ( $idx === 1 ) $grid_classes = 'md:col-span-5 md:translate-y-8';
				if ( $idx === 2 ) $grid_classes = 'md:col-span-8 md:col-start-3 md:translate-y-12';
			?>
				<article 
					data-category="<?php echo esc_attr( $project['category'] ); ?>"
					class="portfolio-item <?php echo esc_attr( $grid_classes ); ?> group flex flex-col bg-transparent transition-all duration-500"
				>
					<div class="relative w-full border border-studio-charcoal-10 shadow-sm overflow-hidden <?php echo ($idx === 1) ? 'aspect-[4/5]' : 'aspect-square'; ?>">
						<img 
							src="<?php echo esc_url( $theme_assets_url . $project['image'] ); ?>" 
							alt="<?php echo esc_attr( $project['title'] ); ?>" 
							class="w-full h-full object-cover hover-zoom-img"
						/>
						
						<!-- Hover Quick Info Overlay -->
						<div class="absolute inset-0 bg-studio-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
							<div class="text-studio-offwhite text-xs tracking-widest font-light flex items-center justify-between">
								<span><?php echo esc_html( $project['location'] ); ?></span>
								<span><?php echo esc_html( $project['year'] ); ?></span>
							</div>
						</div>
					</div>

					<div class="mt-6 flex items-start justify-between">
						<div>
							<span class="text-[10px] tracking-widest font-light text-studio-charcoal/40 uppercase block mb-1">
								0<?php echo ( $idx + 1 ); ?>
							</span>
							<h3 class="font-serif text-xl sm:text-2xl font-light text-studio-charcoal group-hover:text-studio-terracotta transition-colors duration-300">
								<?php echo esc_html( $project['title'] ); ?>
							</h3>
							<p class="text-xs font-light text-studio-charcoal/60 mt-1">
								<?php echo esc_html( $project['subtitle'] ); ?>
							</p>
						</div>
					</div>
				</article>
			<?php endforeach; ?>

		</div>

		<!-- View Full Portfolio Button -->
		<div class="mt-28 flex justify-center">
			<a 
				href="#contact"
				class="btn-secondary group relative inline-flex items-center gap-3 px-8 py-4 border border-studio-charcoal/25 bg-transparent text-xs tracking-widest text-studio-charcoal hover:border-studio-terracotta hover:text-studio-terracotta transition-all duration-300 overflow-hidden"
			>
				<span>VIEW ALL PROJECTS</span>
				<svg class="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-studio-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
				</svg>
			</a>
		</div>

	</div>
</section>
