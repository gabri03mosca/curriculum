* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #070a12;
  --bg-2: #0d1224;
  --card: rgba(255, 255, 255, 0.075);
  --card-strong: rgba(255, 255, 255, 0.12);
  --text: #f7f8ff;
  --muted: #a9b0c3;
  --line: rgba(255, 255, 255, 0.14);
  --cyan: #33d6ff;
  --violet: #9b5cff;
  --green: #58f29a;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: "Inter", system-ui, sans-serif;
  background:
    radial-gradient(circle at 15% 15%, rgba(51, 214, 255, 0.16), transparent 32rem),
    radial-gradient(circle at 85% 10%, rgba(155, 92, 255, 0.18), transparent 30rem),
    radial-gradient(circle at 50% 100%, rgba(88, 242, 154, 0.12), transparent 34rem),
    var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.045;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.cursor-glow {
  position: fixed;
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(51, 214, 255, 0.18), transparent 60%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.25s ease;
}

.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background: rgba(7, 10, 18, 0.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.navbar {
  width: min(1160px, calc(100% - 2rem));
  margin: auto;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: #06101a;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  box-shadow: 0 0 28px rgba(51, 214, 255, 0.32);
}

.nav-links {
  display: flex;
  gap: 1.1rem;
  color: var(--muted);
  font-weight: 600;
}

.nav-links a {
  position: relative;
  transition: color 0.25s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.4rem;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--violet));
  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 12px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 5px auto;
  background: var(--text);
}

.section {
  position: relative;
  z-index: 2;
  padding: 7rem 0;
}

.container {
  width: min(1160px, calc(100% - 2rem));
  margin: auto;
}

.hero {
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding-top: 9rem;
}

.hero-grid {
  width: min(1160px, calc(100% - 2rem));
  margin: auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 4rem;
  align-items: center;
}

.eyebrow {
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

h1 {
  font-size: clamp(3rem, 7vw, 6.8rem);
  line-height: 0.93;
  letter-spacing: -0.07em;
  margin-bottom: 1.35rem;
}

h2 {
  font-size: clamp(2.1rem, 4vw, 3.8rem);
  letter-spacing: -0.05em;
  line-height: 1;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.65rem;
}

.gradient-text {
  display: inline-block;
  background: linear-gradient(120deg, var(--cyan), var(--violet), var(--green));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle,
.section-note,
.glass-card p,
.skill-card p,
.project-card p,
.cert-card p,
.contact-panel p {
  color: var(--muted);
  line-height: 1.75;
}

.hero-subtitle {
  max-width: 680px;
  font-size: 1.14rem;
}

.typing-card {
  width: fit-content;
  max-width: 100%;
  margin: 2rem 0;
  padding: 1rem 1.15rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.24);
  box-shadow: var(--shadow);
  font-family: "JetBrains Mono", monospace;
  color: var(--cyan);
}

.terminal-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 0.7rem;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 14px var(--green);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.35rem;
  border-radius: 999px;
  font-weight: 800;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn.primary {
  color: #06101a;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  box-shadow: 0 15px 44px rgba(51, 214, 255, 0.22);
}

.btn.secondary {
  border: 1px solid var(--line);
  background: var(--card);
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 610px;
  gap: 1rem;
  margin-top: 2.2rem;
}

.quick-stats div,
.glass-card,
.skill-card,
.project-card,
.cert-card,
.contact-panel {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--card), rgba(255, 255, 255, 0.035));
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.quick-stats div {
  padding: 1rem;
  border-radius: 20px;
}

.quick-stats strong {
  display: block;
  font-size: 1.55rem;
}

.quick-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.orbit-card {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}

.orbit {
  position: absolute;
  width: min(82vw, 430px);
  height: min(82vw, 430px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 50%;
  animation: rotate 14s linear infinite;
}

.orbit::before,
.orbit::after {
  content: "";
  position: absolute;
  inset: 40px;
  border: 1px dashed rgba(51, 214, 255, 0.24);
  border-radius: 50%;
}

.orbit::after {
  inset: 90px;
  border-color: rgba(155, 92, 255, 0.24);
}

.avatar-card {
  position: relative;
  z-index: 2;
  width: min(100%, 320px);
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--line);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.095);
  backdrop-filter: blur(22px);
  box-shadow: var(--shadow);
}

