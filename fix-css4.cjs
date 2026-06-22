const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\/\*\s*===\s*CURSOR CUSTOMIZADO DUAL[\s\S]*?<\/style>/;
const correctStr = 
`/* === CURSOR CUSTOMIZADO DUAL — Dot + Ring (otimizado GPU) === */
      .cursor-dot,
      .cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        will-change: transform;
        transform: translate3d(-50%, -50%, 0);
      }
      .cursor-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #D4B896;
        box-shadow: 0 0 8px rgba(212, 184, 150, 0.5);
        transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1), height 350ms cubic-bezier(0.4, 0, 0.2, 1), background 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;
      }
      .cursor-ring {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1.5px solid rgba(212, 184, 150, 0.6);
        background: transparent;
        transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1), height 350ms cubic-bezier(0.4, 0, 0.2, 1), border-color 350ms cubic-bezier(0.4, 0, 0.2, 1), background 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;
      }
      .cursor-dot.cursor-hovering {
        width: 5px;
        height: 5px;
        background: #B8456E;
        box-shadow: 0 0 12px rgba(184, 69, 110, 0.6);
      }
      .cursor-ring.cursor-hovering {
        width: 54px;
        height: 54px;
        border-color: rgba(184, 69, 110, 0.85);
        border-width: 1.5px;
        background: rgba(184, 69, 110, 0.08);
      }
      .cursor-dot.cursor-hidden,
      .cursor-ring.cursor-hidden {
        opacity: 0;
      }
      @media (hover: hover) and (pointer: fine) {
        html, body { cursor: none; }
        a, button, [role="button"], .shiny-cta, .footer-glow-social, [onclick], .faq-button, label, input, textarea { cursor: none; }
      }
      @media (hover: none), (pointer: coarse), (max-width: 768px) {
        .cursor-dot, .cursor-ring { display: none !important; }
        html, body { cursor: auto !important; }
      }
    </style>`;

html = html.replace(regex, correctStr);
fs.writeFileSync('index.html', html);
