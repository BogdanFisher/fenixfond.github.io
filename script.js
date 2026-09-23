/* ============================================
   ПЕРЕМЕННЫЕ
   ============================================ */
:root {
    /* Цвета */
    --color-primary: #1a3a5c;
    --color-primary-light: #2c5f8a;
    --color-accent: #4CAF50;
    --color-accent-hover: #45a049;
    --color-text: #1a1a1a;
    --color-text-light: #666666;
    --color-text-white: #ffffff;
    --color-bg: #ffffff;
    --color-bg-light: #f8f9fa;
    --color-bg-dark: #0d1b2a;
    --color-border: #e0e0e0;
    --color-success: #4CAF50;
    --color-warning: #FF9800;
    --color-error: #f44336;
    
    /* Типографика */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 2rem;      /* 32px */
    --font-size-4xl: 2.5rem;    /* 40px */
    --font-size-5xl: 3.5rem;    /* 56px */
    --font-size-6xl: 4.5rem;    /* 72px */
    
    /* Отступы */
    --spacing-xs: 0.25rem;   /* 4px */
    --spacing-sm: 0.5rem;    /* 8px */
    --spacing-md: 1rem;      /* 16px */
    --spacing-lg: 1.5rem;    /* 24px */
    --spacing-xl: 2rem;      /* 32px */
    --spacing-2xl: 3rem;     /* 48px */
    --spacing-3xl: 4rem;     /* 64px */
    --spacing-4xl: 6rem;     /* 96px */
    
    /* Контейнер */
    --container-max: 1280px;
    --container-padding: 1.5rem;
    
    /* Радиусы */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* Тени */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
    
    /* Переходы */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Z-index */
    --z-header: 1000;
    --z-modal: 2000;
    --z-tooltip: 3000;
}


/* ============================================
   СБРОС СТИЛЕЙ
   ============================================ */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-bg);
    overflow-x: hidden;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
}

ul, ol {
    list-style: none;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}


/* ============================================
   КОНТЕЙНЕР
   ============================================ */
.container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}


/* ============================================
   ТИПОГРАФИКА
   ============================================ */
.section-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-lg);
    text-align: center;
}

.section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-light);
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}


/* ============================================
   КНОПКИ
   ============================================ */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: var(--font-size-base);
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
}

.btn--primary {
    background-color: var(--color-accent);
    color: var(--color-text-white);
}

.btn--primary:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn--outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn--outline:hover {
    background-color: var(--color-primary);
    color: var(--color-text-white);
    transform: translateY(-2px);
}

.btn--large {
    padding: var(--spacing-lg) var(--spacing-2xl);
    font-size: var(--font-size-lg);
}


/* ============================================
   ШАПКА
   ============================================ */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-header);
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    transition: all var(--transition-base);
}

.header--scrolled {
    box-shadow: var(--shadow-md);
}

.header__container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: var(--spacing-md) var(--container-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-xl);
}

.header__logo img {
    height: 40px;
    width: auto;
}

.header__menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
}

.header__link {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text);
    padding: var(--spacing-sm) 0;
    position: relative;
}

.header__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width var(--transition-base);
}

.header__link:hover::after,
.header__link--active::after {
    width: 100%;
}

.header__actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.header__burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: var(--spacing-sm);
}

.header__burger span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-text);
    transition: all var(--transition-base);
}


/* ============================================
   СЕКЦИЯ 1: HERO
   ============================================ */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-primary) 100%);
}

.hero__background {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.hero__gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(76, 175, 80, 0.15) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(33, 150, 243, 0.1) 0%, transparent 50%);
}

.hero__particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.hero__content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: var(--container-padding);
    max-width: 900px;
}

.hero__title {
    font-size: var(--font-size-6xl);
    font-weight: 800;
    color: var(--color-text-white);
    line-height: 1.1;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
}

.hero__subtitle {
    font-size: var(--font-size-xl);
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: var(--spacing-2xl);
    font-weight: 300;
}

.hero__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
}

.hero__scroll-hint {
    position: absolute;
    bottom: var(--spacing-2xl);
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    color: rgba(255, 255, 255, 0.6);
    font-size: var(--font-size-sm);
}

.hero__scroll-arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
    animation: scrollArrow 2s infinite;
}

@keyframes scrollArrow {
    0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.6; }
    50% { transform: rotate(45deg) translateY(8px); opacity: 1; }
}


/* ============================================
   СЕКЦИЯ 2: СЧЁТЧИКИ
   ============================================ */
.counters {
    padding: var(--spacing-4xl) 0;
    background-color: var(--color-bg-light);
}

.counters__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
}

.counter-card {
    text-align: center;
    padding: var(--spacing-2xl);
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.counter-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.counter-card__icon {
    margin-bottom: var(--spacing-lg);
}

.counter-card__value {
    font-size: var(--font-size-5xl);
    font-weight: 800;
    color: var(--color-primary);
    line-height: 1;
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs);
}