.avatar-placeholder {
  width: 132px;
  height: 132px;
  margin: 0 auto 1.2rem;
  display: grid;
  place-items: center;
  border-radius: 42px;
  color: #06101a;
  font-size: 2.6rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--cyan), var(--violet), var(--green));
}

.avatar-card p {
  color: var(--muted);
}

.floating-chip {
  position: absolute;
  z-index: 3;
  padding: 0.75rem 1rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(7, 10, 18, 0.7);
  backdrop-filter: blur(12px);
  font-weight: 800;
  animation: float 4s ease-in-out infinite;
}

.chip-1 { top: 14%; left: 8%; }
.chip-2 { top: 25%; right: 2%; animation-delay: 0.5s; }
.chip-3 { bottom: 22%; left: 0; animation-delay: 1s; }
.chip-4 { bottom: 12%; right: 12%; animation-delay: 1.5s; }

.section-heading {
  margin-bottom: 2.4rem;
  max-width: 760px;
}

.about-grid,
.projects-grid,
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.glass-card,
.skill-card,
.project-card,
.cert-card {
  border-radius: 28px;
  padding: 1.4rem;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.glass-card:hover,
.skill-card:hover,
.project-card:hover,
.cert-card:hover {
  transform: translateY(-6px);
  border-color: rgba(51, 214, 255, 0.45);
  background: var(--card-strong);
}

.timeline {
  list-style: none;
}

.timeline li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  border-left: 2px solid rgba(51, 214, 255, 0.36);
}

.timeline span {
  display: block;
  color: var(--green);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.84rem;
  margin-bottom: 0.35rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.skill-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  margin-bottom: 1.2rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 1.5rem;
}

.skill-bar {
  height: 8px;
  margin-top: 1.1rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
}

.skill-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--cyan), var(--violet));
  transform: scaleX(0);
  transform-origin: left;
  animation: growBar 1.3s ease forwards;
}

.exam-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.4rem;
}

.filter-btn {
  border: 1px solid var(--line);
  color: var(--text);
  background: var(--card);
  padding: 0.75rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease;
}

.filter-btn:hover,
.filter-btn.active {
  color: #06101a;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  transform: translateY(-2px);
}

.exam-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.exam-chip {
  padding: 0.78rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.08);
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.exam-chip:hover {
  transform: translateY(-3px) scale(1.02);
}

.exam-chip.hide {
  display: none;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  margin-bottom: 1.15rem;
}

.project-tag {
  color: var(--green);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.3rem 0;
}

.tech-list span {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(51, 214, 255, 0.1);
  color: #dff9ff;
  font-size: 0.86rem;
}

.project-link {
  color: var(--cyan);
  font-weight: 900;
}

.cert-card span {
  display: inline-block;
  color: var(--green);
  font-family: "JetBrains Mono", monospace;
  margin-bottom: 0.85rem;
}

.contact-panel {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
  border-radius: 34px;
  padding: 2rem;
}

.contact-links {
  display: grid;
  gap: 0.9rem;
}

.contact-links a,
.contact-links span {
  padding: 0.95rem 1rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.055);
  font-weight: 800;
}

.contact-links a:hover {
  border-color: rgba(88, 242, 154, 0.55);
}

.footer {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--muted);
  padding: 2rem 1rem;
  border-top: 1px solid var(--line);
}

.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

@keyframes growBar {
  to { transform: scaleX(1); }
}

@media (max-width: 940px) {
  .nav-links {
    position: fixed;
    top: 76px;
    left: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: rgba(7, 10, 18, 0.94);
  }

  .nav-links.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .hero-grid,
  .contact-panel {
    grid-template-columns: 1fr;
  }

  .about-grid,
  .projects-grid,
  .cert-grid,
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-visual {
    order: -1;
  }

  .orbit-card {
    min-height: 420px;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 5rem 0;
  }

  .about-grid,
  .projects-grid,
  .cert-grid,
  .skills-grid,
  .quick-stats {
    grid-template-columns: 1fr;
  }

  .floating-chip {
    display: none;
  }

  .avatar-card {
    width: 100%;
  }

  h1 {
    font-size: clamp(2.65rem, 16vw, 4.2rem);
  }
}
