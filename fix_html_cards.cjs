const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the grid wrapper
html = html.replace('<div class="max-w-7xl mx-auto px-6">\n          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">', '<div class="services-grid">');
html = html.replace(/<\/div>\n        <\/div>\n      <\/section>\n\n      <!-- MODALS -->/g, '</div>\n      </section>\n\n      <!-- MODALS -->'); // Remove one closing div

// Add <div class="service-card__reveal"> to each card
html = html.replace(/<h3 class="service-card__title">([^<]+)<\/h3>\s*<p class="service-card__subtitle">/g, '<h3 class="service-card__title">$1</h3>\n                <div class="service-card__reveal">\n                  <p class="service-card__subtitle">');

// Close <div class="service-card__reveal"> after cta
html = html.replace(/<a href="javascript:void\(0\)" class="service-card__cta">([^<]+)<\/a>\s*<\/div>\s*<\/article>/g, '<a href="javascript:void(0)" class="service-card__cta">$1</a>\n                </div>\n              </div>\n            </article>');

// Replace `service-card lg:col-start-2` with just `service-card` since the 7th item is handled by CSS nth-child!
html = html.replace(/<article class="service-card lg:col-start-2"/g, '<article class="service-card"');

fs.writeFileSync('index.html', html);
