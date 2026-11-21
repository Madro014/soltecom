import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { COMPANY_INFO } from '../data/company';
import './Hero.css';

const devices = [
  ['cam-bullet.png', 'Cámara bala', 'bullet', 14],
  ['cam-dome.png', 'Cámara domo', 'dome', 25],
  ['access-biometric.png', 'Control biométrico', 'access', 19],
  ['phone-app.png', 'Monitoreo móvil', 'phone', 30],
  ['barrier-gate.png', 'Barrera vehicular', 'barrier', 11],
] as const;
const brands = [
  ['Hikvision', 'hikvision-logo.webp'], ['ZKTeco', 'ZKTeco.webp'],
  ['Tiandy', 'Tiandy.webp'], ['IMOU', 'Imou.webp'],
  ['Intelbras', 'intelbras.webp'], ['Garen', 'Garen.webp'],
] as const;
const metrics = [
  ['verified_user', '100', '%', 'Garantía de fábrica'],
  ['support_agent', '24', '/7', 'Monitoreo remoto'],
  ['hub', '8', ' líneas', 'Soluciones integradas'],
  ['public', 'Nacional', '', 'Cobertura en Colombia'],
] as const;
const installations = [
  ['installation-cctv.webp', 'Instalación de videovigilancia'],
  ['installation-access.webp', 'Instalación de control de acceso'],
  ['installation-networks.webp', 'Instalación de redes y monitoreo'],
] as const;

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let decodeTimer: number | undefined;
    const context = gsap.context(() => {
      const label = section.querySelector<HTMLElement>('.hero-decode');
      const finalText = 'y seguridad electrónica';
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const decode = () => {
        if (!label) return;
        let frame = 0;
        decodeTimer = window.setInterval(() => {
          const done = Math.floor(frame / 2);
          label.textContent = [...finalText].map((letter, index) => letter === ' ' || index < done ? letter : alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
          if (done >= finalText.length) { window.clearInterval(decodeTimer); label.textContent = finalText; }
          frame++;
        }, 25);
      };
      gsap.set('.hero-word-inner', { yPercent: 110, opacity: 0 });
      gsap.set('.hero-reveal', { y: 22, opacity: 0 });
      gsap.set('.hero-device', { y: 35, scale: 0.9, opacity: 0 });
      gsap.set('.hero-metric', { y: 30, opacity: 0 });
      section.querySelectorAll<HTMLElement>('.hero-number').forEach(element => { element.textContent = '0'; });
      gsap.set('.hero-focus-sharp', { scale: 1.06, opacity: 0 });
      gsap.set('.hero-scan', { xPercent: -110, opacity: 0 });
      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
      timeline.to('.hero-install-half--left', { xPercent: -110, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.54)
        .to('.hero-install-half--right', { xPercent: 110, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.54)
        .to('.hero-install-intro', { autoAlpha: 0, duration: 0.18 }, 1.27)
        .to('.hero-intro-cover', { opacity: 0, duration: 0.48 }, 0.64)
        .to('.hero-focus-soft', { opacity: 0, scale: 1.08, duration: 0.8 }, 0.68)
        .to('.hero-focus-sharp', { opacity: 1, scale: 1, duration: 0.8 }, 0.68)
        .to('.hero-scan', { xPercent: 110, opacity: 0.9, duration: 0.55, ease: 'power1.inOut' }, 0.78)
        .to('.hero-scan', { opacity: 0, duration: 0.18 }, 1.31)
        .to('.hero-word-inner', { yPercent: 0, opacity: 1, duration: 0.48, stagger: 0.07 }, 0.82)
        .call(decode, [], 0.98)
        .to('.hero-device', { y: 0, scale: 1, opacity: 1, duration: 0.62, stagger: 0.07 }, 0.9)
        .to('.hero-reveal', { y: 0, opacity: 1, duration: 0.42, stagger: 0.1 }, 1.2)
        .to('.hero-metric', { y: 0, opacity: 1, duration: 0.48, stagger: 0.09 }, 1.61)
        .to('.hero-viewfinder', { opacity: 0.42, duration: 0.35 }, 2.14);
      section.querySelectorAll<HTMLElement>('.hero-number').forEach(element => {
        const counter = { number: 0 };
        timeline.to(counter, { number: Number(element.dataset.value), duration: 0.7, onUpdate: () => { element.textContent = String(Math.round(counter.number)); } }, 1.7);
      });
      const photos = [...section.querySelectorAll<HTMLImageElement>('.hero-install-half img')];
      let cancelled = false;
      const timeout = new Promise<void>(resolve => window.setTimeout(resolve, 2200));
      Promise.race([Promise.all(photos.map(photo => photo.decode().catch(() => {}))), timeout]).then(() => {
        if (!cancelled) timeline.play();
      });
      return () => { cancelled = true; };
    }, section);

    const cleanups: Array<() => void> = [];
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const spotlight = section.querySelector<HTMLElement>('.hero-spotlight');
      const spotX = spotlight && gsap.quickTo(spotlight, 'x', { duration: 0.45 });
      const spotY = spotlight && gsap.quickTo(spotlight, 'y', { duration: 0.45 });
      const movers = [...section.querySelectorAll<HTMLElement>('.hero-device')].map(element => ({ element, x: gsap.quickTo(element, 'x', { duration: 0.65 }), y: gsap.quickTo(element, 'y', { duration: 0.65 }) }));
      const move = (event: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;
        spotX?.(event.clientX - rect.left - 200);
        spotY?.(event.clientY - rect.top - 200);
        movers.forEach(({ element, x, y }) => { const depth = Number(element.dataset.depth); x(nx * depth); y(ny * depth); });
      };
      section.addEventListener('pointermove', move);
      cleanups.push(() => section.removeEventListener('pointermove', move));
      section.querySelectorAll<HTMLElement>('.hero-magnetic').forEach(button => {
        const x = gsap.quickTo(button, 'x', { duration: 0.25 });
        const y = gsap.quickTo(button, 'y', { duration: 0.25 });
        const moveButton = (event: PointerEvent) => { const box = button.getBoundingClientRect(); x((event.clientX - box.left - box.width / 2) * 0.15); y((event.clientY - box.top - box.height / 2) * 0.15); };
        const leave = () => { x(0); y(0); };
        button.addEventListener('pointermove', moveButton);
        button.addEventListener('pointerleave', leave);
        cleanups.push(() => { button.removeEventListener('pointermove', moveButton); button.removeEventListener('pointerleave', leave); });
      });
    }
    return () => { window.clearInterval(decodeTimer); cleanups.forEach(fn => fn()); context.revert(); };
  }, []);

  return <section ref={root} className="hero-cinema" aria-label="Soluciones de seguridad electrónica SOLTECOM">
    <div className="hero-focus-soft" aria-hidden="true" /><div className="hero-focus-sharp" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" /><div className="hero-spotlight" aria-hidden="true" />
    <div className="hero-left-shade" aria-hidden="true" /><div className="hero-intro-cover" aria-hidden="true" />
    <div className="hero-install-intro" aria-hidden="true">
      {installations.map(([file, description]) => <div className="hero-install-panel" key={file}>
        <div className="hero-install-half hero-install-half--left"><img src={`/hero/${file}`} alt="" fetchPriority="high" /><span>{description}</span></div>
        <div className="hero-install-half hero-install-half--right"><img src={`/hero/${file}`} alt="" fetchPriority="high" /></div>
      </div>)}
    </div>
    <div className="hero-viewfinder" aria-hidden="true"><i /><i /><i /><i /><span><b /> REC &nbsp; 00:00:02</span></div>
    <div className="hero-scan" aria-hidden="true" />
    <div className="hero-main">
      <div className="hero-copy">
        <h1><span className="hero-word"><span className="hero-word-inner">Soluciones</span></span>{' '}
          <span className="hero-word"><span className="hero-word-inner">tecnológicas</span></span><br />
          <span className="hero-word hero-word--green"><span className="hero-word-inner hero-decode">y seguridad electrónica</span></span><br />
          <span className="hero-word"><span className="hero-word-inner">para empresas y hogares</span></span></h1>
        <p className="hero-lead hero-reveal">Somos una empresa colombiana especializada en el diseño, suministro e implementación de soluciones integrales en seguridad electrónica y tecnología aplicada.</p>
        <div className="hero-actions hero-reveal">
          <Link className="hero-button hero-button--primary hero-magnetic" to="/productos">Explorar productos <span aria-hidden="true">↗</span></Link>
          <Link className="hero-button hero-button--secondary hero-magnetic" to="/contacto">Solicitar asesoría <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-location hero-reveal"><span className="material-symbols-outlined" aria-hidden="true">location_on</span>{COMPANY_INFO.city} · Instalación nacional</div>
      </div>
      <div className="hero-visual" aria-label="Equipos de seguridad electrónica">
        <div className="hero-orbit hero-orbit--one" aria-hidden="true" /><div className="hero-orbit hero-orbit--two" aria-hidden="true" />
        {devices.map(([file, name, position, depth]) => <div key={file} className={`hero-device hero-device--${position}`} data-depth={depth}>
          <img src={`/hero/${file}`} alt={name} loading="eager" decoding="async" /><span className="hero-pulse" aria-hidden="true" />
        </div>)}
        <span className="hero-visual-caption" aria-hidden="true">VISIÓN · ACCESO · CONECTIVIDAD</span>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="hero-metrics">{metrics.map(([icon, value, suffix, label]) => <div className="hero-metric" key={value}>
        <span className="material-symbols-outlined hero-metric-icon" aria-hidden="true">{icon}</span>
        <div><strong>{value === '8' && '+'}<span className={value === 'Nacional' ? '' : 'hero-number'} data-value={value === 'Nacional' ? undefined : value}>{value}</span>{suffix}</strong><small>{label}</small></div>
      </div>)}</div>
      <div className="hero-marquee" aria-label="Marcas de tecnología que comercializamos"><span className="hero-marquee-label">TECNOLOGÍA DE CONFIANZA</span>
        <div className="hero-marquee-window"><div className="hero-marquee-track">{[0, 1].map(copy => <div className="hero-marquee-set" key={copy} aria-hidden={copy === 1}>
          {brands.map(([name, file]) => <img key={name} src={`/logo/${file}`} alt={copy === 0 ? name : ''} loading="lazy" />)}
        </div>)}</div></div>
      </div>
    </div>
  </section>;
}
