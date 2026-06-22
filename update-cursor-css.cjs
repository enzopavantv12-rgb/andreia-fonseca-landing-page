const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const expectedCss = 
'/* === CURSOR CUSTOMIZADO DUAL — Dot + Ring (otimizado GPU) === */\\n' +
'      .cursor-dot,\\n' +
'      .cursor-ring {\\n' +
'        position: fixed;\\n' +
'        top: 0;\\n' +
'        left: 0;\\n' +
'        pointer-events: none;\\n' +
'        z-index: 9999;\\n' +
'        will-change: transform;\\n' +
'        transform: translate3d(-50%, -50%, 0);\\n' +
'      }\\n' +
'      .cursor-dot {\\n' +
'        width: 7px;\\n' +
'        height: 7px;\\n' +
'        border-radius: 50%;\\n' +
'        background: #D4B896;\\n' +
'        box-shadow: 0 0 8px rgba(212, 184, 150, 0.5);\\n' +
'        transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1), height 350ms cubic-bezier(0.4, 0, 0.2, 1), background 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;\\n' +
'      }\\n' +
'      .cursor-ring {\\n' +
'        width: 38px;\\n' +
'        height: 38px;\\n' +
'        border-radius: 50%;\\n' +
'        border: 1.5px solid rgba(212, 184, 150, 0.6);\\n' +
'        background: transparent;\\n' +
'        transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1), height 350ms cubic-bezier(0.4, 0, 0.2, 1), border-color 350ms cubic-bezier(0.4, 0, 0.2, 1), background 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease;\\n' +
'      }\\n' +
'      .cursor-dot.cursor-hovering {\\n' +
'        width: 5px;\\n' +
'        height: 5px;\\n' +
'        background: #B8456E;\\n' +
'        box-shadow: 0 0 12px rgba(184, 69, 110, 0.6);\\n' +
'      }\\n' +
'      .cursor-ring.cursor-hovering {\\n' +
'        width: 54px;\\n' +
'        height: 54px;\\n' +
'        border-color: rgba(184, 69, 110, 0.85);\\n' +
'        border-width: 1.5px;\\n' +
'        background: rgba(184, 69, 110, 0.08);\\n' +
'      }\\n' +
'      .cursor-dot.cursor-hidden,\\n' +
'      .cursor-ring.cursor-hidden {\\n' +
'        opacity: 0;\\n' +
'      }\\n' +
'      @media (hover: hover) and (pointer: fine) {\\n' +
'        html, body { cursor: none; }\\n' +
'        a, button, [role="button"], .shiny-cta, .footer-glow-social, [onclick], .faq-button, label, input, textarea { cursor: none; }\\n' +
'      }\\n' +
'      @media (hover: none), (pointer: coarse), (max-width: 768px) {\\n' +
'        .cursor-dot, .cursor-ring { display: none !important; }\\n' +
'        html, body { cursor: auto !important; }\\n' +
'      }';

const cssPattern = /\/\*\s*===\s*CURSOR CUSTOMIZADO DUAL[\s\S]*?<\/style>/;
if (cssPattern.test(html)) {
  html = html.replace(cssPattern, expectedCss + '\\n    </style>');
  fs.writeFileSync('index.html', html);
  console.log("CSS replaced successfully (end of style)");
} else {
  console.log("CSS Pattern not found. Let's insert it before </style>.");
  html = html.replace('</style>', expectedCss + '\\n    </style>');
  fs.writeFileSync('index.html', html);
}
