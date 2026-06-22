const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `        document.addEventListener("mouseenter", () => {
          dot.classList.remove("cursor-hidden");
          ring.classList.remove("cursor-hidden");
        });
      })();
    </script>`;

const newStr = `        document.addEventListener("mouseenter", () => {
          dot.classList.remove("cursor-hidden");
          ring.classList.remove("cursor-hidden");
        });
      })();

      // Renderizar ícones lucide na inicialização final
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    </script>`;

html = html.replace(targetStr, newStr);
fs.writeFileSync('index.html', html);
console.log('Final lucide call added');
