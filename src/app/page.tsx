"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data ─────────────────────────────────────────── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const marqueeWords = [
  "Web Development",
  "Full-Stack Developer",
  "Laravel",
  "React",
  "TypeScript",
  "WordPress",
  "UI/UX Design",
];

const stats = [
  { value: "2+", label: "Companies" },
  { value: "3+", label: "Projects shipped" },
  { value: "1+", label: "Years building" },
  { value: "3.43", label: "GPA / Informatics" },
];

const expertise = [
  {
    num: "01",
    title: "Frontend Engineering",
    desc: "Building responsive, user-friendly interfaces with modern frameworks and clean design.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "WordPress"],
  },
  {
    num: "02",
    title: "Backend & APIs",
    desc: "Developing robust server-side logic, REST APIs, and application architectures with Laravel.",
    tags: ["Laravel", "PHP", "REST", "MySQL"],
  },
  {
    num: "03",
    title: "Databases & Data",
    desc: "Designing database schemas, writing efficient queries, and ensuring data integrity.",
    tags: ["MySQL", "Database Design", "SQL"],
  },
  {
    num: "04",
    title: "Creative & Content",
    desc: "Creating visual content, video editing, and managing social media campaigns.",
    tags: ["Canva", "CapCut", "Content Planning", "Photography"],
  },
];

const experience = [
  {
    period: "Sept 2024 — Feb 2025",
    role: "Software Developer Intern",
    company: "Bank Central Asia (BCA)",
  },
  {
    period: "Jan — Jun 2024",
    role: "WordPress Developer Intern",
    company: "Focus on Family Indonesia",
  },
  {
    period: "Jan 2024 — Present",
    role: "NA Facilitator & Volunteer",
    company: "Focus on Family Indonesia",
  },
  {
    period: "Nov 2023 — Dec 2024",
    role: "Creative Design",
    company: "Himpunan Mahasiswa Informatika UMN",
  },
];

const projects = [
  {
    num: "01",
    year: "2026",
    abbr: "PR",
    title: "Perfume Recommendation System",
    desc: "A perfume recommendation web application built with Laravel to help users discover fragrances that match their preferences. Implemented Forward Chaining inference method to generate recommendations based on predefined rules and user-selected criteria.",
    tags: ["Laravel", "PHP", "Forward Chaining", "MySQL"],
    link: null as string | null,
  },
  {
    num: "02",
    year: "2025",
    abbr: "TC",
    title: "TikTok Creative — @_teotalk",
    desc: "Developed creative content ideas and concepts for a TikTok account focused on making theological and Christian topics engaging and accessible. Conducted topic and trend research to create informative, audience-focused content.",
    tags: ["Content Strategy", "Video Editing", "CapCut"],
    link: null as string | null,
  },
  {
    num: "03",
    year: "2024",
    abbr: "BC",
    title: "BCA Internal Systems",
    desc: "Designed and developed a new frontend interface for internal systems at Bank Central Asia, improving user experience and website usability. Assisted in the migration of internal websites to a new system.",
    tags: ["Frontend", "UI/UX", "Web Development"],
    link: null as string | null,
  },
];

