const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Using regex to carefully replace the inline classes with the BEM classes the user expects
html = html.replace(/<article class="shine-border[^>]+style="aspect-ratio: 3\/4;" onclick="([^"]+)" data-animate>/g, '<article class="service-card" onclick="$1" data-animate>');
html = html.replace(/<article class="shine-border[^>]+group lg:col-start-2" style="aspect-ratio: 3\/4;" onclick="([^"]+)" data-animate>/g, '<article class="service-card lg:col-start-2" onclick="$1" data-animate>');

html = html.replace(/<img src="([^"]+)" alt="([^"]+)" class="absolute inset-0 w-full h-full object-cover transition-transform duration-\[1200ms\] ease-\[cubic-bezier[^\]]+\] group-hover:scale-\[1.04\]" style="([^"]+)" loading="lazy" decoding="async" \/>/g, '<img src="$1" alt="$2" class="service-card__image" style="$3" loading="lazy" decoding="async" />');
html = html.replace(/<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient[^>]+><\/div>/g, '<div class="service-card__overlay"></div>');
html = html.replace(/<div class="absolute bottom-0 left-0 right-0 p-7 md:p-8 z-10 text-marfim text-left">/g, '<div class="service-card__content">');
html = html.replace(/<span class="block font-sans text-\[11px\] tracking-\[0.25em\] uppercase text-champagne mb-3">/g, '<span class="service-card__number">');
html = html.replace(/<h3 class="font-serif text-\[1.5rem\] font-medium leading-\[1.2\] text-marfim mb-2">/g, '<h3 class="service-card__title">');
html = html.replace(/<p class="font-serif italic text-\[0.95rem\] text-champagne leading-\[1.4\] mb-3">/g, '<p class="service-card__subtitle">');
html = html.replace(/<p class="font-sans text-\[0.875rem\] leading-\[1.55\] text-marfim\/80 mb-5">/g, '<p class="service-card__description">');
html = html.replace(/<a href="javascript:void\(0\)" class="inline-block font-sans text-\[0.8125rem\] tracking-\[0.08em\] text-champagne border-b border-champagne\/40 pb-1 hover:border-champagne transition-colors">/g, '<a href="javascript:void(0)" class="service-card__cta">');

fs.writeFileSync('index.html', html);
