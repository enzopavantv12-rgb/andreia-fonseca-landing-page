const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const startIndex = css.indexOf('.service-card {');
if (startIndex === -1) {
    console.error("Could not find .service-card in CSS");
    process.exit(1);
}

const newCSSBlock = `
/* ============ GRID ============ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.services-grid > .service-card:nth-child(7):last-child {
  grid-column: 2 / 3;
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .services-grid > .service-card:nth-child(7):last-child {
    grid-column: 1 / 3;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .services-grid > .service-card:nth-child(7):last-child {
    grid-column: auto;
    max-width: 100%;
  }
}

/* ============ CARD CONTAINER ============ */
.service-card {
  position: relative;       /* OBRIGATÓRIO */
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  overflow: hidden;         /* OBRIGATÓRIO */
  background: #14080E;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  transform: translateY(-6px);
}

/* ============ IMAGEM (CAMADA INFERIOR) ============ */
.service-card__image {
  position: absolute;       /* OBRIGATÓRIO */
  inset: 0;                 /* OBRIGATÓRIO */
  width: 100%;
  height: 100%;
  object-fit: cover;        /* OBRIGATÓRIO */
  object-position: center 30%;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-card__image {
  transform: scale(1.04);
}

/* ============ OVERLAY GRADIENTE (CAMADA DO MEIO) ============ */
.service-card__overlay {
  position: absolute;       /* OBRIGATÓRIO */
  inset: 0;                 /* OBRIGATÓRIO */
  background: linear-gradient(
    180deg,
    rgba(20, 8, 14, 0.05) 0%,
    rgba(20, 8, 14, 0.15) 50%,
    rgba(20, 8, 14, 0.65) 100%
  );
  pointer-events: none;
  transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-card__overlay {
  background: linear-gradient(
    180deg,
    rgba(20, 8, 14, 0.20) 0%,
    rgba(20, 8, 14, 0.45) 35%,
    rgba(20, 8, 14, 0.85) 65%,
    rgba(20, 8, 14, 0.95) 100%
  );
}

/* ============ CONTEÚDO (CAMADA SUPERIOR) ============ */
.service-card__content {
  position: absolute;       /* OBRIGATÓRIO */
  bottom: 0;                /* OBRIGATÓRIO — ancora na base */
  left: 0;
  right: 0;
  padding: 32px 28px 28px;
  z-index: 2;
  color: #F4EADC;
}

.service-card__number {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #D4AF7C;
  margin-bottom: 14px;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: #F4EADC;
  margin: 0;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-card__number,
.service-card:hover .service-card__title {
  transform: translateY(-4px);
}

/* ============ REVEAL GROUP (HOVER) ============ */
.service-card__reveal {
  margin-top: 12px;
  opacity: 0;
  transform: translateY(12px);
  transition: 
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.service-card:hover .service-card__reveal {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.service-card__subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #D4AF7C;
  margin: 0 0 14px 0;
  line-height: 1.4;
  opacity: 0;
  transition: opacity 0.5s ease;
  transition-delay: 0.05s;
}

.service-card__description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.55;
  color: rgba(244, 234, 220, 0.82);
  margin: 0 0 22px 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  transition-delay: 0.12s;
}

.service-card__cta {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  color: #D4AF7C;
  text-decoration: none;
  border-bottom: 1px solid rgba(212, 175, 124, 0.4);
  padding-bottom: 4px;
  display: inline-block;
  opacity: 0;
  transition: opacity 0.5s ease, border-color 0.3s ease;
  transition-delay: 0.20s;
}

.service-card:hover .service-card__subtitle,
.service-card:hover .service-card__description,
.service-card:hover .service-card__cta {
  opacity: 1;
}

.service-card:hover .service-card__cta:hover {
  border-bottom-color: #D4AF7C;
}

/* ============ OBJECT-POSITION POR CARD ============ */
.service-card:nth-child(1) .service-card__image { object-position: center 25%; }
.service-card:nth-child(2) .service-card__image { object-position: center 35%; }
.service-card:nth-child(3) .service-card__image { object-position: center 50%; }
.service-card:nth-child(4) .service-card__image { object-position: center 30%; }
.service-card:nth-child(5) .service-card__image { object-position: center 25%; }
.service-card:nth-child(6) .service-card__image { object-position: center 35%; }
.service-card:nth-child(7) .service-card__image { object-position: center 30%; }

/* ============ ACESSIBILIDADE TECLADO ============ */
.service-card:focus-within .service-card__overlay {
  background: linear-gradient(
    180deg,
    rgba(20, 8, 14, 0.20) 0%,
    rgba(20, 8, 14, 0.45) 35%,
    rgba(20, 8, 14, 0.85) 65%,
    rgba(20, 8, 14, 0.95) 100%
  );
}

.service-card:focus-within .service-card__reveal,
.service-card:focus-within .service-card__subtitle,
.service-card:focus-within .service-card__description,
.service-card:focus-within .service-card__cta {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* ============ MOBILE / TOUCH (SEM HOVER) ============ */
@media (hover: none) {
  .service-card__overlay {
    background: linear-gradient(
      180deg,
      rgba(20, 8, 14, 0.20) 0%,
      rgba(20, 8, 14, 0.45) 35%,
      rgba(20, 8, 14, 0.85) 65%,
      rgba(20, 8, 14, 0.95) 100%
    );
  }
  .service-card__reveal,
  .service-card__subtitle,
  .service-card__description,
  .service-card__cta {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
}

/* ============ REDUCED MOTION ============ */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card__image,
  .service-card__overlay,
  .service-card__reveal,
  .service-card__number,
  .service-card__title,
  .service-card__subtitle,
  .service-card__description,
  .service-card__cta {
    transition: opacity 0.2s ease !important;
    transform: none !important;
  }
}
`;

let startReplace = css.indexOf('.services-grid {');
if (startReplace === -1 || startReplace > startIndex) {
    startReplace = startIndex;
}

let endReplace = css.indexOf('.modal-overlay');

const pre = css.slice(0, startReplace);
const post = css.slice(endReplace);

fs.writeFileSync('src/index.css', pre + newCSSBlock + '\n' + post);
