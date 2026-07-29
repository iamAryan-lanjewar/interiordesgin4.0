<?php
/**
 * Template Part: Contact & Studio Location
 *
 * @package DishaKewalramaniTheme
 */
?>
<!-- Section 6: Contact & Studio Location -->
<section id="contact" class="bg-studio-offwhite py-20 md:py-28 lg:py-32 border-t border-studio-charcoal-10">
	<div class="theme-container">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
			
			<!-- Left Column: Inquiry Form -->
			<div class="lg:col-span-7">
				<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
					LET'S CREATE SOMETHING BEAUTIFUL
				</span>
				
				<h2 class="mt-2 font-serif text-3xl sm:text-4xl font-light text-studio-charcoal">
					Start Your Project Journey
				</h2>
				
				<p class="mt-4 text-sm font-light text-studio-charcoal/60 max-w-md">
					Share details about your residential or commercial space, and we will get back to you within 48 hours.
				</p>

				<!-- Inquiry Form -->
				<form id="inquiry-form" class="mt-10 space-y-6">
					
					<!-- Form Success Notification -->
					<div id="form-status-success" class="hidden p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
						<svg class="h-5 w-5 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
						<span>Thank you! Your inquiry details are sent. Opening WhatsApp connection...</span>
					</div>

					<!-- Form Error Notification -->
					<div id="form-status-error" class="hidden p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm">
						<p class="font-semibold">Submission check:</p>
						<p class="error-text mt-1">Please make sure all required fields are filled out.</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="form-name" class="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
								Full Name *
							</label>
							<input
								type="text"
								id="form-name"
								name="form_name"
								required
								maxlength="100"
								placeholder="John Doe"
								class="w-full bg-studio-beige/40 border border-studio-charcoal-10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
							/>
						</div>

						<div>
							<label for="form-email" class="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
								Email Address *
							</label>
							<input
								type="email"
								id="form-email"
								name="form_email"
								required
								maxlength="100"
								placeholder="john@example.com"
								class="w-full bg-studio-beige/40 border border-studio-charcoal-10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="form-project-type" class="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
								Project Type *
							</label>
							<select
								id="form-project-type"
								name="form_project_type"
								class="w-full bg-studio-beige/40 border border-studio-charcoal-10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
							>
								<option value="residential">Residential Design</option>
								<option value="commercial">Commercial Workspace</option>
								<option value="styling">Styling &amp; Art Curation</option>
								<option value="other">Other Space Planning</option>
							</select>
						</div>

						<div>
							<label for="form-budget" class="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
								Budget Range *
							</label>
							<select
								id="form-budget"
								name="form_budget"
								class="w-full bg-studio-beige/40 border border-studio-charcoal-10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal"
							>
								<option value="budget-1">₹5L – ₹15L (INR)</option>
								<option value="budget-2">₹15L – ₹50L (INR)</option>
								<option value="budget-3">₹50L – ₹1.5Cr (INR)</option>
								<option value="budget-4">Over ₹1.5Cr (INR)</option>
							</select>
						</div>
					</div>

					<div>
						<label for="form-message" class="block text-xs uppercase tracking-wider text-studio-charcoal/60 mb-2 font-light">
							Your Message *
						</label>
						<textarea
							id="form-message"
							name="form_message"
							required
							maxlength="1000"
							rows="5"
							placeholder="Tell us about your space, dimensions, timeline, and styling goals..."
							class="w-full bg-studio-beige/40 border border-studio-charcoal-10 px-4 py-3 text-sm focus:outline-none focus:border-studio-terracotta transition-colors text-studio-charcoal resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						id="submit-inquiry-btn"
						class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-studio-terracotta text-studio-offwhite px-8 py-4 text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
					>
						<span>SEND INQUIRY</span>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
					</button>
					
				</form>
			</div>

			<!-- Right Column: Studio Address, Phone/WhatsApp & Google Map -->
			<div class="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
				
				<div class="space-y-8">
					<span class="text-xs tracking-[0.25em] font-medium text-studio-terracotta uppercase block">
						STUDIO DETAILS
					</span>
					
					<div class="space-y-6 text-sm text-studio-charcoal/80">
						<!-- Location Address -->
						<div class="flex items-start gap-4">
							<svg class="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
							</svg>
							<div>
								<span class="font-medium text-studio-charcoal block">Nagpur Head Office</span>
								<p class="mt-1 font-light text-studio-charcoal/70 leading-relaxed">
									Near Lakhwani Hall, Jaripatka, Nagpur, Maharashtra 440014
								</p>
							</div>
						</div>

						<!-- Phone & WhatsApp Link -->
						<div class="flex items-start gap-4">
							<svg class="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
							</svg>
							<div>
								<span class="font-medium text-studio-charcoal block">Phone / WhatsApp</span>
								<a 
									href="https://wa.me/919823577149" 
									target="_blank" 
									rel="noopener noreferrer" 
									class="mt-1 font-light text-studio-charcoal/70 hover:text-studio-terracotta transition-colors block"
								>
									+91 98235 77149 (Quick Connect)
								</a>
							</div>
						</div>

						<!-- Email Address -->
						<div class="flex items-start gap-4">
							<svg class="h-5 w-5 stroke-[1.2] text-studio-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
							</svg>
							<div>
								<span class="font-medium text-studio-charcoal block">Email Address</span>
								<a 
									href="mailto:hello@dishakewalramani.com" 
									class="mt-1 font-light text-studio-charcoal/70 hover:text-studio-terracotta transition-colors block"
								>
									hello@dishakewalramani.com
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Google Maps Location Frame -->
				<div class="w-full aspect-[4/3] border border-studio-charcoal-10 overflow-hidden relative shadow-sm">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0886191632734!2d79.08581781538743!3d21.188737385913217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c114f7b2c7e9%3A0xe54fb7144be7d94f!2sLakhwani%20Hall%2C%20Jaripatka%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Disha A Kewalramani Studio Location Map"
						class="grayscale contrast-125 opacity-75 invert hover:opacity-100 duration-500 transition-opacity"
						id="map-embed-frame"
					></iframe>
				</div>

			</div>

		</div>
	</div>
</section>