/* ─── Page ─────────────────────────────────────────── */
export default function Home() {
  const [dark, setDark] = useState(true);
  const [openExp, setOpenExp] = useState<number | null>(0);
  const [openExpItem, setOpenExpItem] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem("theme");
    setDark(t !== "light");
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const SunIcon = () => (
    <svg
      className="w-[18px] h-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const MoonIcon = () => (
    <svg
      className="w-[18px] h-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div className="relative min-h-screen">
      {/* Background glow + grain */}
      <div
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grain" />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-secondary to-accent"
        style={{ scaleX: 0 }}
      />

      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between">
          <a href="#" className="leading-none">
            <span className="font-display font-semibold lowercase tracking-[-0.02em] text-2xl">
              nataniel<span className="text-accent">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-swap text-sm tracking-wide text-text-secondary"
              >
                <span>{l.label}</span>
                <span className="dup text-accent">{l.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors overflow-hidden"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="/Nataniel_Tambayung_CV.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 text-sm text-text-primary underline-grow"
            >
              Résumé
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors overflow-hidden"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[6px] p-2"
            >
              <span
                className={`block h-px w-6 bg-text-primary transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-text-primary transition-all duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-text-secondary hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Main ─── */}
      <main className="relative z-[2]">
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-32 sm:pt-36 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between border-b border-border pb-5"
          >
            <span className="eyebrow">Portfolio — 2025</span>
            <span className="eyebrow hidden sm:block">
              Kabupaten Tangerang, Banten
            </span>
            <span className="eyebrow flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end mt-10 lg:mt-14">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h1 className="font-display font-medium leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,10rem)]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                    className="block"
                  >
                    Nataniel
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.45,
                    }}
                    className="block italic"
                  >
                    Tambayung<span className="text-accent not-italic">.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 max-w-xl"
              >
                <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                  Fullstack developer crafting reliable, scalable web
                  applications — from databases and APIs to refined, human
                  interfaces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/Nataniel_Tambayung_CV.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-3.5 text-sm text-text-primary underline-grow"
                >
                  Download CV
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-5 order-1 lg:order-2 w-2/3 sm:w-1/2 lg:w-full ml-auto lg:ml-0"
            >
              <div className="relative">
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.5,
                  }}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-surface"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg-lighter" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl text-text-muted/20 italic">
                      <img src="/portrait.jpeg" />
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </motion.div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="eyebrow">Nataniel Tambayung</span>
                  <span className="eyebrow">Est. 2023</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex items-center gap-3 eyebrow"
          >
            <span>↓</span>Scroll to explore
          </motion.div>
        </section>

        {/* Marquee */}
        <div className="border-y border-border py-6 sm:py-8 overflow-hidden">
          <div
            className="flex font-display text-3xl sm:text-5xl italic text-text-primary"
            aria-hidden="true"
          >
            <div
              className="flex w-max"
              style={{ animation: "marquee 45s linear infinite" }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center my-2">
                  {marqueeWords.map((w, i) => (
                    <span key={`${copy}-${i}`} className="flex items-center">
                      <span className="whitespace-nowrap">{w}</span>
                      <span className="mx-8 text-accent" aria-hidden="true">
                        ·
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32"
        >
          <div className="flex items-baseline gap-4 border-t border-border pt-6">
            <span className="eyebrow">(01)</span>
            <span className="eyebrow">About</span>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] tracking-[-0.01em]">
                {"I build web applications that solve real-world problems."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
                    >
                      <motion.span
                        initial={{ y: "110%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.04,
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-5 text-text-secondary leading-relaxed">
              {[
                <>
                  I&apos;m an Informatics student at Universitas Multimedia
                  Nusantara based in Tangerang, Indonesia. I&apos;ve built web
                  applications at companies like{" "}
                  <span className="text-text-primary">
                    Bank Central Asia (BCA)
                  </span>{" "}
                  and{" "}
                  <span className="text-text-primary">
                    Focus on Family Indonesia
                  </span>
                  .
                </>,
                <>
                  I enjoy building fullstack applications with{" "}
                  <span className="text-text-primary">Laravel</span> and{" "}
                  <span className="text-text-primary">React</span> — from
                  designing database schemas to crafting responsive interfaces.
                  I also create content for{" "}
                  <span className="text-text-primary">@_teotalk</span> on
                  TikTok.
                </>,
                <>
                  Whether it&apos;s developing features, designing UIs, or
                  creating content, I care most about building things that are
                  reliable and genuinely useful.
                </>,
              ].map((p, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                >
                  <p>{p}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border-b border-border md:border-b-0 md:border-r last:border-r-0 px-2 py-8"
              >
                <div className="font-display text-4xl sm:text-5xl text-text-primary">
                  {s.value}
                </div>
                <div className="eyebrow mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section
          id="expertise"
          className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32"
        >
          <div className="flex items-baseline gap-4 border-t border-border pt-6">
            <span className="eyebrow">(02)</span>
            <span className="eyebrow">Expertise</span>
          </div>

          <div className="mt-10 lg:mt-12 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] tracking-[-0.01em]">
                {"What I do".split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
                  >
                    <motion.span
                      initial={{ y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.06,
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h2>
              <p className="mt-5 text-text-secondary max-w-sm">
                A fullstack toolkit, built through internships, personal
                projects, and creative work.
              </p>
            </div>

            <div className="lg:col-span-8">
              {expertise.map((item, i) => (
                <div
                  key={item.num}
                  className="group border-t border-border last:border-b cursor-pointer"
                  onClick={() => setOpenExp(openExp === i ? null : i)}
                >
                  <div className="flex items-center gap-5 py-6">
                    <span className="eyebrow w-8 shrink-0">{item.num}</span>
                    <h3
                      className={`font-display text-2xl sm:text-4xl tracking-[-0.01em] transition-colors duration-300 ${openExp === i ? "text-accent" : "text-text-primary group-hover:text-accent"}`}
                    >
                      {item.title}
                    </h3>
                    <span className="ml-auto text-2xl text-text-muted">
                      {openExp === i ? "−" : "+"}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {openExp === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-13 sm:pl-[3.25rem] max-w-2xl">
                          <p className="text-text-secondary leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
          <div className="flex items-baseline gap-4 border-t border-border pt-6">
            <span className="eyebrow">(03)</span>
            <span className="eyebrow">Experience</span>
          </div>

          <h2 className="mt-10 font-display text-4xl sm:text-6xl leading-[1.0] tracking-[-0.01em] max-w-3xl">
            {"A short history of building.".split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
              >
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.05,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group border-t border-border last:border-b cursor-pointer"
                onClick={() => setOpenExpItem(openExpItem === i ? null : i)}
              >
                <div className="grid grid-cols-12 items-center gap-3 py-7">
                  <span className="col-span-12 sm:col-span-3 eyebrow">
                    {exp.period}
                  </span>
                  <h3 className="col-span-10 sm:col-span-7 font-display text-2xl sm:text-3xl tracking-[-0.01em] text-text-primary group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                    <span className="block text-base sm:text-lg text-text-muted font-body mt-1">
                      {exp.company}
                    </span>
                  </h3>
                  <span className="col-span-2 justify-self-end text-2xl text-text-muted">
                    {openExpItem === i ? "−" : "+"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32"
        >
          <div className="flex items-baseline gap-4 border-t border-border pt-6">
            <span className="eyebrow">(04)</span>
            <span className="eyebrow">Selected Work</span>
          </div>

          <h2 className="mt-10 font-display text-4xl sm:text-6xl leading-[1.0] tracking-[-0.01em] max-w-3xl">
            {"Things I've designed & shipped.".split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
              >
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.05,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-16 space-y-24 sm:space-y-32">
            {projects.map((proj) => (
              <motion.div
                key={proj.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-surface), var(--color-bg-lighter))",
                    }}
                  />
                  <div className="absolute inset-0 grain opacity-[0.05]" />
                  <div className="absolute -right-6 -bottom-10 select-none font-display italic text-accent/15 text-[12rem] leading-none">
                    {proj.abbr}
                  </div>
                  <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="group block">
                  <div className="flex items-center gap-4 eyebrow">
                    <span>{proj.num}</span>
                    <span className="h-px w-8 bg-border-hover" />
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl tracking-[-0.01em] text-text-primary group-hover:text-accent transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="mt-4 text-text-secondary leading-relaxed max-w-xl">
                    {proj.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-text-primary underline-grow"
                    >
                      Visit site
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32"
        >
          <div className="flex items-baseline gap-4 border-t border-border pt-6">
            <span className="eyebrow">(05)</span>
            <span className="eyebrow">Contact</span>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl sm:text-6xl leading-[1.0] tracking-[-0.01em]">
                {"Let's work together.".split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
                  >
                    <motion.span
                      initial={{ y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.05,
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h2>
              <motion.p
                {...fadeUp}
                className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed"
              >
                Have a project in mind or just want to say hi? I&apos;m always
                open to interesting conversations and collaborations.
              </motion.p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  label: "Email",
                  value: "natanieltambayung@gmail.com",
                  href: "mailto:natanieltambayung@gmail.com",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/natanieltambayung",
                  href: "https://linkedin.com/in/natanieltambayung",
                },
                {
                  label: "Phone",
                  value: "+62 857 7635 1936",
                  href: "tel:+6285776351936",
                },
                {
                  label: "CV",
                  value: "Download PDF",
                  href: "/Nataniel_Tambayung_CV.pdf",
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-border pb-4"
                >
                  <span className="eyebrow">{item.label}</span>
                  <span className="text-text-primary group-hover:text-accent transition-colors text-sm">
                    {item.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="eyebrow">Informatics Student — Tangerang, ID</span>
            <span className="eyebrow">Laravel · React · TypeScript</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
