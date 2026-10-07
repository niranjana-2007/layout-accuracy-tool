import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import photoAsset from "@/assets/niranjana.jpg.asset.json";
import interviewAiAsset from "@/assets/interview-ai.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niranjana E — Computer Science Student Portfolio" },
      { name: "description", content: "Portfolio of Niranjana E, B.Tech Computer Science student at AWH Engineering College, Kozhikode." },
      { property: "og:title", content: "Niranjana E — Computer Science Student" },
      { property: "og:description", content: "Projects, skills and learning journey of a B.Tech CS student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["About", "Skills", "Projects", "Journey", "Contact"];

const SKILLS = [
  { name: "C", note: "Programming fundamentals, logic and problem solving" },
  { name: "Python", note: "Scripting and core programming concepts" },
  { name: "HTML", note: "Semantic page structure" },
  { name: "CSS", note: "Layout and styling" },
  { name: "Basic Web Development", note: "Building simple static websites" },
];

const PROJECTS = [
  {
    n: 1,
    title: "Interview AI",
    tagline: "AI-powered interview practice web application",
    purpose:
      "An interactive interview practice platform designed to help users prepare for interviews by selecting a role, answering interview questions, receiving feedback, and tracking their progress.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Designed and developed the web interface and implemented the core interview interaction, question flow, answer submission, feedback and progress functionality.",
    image: interviewAiAsset.url,
    alt: "Interview AI — home, role selection, interview question and results screens",
    demo: "https://niranjana-2007.github.io/AI-Interview-Assistant/",
    repo: "https://github.com/niranjana-2007/AI-Interview-Assistant",
  },
];

const PROJECT_PLACEHOLDERS = [2, 3];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div className="reveal mb-14 flex items-baseline gap-6 border-b border-border pb-6">
      <span className="font-mono text-xs tracking-widest text-primary">{index}</span>
      <h2 id={`${id}-h`} className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="italic text-muted-foreground/70">[{children}]</span>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur" : ""}`}>
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="text-sm font-extrabold tracking-[0.2em]">NIRANJANA<span className="text-primary">.</span>E</a>
          <ul className="hidden gap-9 md:flex">
            {NAV.map((n) => (
              <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n}</a></li>
            ))}
          </ul>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </nav>
        {open && (
          <ul className="border-t border-border bg-background px-6 py-4 md:hidden">
            {NAV.map((n) => (
              <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-3 text-muted-foreground hover:text-foreground">{n}</a></li>
            ))}
          </ul>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 md:px-12">
          {/* Ambient background accents */}
          <div className="pointer-events-none absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-primary opacity-[0.06] blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full bg-primary opacity-[0.04] blur-[100px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col items-start lg:col-span-7">
              <p className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-primary opacity-80">
                Computer Science Student
              </p>
              <h1 className="mb-8 text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-7xl">
                Hi, I'm <br />
                <span className="font-serif font-light italic text-primary">Niranjana.E</span>
              </h1>
              <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                B.Tech Computer Science student building my skills through projects, experimentation and continuous learning.
              </p>
              <div className="mb-16 flex flex-wrap gap-4">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  View My Projects
                  <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground/10">
                  <Github size={18} className="opacity-70" /> GitHub
                </a>
              </div>
              <dl className="flex w-full gap-12 border-t border-border/60 pt-8">
                <div className="flex flex-col gap-1">
                  <dt className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/70">College</dt>
                  <dd className="text-xs leading-tight text-foreground/80">AWH Engineering College,<br />Kozhikode</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/70">Graduating</dt>
                  <dd className="text-xs text-foreground/80">2029</dd>
                </div>
              </dl>
            </div>

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="group relative">
                <div className="absolute -inset-2 rounded-full bg-primary opacity-20 blur-2xl transition-opacity duration-1000 group-hover:opacity-30" />
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-foreground/10 shadow-2xl ring-8 ring-foreground/5 md:h-80 md:w-80 lg:h-96 lg:w-96">
                  <img src={photoAsset.url} alt="Portrait of Niranjana E" className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>

          <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground/60 md:flex">
            <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
            <span className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </a>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
          <SectionHead index="01" title="About" id="about" />
          <div className="reveal grid gap-10 md:grid-cols-[1fr_2fr]">
            <p className="font-serif text-3xl italic leading-snug text-primary">Learning by building.</p>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>I'm <span className="text-foreground">Niranjana</span>, a B.Tech Computer Science student at AWH Engineering College, Kozhikode, Kerala, expected to graduate in 2029.</p>
              <p>I'm currently learning and building practical projects while developing my foundation in programming and web development — starting with C and Python, and creating websites with HTML and CSS.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
          <SectionHead index="02" title="Skills" id="skills" />
          <ul className="reveal divide-y divide-border border-y border-border">
            {SKILLS.map((s, i) => (
              <li key={s.name} className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 py-6 md:grid-cols-[4rem_1fr_1.2fr]">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">{s.name}</span>
                <span className="col-start-2 text-muted-foreground md:col-start-3">{s.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Currently at a beginner level and growing steadily.</p>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
          <SectionHead index="03" title="Projects" id="projects" />
          <div className="space-y-24">
            {PROJECTS.map((p, i) => (
              <article key={p.n} className={`reveal grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="group overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-primary">PROJECT 0{p.n}</p>
                  <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{p.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{p.tagline}</p>
                  <dl className="mt-8 space-y-5 border-t border-border pt-8 text-sm leading-relaxed">
                    <div className="grid grid-cols-[8rem_1fr] gap-4">
                      <dt className="text-muted-foreground">Purpose</dt>
                      <dd className="text-foreground/90">{p.purpose}</dd>
                    </div>
                    <div className="grid grid-cols-[8rem_1fr] gap-4">
                      <dt className="text-muted-foreground">Technologies</dt>
                      <dd className="text-foreground/90">{p.tech.join(" · ")}</dd>
                    </div>
                    <div className="grid grid-cols-[8rem_1fr] gap-4">
                      <dt className="text-muted-foreground">My role</dt>
                      <dd className="text-foreground/90">{p.role}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> Live Demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <Github size={16} /> GitHub Repository
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {PROJECT_PLACEHOLDERS.map((n, i) => (
              <article key={n} className={`reveal grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="group overflow-hidden rounded-sm border border-border bg-card">
                  <div className="flex aspect-[16/10] items-center justify-center bg-muted text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-[1.03]">
                    Project screenshot
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-primary">PROJECT 0{n}</p>
                  <h3 className="mt-3 text-3xl font-bold"><Placeholder>Project name</Placeholder></h3>
                  <p className="mt-4 text-muted-foreground"><Placeholder>Short description</Placeholder></p>
                  <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                    <div className="grid grid-cols-[8rem_1fr]"><dt className="text-muted-foreground">Purpose</dt><dd><Placeholder>Problem it solves</Placeholder></dd></div>
                    <div className="grid grid-cols-[8rem_1fr]"><dt className="text-muted-foreground">Technologies</dt><dd><Placeholder>Tech used</Placeholder></dd></div>
                    <div className="grid grid-cols-[8rem_1fr]"><dt className="text-muted-foreground">My role</dt><dd><Placeholder>Contribution</Placeholder></dd></div>
                  </dl>
                  <div className="mt-6 flex gap-6 text-sm">
                    <span className="inline-flex items-center gap-1 text-muted-foreground"><Github size={14} /> GitHub — link pending</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground"><ArrowUpRight size={14} /> Live demo — if available</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mx-auto max-w-6xl px-6 py-28">
          <SectionHead index="04" title="Certificates & Activities" id="ach" />
          <ul className="reveal divide-y divide-border border-y border-border">
            {["Certificate", "Achievement", "Activity"].map((t) => (
              <li key={t} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <span className="text-lg"><Placeholder>{t} title</Placeholder></span>
                <span className="text-sm text-muted-foreground"><Placeholder>Issuer · Year</Placeholder></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Journey */}
        <section id="journey" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
          <SectionHead index="05" title="Learning Journey" id="journey" />
          <ol className="reveal relative ml-2 border-l border-border">
            {[
              { y: "2025", t: "Started B.Tech Computer Science", d: "Joined AWH Engineering College, Kozhikode." },
              { y: "Now", t: "Programming foundations", d: "Learning C and Python, and building web pages with HTML and CSS." },
              { y: "Next", t: "Building practical projects", d: "Applying what I learn through hands-on projects." },
              { y: "2029", t: "Expected graduation", d: "B.Tech in Computer Science." },
            ].map((s) => (
              <li key={s.t} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs tracking-widest text-primary">{s.y}</p>
                <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
          <SectionHead index="06" title="Contact" id="contact" />
          <div className="reveal">
            <p className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Let's <span className="font-serif font-normal italic text-primary">connect</span>.
            </p>
            <ul className="mt-12 divide-y divide-border border-y border-border">
              {[
                { i: Mail, l: "Email" },
                { i: Github, l: "GitHub" },
                { i: Linkedin, l: "LinkedIn" },
              ].map(({ i: Icon, l }) => (
                <li key={l} className="flex items-center justify-between py-5">
                  <span className="inline-flex items-center gap-3 text-lg"><Icon size={18} className="text-primary" /> {l}</span>
                  <span className="text-sm text-muted-foreground">Link to be added</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <span className="font-bold tracking-[0.2em] text-foreground">NIRANJANA.E</span>
          <span>B.Tech Computer Science</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