.counter-card__currency {
    font-size: var(--font-size-3xl);
    color: var(--color-accent);
}

.counter-card__plus {
    font-size: var(--font-size-3xl);
    color: var(--color-accent);
}

.counter-card__label {
    font-size: var(--font-size-base);
    color: var(--color-text-light);
    font-weight: 500;
}


/* ============================================
   СЕКЦИЯ 3: ЛЕТЯЩИЙ РУБЛЬ
   ============================================ */
.coin-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(180deg, var(--color-bg-light) 0%, var(--color-bg) 100%);
}

.coin-section__container {
    position: relative;
    width: 100%;
    max-width: var(--container-max);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.coin-section__path {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.coin {
    position: absolute;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #FFD700, #FFA000);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
    z-index: 10;
    opacity: 0;
}

.coin__symbol {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    color: #8B4513;
}

.coin-section__flash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
}

.coin-section__content {
    position: relative;
    z-index: 5;
    text-align: center;
    max-width: 600px;
    padding: var(--container-padding);
}

.coin-section__title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
}

.coin-section__text {
    font-size: var(--font-size-lg);
    color: var(--color-text-light);
}


/* ============================================
   СЕКЦИЯ 4: ЗДАНИЕ
   ============================================ */
.building-section {
    padding: var(--spacing-4xl) 0;
    background-color: var(--color-bg);
}

.building {
    position: relative;
    max-width: 500px;
    margin: 0 auto var(--spacing-2xl);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.building__bricks {
    position: absolute;
    inset: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
    gap: 2px;
    padding: var(--spacing-md);
}

.building__bricks .brick {
    width: 30px;
    height: 15px;
    background-color: var(--color-accent);
    border-radius: 2px;
    opacity: 0;
    transform: translateY(100px);
}

.building__outline {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.building__caption {
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-text-light);
    max-width: 600px;
    margin: 0 auto;
}


/* ============================================
   СЕКЦИЯ 5: КАРТА
   ============================================ */
.map-section {
    padding: var(--spacing-4xl) 0;
    background-color: var(--color-bg-light);
}

.map {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.map__svg {
    width: 100%;
    height: auto;
}

.map__popup {
    position: absolute;
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    padding: var(--spacing-lg);
    max-width: 300px;
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
    z-index: 10;
}

.map__popup--visible {
    opacity: 1;
    pointer-events: auto;
}

.map__popup-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.map__popup-text {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
    margin-bottom: var(--spacing-md);
}

.map__popup-link {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-accent);
}


/* ============================================
   СЕКЦИЯ 6: ИДЕИ
   ============================================ */
.ideas-section {
    padding: var(--spacing-4xl) 0;
    background-color: var(--color-bg);
}

.ideas__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

.idea-card {
    background-color: var(--color-bg-light);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
    border: 1px solid var(--color-border);
}

.idea-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-accent);
}

.idea-card__status {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-md);
    background-color: var(--color-warning);
    color: var(--color-text-white);
    font-size: var(--font-size-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
}

.idea-card__title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
}

.idea-card__text {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
    margin-bottom: var(--spacing-lg);
}

.idea-card__link {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-accent);
}

.ideas__actions {
    text-align: center;
    margin-top: var(--spacing-2xl);
}


/* ============================================
   СЕКЦИЯ 7: ОТЧЁТЫ
   ============================================ */
.reports-section {
    padding: var(--spacing-4xl) 0;
    background-color: var(--color-bg-light);
}

.reports__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

.report-card {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
}

.report-card__title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    text-align: center;
}

.report-card__chart {
    width: 100%;
    height: auto;
}

.reports__actions {
    text-align: center;
    margin-top: var(--spacing-2xl);
}


/* ============================================
   СЕКЦИЯ 8: CTA
   ============================================ */
.cta-section {
    padding: var(--spacing-4xl) 0;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
}

.cta {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.cta__title {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    color: var(--color-text-white);
    margin-bottom: var(--spacing-lg);
}

.cta__text {
    font-size: var(--font-size-lg);
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: var(--spacing-2xl);
}

.cta__button {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}


/* ============================================
   ПОДВАЛ
   ============================================ */
.footer {
    background-color: var(--color-bg-dark);
    color: var(--color-text-white);
    padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer__grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
}

.footer__title {
    font-size: var(--font-size-base);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-white);
}

.footer__list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.footer__list a {
    color: rgba(255, 255, 255, 0.7);
    font-size: var(--font-size-sm);
}

.footer__list a:hover {
    color: var(--color-accent);
}

.footer__text {
    color: rgba(255, 255, 255, 0.7);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-md);
}

.footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__copy {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.5);
}

.footer__links {
    display: flex;
    gap: var(--spacing-lg);
}

.footer__links a {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.5);
}

.footer__links a:hover {
    color: var(--color-accent);
}
