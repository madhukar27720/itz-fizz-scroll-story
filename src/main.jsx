import React, { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '58%', description: 'more pick-me-up in every pop', position: 'stat--one' },
  { number: '0g', description: 'of added sugar. Zero. Zilch.', position: 'stat--two' },
  { number: '23%', description: 'less fuss, more fizz', position: 'stat--three' },
  { number: '100%', description: 'real good ingredients', position: 'stat--four' },
]

function Wordmark() {
  return (
    <a className="wordmark" href="#home" aria-label="Itz Fizz home">
      <span className="wordmark__itz">itz</span>
      <span className="wordmark__fizz">fizz<span className="wordmark__dot">®</span></span>
    </a>
  )
}

function Can({ idPrefix }) {
  return (
    <svg className="can-art" viewBox="0 0 440 620" fill="none" role="img" aria-labelledby={`${idPrefix}can-title`}>
      <title id={`${idPrefix}can-title`}>Itz Fizz Blood Orange sparkling soda can</title>
      <defs>
        <linearGradient id={`${idPrefix}aluminum`} x1="99" y1="70" x2="366" y2="551" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7B27C" />
          <stop offset="0.14" stopColor="#F47639" />
          <stop offset="0.42" stopColor="#F05B29" />
          <stop offset="0.75" stopColor="#D63B21" />
          <stop offset="0.94" stopColor="#EE7540" />
          <stop offset="1" stopColor="#AA341E" />
        </linearGradient>
        <linearGradient id={`${idPrefix}can-shine`} x1="147" y1="100" x2="340" y2="104" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity=".34" />
          <stop offset=".29" stopColor="white" stopOpacity=".025" />
          <stop offset=".8" stopColor="#4D120C" stopOpacity=".08" />
          <stop offset="1" stopColor="white" stopOpacity=".24" />
        </linearGradient>
        <linearGradient id={`${idPrefix}tin`} x1="154" y1="53" x2="284" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DFDFD5" />
          <stop offset=".3" stopColor="#FEFFF5" />
          <stop offset=".63" stopColor="#B1B6AD" />
          <stop offset=".86" stopColor="#F7F5E8" />
          <stop offset="1" stopColor="#959A94" />
        </linearGradient>
        <filter id={`${idPrefix}can-shadow`} x="45" y="32" width="350" height="575" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <clipPath id={`${idPrefix}body-clip`}><path d="m110 87 21-25c4-5 10-8 17-8h143c7 0 13 3 17 8l21 25 17 42v373l-20 52c-3 8-11 13-19 13H132c-8 0-16-5-19-13l-20-52V129l17-42Z" /></clipPath>
        <pattern id={`${idPrefix}dots`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#FFF7DF" fillOpacity=".4" />
        </pattern>
      </defs>
      <ellipse cx="221" cy="555" fill="#331B16" fillOpacity=".29" filter={`url(#${idPrefix}can-shadow)`} rx="127" ry="22" />
      <path d="m110 87 21-25c4-5 10-8 17-8h143c7 0 13 3 17 8l21 25 17 42v373l-20 52c-3 8-11 13-19 13H132c-8 0-16-5-19-13l-20-52V129l17-42Z" fill={`url(#${idPrefix}aluminum)`} stroke="#A43A20" strokeWidth="1.5" />
      <g clipPath={`url(#${idPrefix}body-clip)`}>
        <path d="M136 55h50v512h-50z" fill={`url(#${idPrefix}can-shine)`} />
        <path d="M301 53h13v516h-13z" fill="#FFF2D0" fillOpacity=".19" />
        <path d="M85 72h283v68H85z" fill={`url(#${idPrefix}tin)`} />
        <ellipse cx="225" cy="68" fill="#888E85" rx="86" ry="17" />
        <ellipse cx="225" cy="64" fill={`url(#${idPrefix}tin)`} rx="81" ry="14" />
        <path d="M225 58c19 0 36 3 47 7-14 4-31 6-47 6-15 0-30-2-42-5 11-5 25-8 42-8Z" fill="#858A80" />
        <ellipse cx="225" cy="64" fill="#C6C8BE" rx="21" ry="5.7" />
        <path d="M113 490h225l-17 68H132l-19-68Z" fill="#E04426" fillOpacity=".55" />
        <path d="M112 489h225" stroke="#FFBD88" strokeOpacity=".32" />
        <path d="M87 140h282v356H87z" fill={`url(#${idPrefix}dots)`} />
        <path d="M98 146h7v340h-7z" fill="#FFE2A6" fillOpacity=".2" />
      </g>
      <path d="M110 86c36-12 193-14 238 0" stroke="#FFF9E8" strokeOpacity=".4" strokeWidth="2" />
      <path d="M105 535c49 16 189 17 237 0" stroke="#FFF6D5" strokeOpacity=".22" strokeWidth="2" />
      <text x="219" y="189" textAnchor="middle" fill="#FFEFB9" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="4">GOOD THINGS INSIDE</text>
      <text x="221" y="273" textAnchor="middle" fill="#FFF3D2" fontFamily="DM Sans, sans-serif" fontSize="66" fontWeight="1000" letterSpacing="-7">itz</text>
      <text x="221" y="327" textAnchor="middle" fill="#FFF3D2" fontFamily="Playfair Display, serif" fontSize="59" fontStyle="italic" fontWeight="700" letterSpacing="-4">fizz</text>
      <path d="M170 345h103" stroke="#FFEEC6" strokeWidth="1" strokeOpacity=".6" />
      <text x="221" y="369" textAnchor="middle" fill="#FFE8B6" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="2.1">BLOOD ORANGE</text>
      <circle cx="220" cy="428" r="36" fill="#F78338" stroke="#FFD05E" strokeWidth="2" />
      <circle cx="220" cy="428" r="27" fill="#FFC259" />
      <circle cx="220" cy="428" r="22" fill="#F36B2A" />
      <path d="M220 407v42m21-21h-42m6-15 30 30m0-30-30 30" stroke="#FFE0A1" strokeWidth="2" strokeOpacity=".8" />
      <path d="M238 394c7-9 17-12 25-11-3 9-10 16-21 19" fill="#6F8A48" />
      <text x="221" y="503" textAnchor="middle" fill="#FFEBC0" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="2">SPARKLING SODA · 12 FL OZ</text>
      <text x="221" y="521" textAnchor="middle" fill="#FFEBC0" fontFamily="DM Mono, monospace" fontSize="7" letterSpacing="2.5">A LITTLE MORE POP.</text>
      <path d="m350 123-3 388" stroke="#FFF8E7" strokeOpacity=".23" strokeWidth="3" />
    </svg>
  )
}

function App() {
  const introRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) return

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from('.eyebrow', { opacity: 0, y: 12, duration: 0.55 })
        .from('.headline__row > span', { opacity: 0, yPercent: 75, rotate: 2, duration: 0.8, stagger: 0.11 }, '-=0.18')
        .from('.hero__copy, .hero__actions', { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, '-=0.42')
        .from('.stat', { opacity: 0, y: 20, duration: 0.62, stagger: 0.12 }, '-=0.35')
        .from('.hero-can', { opacity: 0, scale: 0.9, y: 30, rotate: -8, duration: 1, ease: 'back.out(1.35)' }, 0.25)
        .from('.product-caption, .scroll-cue', { opacity: 0, y: 10, duration: 0.45, stagger: 0.1 }, '-=0.2')

      gsap.to('.hero-can .can-float', { y: -12, rotate: -1.5, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.2 })
      gsap.utils.toArray('.bubble').forEach((bubble, index) => {
        gsap.to(bubble, { y: -18 - index * 7, x: (index % 2 ? 9 : -8), opacity: 0.28, duration: 2.5 + index * 0.65, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: index * 0.45 })
      })
      gsap.to('.story-can__wrap', {
        x: () => Math.min(250, window.innerWidth * 0.2),
        y: () => window.innerWidth < 760 ? -8 : -16,
        rotate: 13,
        scale: 0.79,
        ease: 'none',
        scrollTrigger: { trigger: '.scroll-story', start: 'top bottom', end: 'bottom bottom', scrub: 1, invalidateOnRefresh: true },
      })
      gsap.to('.road-stripe', {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: { trigger: '.scroll-story', start: 'top bottom', end: 'bottom bottom', scrub: 1.1 },
      })
      gsap.utils.toArray('.story-reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 27, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })
      gsap.from('.flavor-card', {
        opacity: 0, y: 25, stagger: 0.16, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: '.flavors__grid', start: 'top 82%', once: true },
      })
    }, introRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={introRef}>
      <header className="site-header">
        <Wordmark />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#good-stuff">The good stuff</a>
          <a href="#flavors">Our flavors</a>
        </nav>
        <a className="header-cta" href="#flavors">find your fizz <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__left">
          <p className="eyebrow"><span className="eyebrow__dot" /> SPARKLING SODA, SUNSHINE STATE OF MIND</p>
          <h1 className="headline" id="hero-title">
            <span className="headline__row"><span>W E L C O M E</span></span>
            <span className="headline__row headline__row--second"><span>ITZ <i>FIZZ</i><span className="headline__asterisk">✳</span></span></span>
          </h1>
          <p className="hero__copy">A little more <em>pop.</em><br />A whole lot more <strong>good.</strong></p>
          <div className="hero__actions">
            <a className="button button--dark" href="#flavors">find your flavor <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#good-stuff">what makes us fizz <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero__stage" aria-label="Blood orange Itz Fizz sparkling soda">
          <div className="stage-note"><span>FIG. 01</span><span>THE ORIGINAL<br />GOOD MOOD</span></div>
          <div className="can-halo" />
          <span className="bubble bubble--one" aria-hidden="true" />
          <span className="bubble bubble--two" aria-hidden="true" />
          <span className="bubble bubble--three" aria-hidden="true" />
          <span className="bubble bubble--four" aria-hidden="true" />
          <div className="can-wrap hero-can"><div className="can-float"><Can idPrefix="hero-" /></div></div>
          <div className="product-caption"><span className="caption-line" /><span>blood orange · 12 FL OZ</span></div>
          <div className="orbit-label" aria-hidden="true">MADE FOR THE GOOD BITS&nbsp; · &nbsp;MADE FOR THE GOOD BITS&nbsp; · &nbsp;</div>
        </div>

        <div className="hero__bottom">
          <div className="stats-label"><span>THE NUMBERS<br />ARE FIZZY</span><span className="stats-label__arrow">↘</span></div>
          <div className="stats-grid">
            {stats.map(({ number, description, position }, index) => (
              <div className={`stat ${position}`} key={number}>
                <div className="stat__topline"><span className="stat__index">0{index + 1}</span><span className="stat__sparkle">✳</span></div>
                <span className="stat__number">{number}</span>
                <span className="stat__description">{description}</span>
              </div>
            ))}
          </div>
          <a href="#good-stuff" className="scroll-cue" aria-label="Scroll down to read more"><span className="scroll-cue__line" /> SCROLL TO FEEL SOMETHING</a>
        </div>
        <span className="hero__side-label">EST. IN A VERY GOOD MOOD&nbsp; — &nbsp;01 / 03</span>
      </section>

      <section className="scroll-story" id="good-stuff" aria-label="A little more good in every can">
        <div className="road" aria-hidden="true">
          <div className="road__edge road__edge--top" />
          <div className="road__surface"><div className="road-stripe" /></div>
          <div className="road__edge road__edge--bottom" />
        </div>
        <div className="story-inner">
          <div className="story-can-anchor" aria-hidden="true">
            <div className="story-can__wrap can-wrap"><div className="can-float"><Can idPrefix="story-" /></div></div>
          </div>
          <div className="story-content">
            <div className="story-index story-reveal"><span>02 — GOOD, MEET YOU</span><span>↓ &nbsp; KEEP THE FEELING</span></div>
            <p className="eyebrow story-reveal"><span className="eyebrow__dot" /> YOU HAVE A LOT GOING ON. YOUR SODA SHOULDN’T.</p>
            <h2 className="story-title story-reveal">Life’s too short<br />for <em>flat</em> <span className="story-title__pop">everything.</span></h2>
            <p className="story-copy story-reveal">Real fruit. Real sparkle. Zero added sugar. All of the little things that add up to one pretty great little can.</p>
            <a className="text-link story-reveal" href="#flavors">get to know us <span aria-hidden="true">↗</span></a>
            <span className="story-stamp" aria-hidden="true">GOOD<br />TO THE<br />LAST DROP<span>✳</span></span>
          </div>
        </div>
        <div className="scroll-story__footer"><span>NO FUNNY BUSINESS. JUST THE GOOD STUFF.</span><span>SCROLL = MORE GOOD &nbsp; ↓</span></div>
      </section>

      <section className="flavors" id="flavors">
        <div className="flavors__heading">
          <div><p className="eyebrow story-reveal"><span className="eyebrow__dot" /> PICK YOUR PERSONALITY</p><h2 className="flavors__title story-reveal">The flavor<br /><em>of a good day.</em></h2></div>
          <p className="flavors__aside story-reveal">ONE LITTLE CAN.<br />A VERY BIG MOOD.</p>
        </div>
        <div className="flavors__grid">
          <article className="flavor-card flavor-card--orange">
            <div className="flavor-card__art" aria-hidden="true"><span className="flavor-card__fruit">◉</span><span className="flavor-card__leaf">✦</span><span className="flavor-card__bubble">01</span></div>
            <div className="flavor-card__meta"><span>THE SUNSHINE ONE · NO. 01</span><span>↗</span></div>
            <h3>Blood Orange</h3><p>Citrusy. Sparkly. Gone too soon.</p>
          </article>
          <article className="flavor-card flavor-card--lime">
            <div className="flavor-card__art" aria-hidden="true"><span className="flavor-card__fruit">◉</span><span className="flavor-card__leaf">✦</span><span className="flavor-card__bubble">02</span></div>
            <div className="flavor-card__meta"><span>THE FRESH START · NO. 02</span><span>↗</span></div>
            <h3>Little Lime</h3><p>Tangy in the very best way.</p>
          </article>
          <article className="flavor-card flavor-card--pink">
            <div className="flavor-card__art" aria-hidden="true"><span className="flavor-card__fruit">◉</span><span className="flavor-card__leaf">✦</span><span className="flavor-card__bubble">03</span></div>
            <div className="flavor-card__meta"><span>THE SOFT LAUNCH · NO. 03</span><span>↗</span></div>
            <h3>Pretty Peach</h3><p>Stone fruit, smooth moves.</p>
          </article>
        </div>
        <div className="flavors__footer"><span>THREE GOOD REASONS TO OPEN THE FRIDGE.</span><a className="text-link" href="#home">BACK TO THE FEELING <span>↑</span></a></div>
      </section>

      <footer className="site-footer">
        <Wordmark />
        <span className="site-footer__message">GOOD TASTE. BETTER DAYS.</span>
        <span className="site-footer__legal">© 2026 ITZ FIZZ® &nbsp; · &nbsp; MADE WITH A LITTLE EXTRA.</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
