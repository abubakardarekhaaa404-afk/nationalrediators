import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, AnimatePresence } from "motion/react";
import {
  Phone, Mail, MapPin, MessageCircle, ArrowRight, ArrowUp, Check, Star,
  Wrench, Factory, Truck, ShieldCheck, Award, Users, Settings, Zap,
  ChevronDown, Menu, X, Quote, Cog,
} from "lucide-react";

import heroImg from "@/assets/hero-radiator.jpg";
import welcome1 from "@/assets/welcome-1.jpg";
import welcome2 from "@/assets/welcome-2.jpg";
import welcome3 from "@/assets/welcome-3.jpg";
import proprietorImg from "@/assets/proprietor.jpg";
import pRadiator from "@/assets/product-radiator.jpg";
import pOilCooler from "@/assets/product-oilcooler.jpg";
import pAfterCooler from "@/assets/product-aftercooler.jpg";
import pRadFan from "@/assets/product-radiatorfan.jpg";
import pCondFan from "@/assets/product-condenserfan.jpg";
import pTank from "@/assets/product-tank.jpg";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Radiators & Oil Cooler — 50+ Years of Automotive Cooling Excellence, Pune" },
      {
        name: "description",
        content:
          "Founded 1972. Premium radiators, oil coolers, aftercoolers, condensers & custom cooling systems for automotive, industrial, generator and earthmoving applications. Manufacturing, repair & wholesale supply in Pune.",
      },
      { property: "og:title", content: "National Radiators & Oil Cooler — Pune" },
      { property: "og:description", content: "50+ years crafting premium automotive & industrial cooling systems. Radiators, oil coolers, heat exchangers & custom solutions." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "National Radiators & Oil Cooler",
          image: heroImg,
          telephone: "+91-20-24227987",
          email: "nationalradiatorsoilcooler@gmail.com",
          foundingDate: "1972",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 17, Kaka Halwai Estate Road, Near Bhapkar Petrol Pump, Parvati Industrial Estate, Parvati",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411009",
            addressCountry: "IN",
          },
          url: "https://www.nationalradiators.in/",
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "02024227987";
const PHONE_TEL = "+912024227987";
const WHATSAPP = "+912024227987";
const EMAIL = "nationalradiatorsoilcooler@gmail.com";

const products = [
  { name: "Radiators", img: pRadiator, desc: "Copper-brass & aluminium radiators engineered for automotive, industrial & heavy-duty cooling.", apps: "Cars · Trucks · Buses · Industrial" },
  { name: "Oil Coolers", img: pOilCooler, desc: "Hydraulic and engine oil coolers with high heat-rejection cores for sustained performance.", apps: "Hydraulics · Engines · Gearboxes" },
  { name: "After Coolers", img: pAfterCooler, desc: "Charge-air aftercoolers and intercoolers for turbocharged diesel and industrial engines.", apps: "Turbo · Compressors · CNG" },
  { name: "Radiator Fans", img: pRadFan, desc: "Balanced high-airflow fan assemblies built for endurance and quiet operation.", apps: "OEM · Replacement · Custom" },
  { name: "Condenser Fans", img: pCondFan, desc: "Precision-blade condenser fans for HVAC and automotive AC systems.", apps: "Auto AC · HVAC · Industrial" },
  { name: "Coolant Tanks", img: pTank, desc: "Aluminium and steel expansion tanks fabricated to OEM and custom specifications.", apps: "Cars · Trucks · Custom builds" },
];

const stats = [
  { value: 50, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: " Decades", label: "Trusted Legacy" },
  { value: 5000, suffix: "+", label: "Products Delivered" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
];

const whyChoose = [
  { icon: Award, t: "50+ Years Legacy", d: "Founded in 1972 — five decades of cooling-system mastery." },
  { icon: ShieldCheck, t: "OEM-Grade Quality", d: "Premium materials and tight tolerances on every core." },
  { icon: Cog, t: "Custom Manufacturing", d: "Bespoke radiators and coolers designed to your specs." },
  { icon: Wrench, t: "Expert Repairs", d: "Specialist rebuilds, re-coring and leak testing." },
  { icon: Truck, t: "Heavy-Vehicle Specialists", d: "Trucks, buses, earthmoving & generator sets." },
  { icon: Factory, t: "Industrial Cooling", d: "Heat exchangers and process cooling solutions." },
  { icon: Zap, t: "Fast Turnaround", d: "Quick quotes and on-time delivery across Maharashtra." },
  { icon: Users, t: "Trusted by Fleets", d: "Wholesale supply to workshops & OEM partners." },
];

const services = [
  { t: "Wholesale Supplier", d: "Bulk supply to workshops, dealers and OEMs across India." },
  { t: "Repair Workshop", d: "Re-coring, leak testing, pressure testing and rebuilds." },
  { t: "Site Work", d: "On-site repair and installation for industrial & heavy machinery." },
  { t: "Custom Manufacturing", d: "Bespoke radiators, oil coolers and heat exchangers." },
  { t: "Radiator Rebuilding", d: "Full restoration of vintage and heavy-duty radiators." },
  { t: "Pressure & Leak Testing", d: "Calibrated diagnostics with certified results." },
];

const coreValues = [
  { t: "Leading Organization", d: "Recognized as a dynamic and innovative leader in the automotive cooling industry, driving excellence across every operation." },
  { t: "Commitment to Quality", d: "An uncompromising focus on the highest standards — every product and service reflects our pursuit of perfection." },
  { t: "Quality Customer Service", d: "Dedicated, responsive support — our clients' needs are met with efficiency, care and accountability, every time." },
  { t: "Expertise in Customization", d: "Decades of know-how applied to bespoke cooling systems tailored to the unique demands of every project." },
];

const testimonials = [
  { n: "David Smith", r: "Auto Repair Shop Owner", q: "We've been sourcing radiators and oil coolers from National Radiators for years — the quality and durability are exceptional, even under the most demanding conditions." },
  { n: "Maria Gonzalez", r: "Fleet Manager", q: "Their customer service is outstanding. The team responds quickly and makes us feel like a priority every time." },
  { n: "Michael Clarke", r: "Project Manager, XYZ Industries", q: "We had a unique custom cooling requirement — they delivered beyond expectations. Professional, precise and on spec." },
  { n: "Rachel Lee", r: "Procurement Specialist", q: "A trusted partner for over a decade. Consistent quality, timely deliveries and total commitment to excellence." },
];

const industries = ["Automotive", "Construction Equipment", "Mining", "Agriculture", "Generators", "Industrial Machinery", "Marine", "Heavy Commercial Vehicles", "OEM Suppliers", "Transport Companies"];

const processSteps = ["Inquiry", "Requirement Discussion", "Design", "Manufacturing", "Quality Testing", "Delivery"];

const faqs = [
  { q: "Do you manufacture custom radiators?", a: "Yes — we design and manufacture fully custom radiators, oil coolers and heat exchangers built to your drawings, samples or thermal specifications." },
  { q: "Do you repair heavy-vehicle radiators?", a: "Absolutely. We specialise in re-coring, rebuilding, leak testing and pressure testing for trucks, buses, earthmovers and generator sets." },
  { q: "Do you offer wholesale pricing?", a: "Yes. We supply workshops, dealers and OEMs across Maharashtra and India with competitive wholesale rates." },
  { q: "What is the turnaround time?", a: "Standard repairs are typically completed in 1–3 working days. Custom manufacturing timelines depend on complexity — quoted upfront." },
  { q: "Do you provide warranty?", a: "All our manufactured products and major repairs carry a workmanship warranty. Specific terms are provided with each quote." },
  { q: "Can you deliver outside Pune?", a: "Yes — we ship across India and offer on-site service for industrial clients within Maharashtra." },
];

function useCounter(target: number, inView: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return n;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const n = useCounter(value, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-amber-gradient leading-none">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-silver/80">{label}</div>
    </div>
  );
}

function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const navLinks = [
  { h: "#home", l: "Home" },
  { h: "#about", l: "About" },
  { h: "#products", l: "Products" },
  { h: "#services", l: "Services" },
  { h: "#industries", l: "Industries" },
  { h: "#contact", l: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-light shadow-elegant" : "glass"}`}>
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <img
              src={logoAsset.url}
              alt="National Radiators & Oil Cooler Logo"
              className="h-10 w-auto shrink-0 rounded-xl"
              width={40}
              height={36}
            />
            <div className="min-w-0">
              <div className={`font-display font-black text-sm sm:text-base leading-tight truncate ${scrolled ? "text-navy-deep" : "text-white"}`}>
                NATIONAL RADIATORS
              </div>
              <div className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] ${scrolled ? "text-steel" : "text-silver/80"}`}>
                & Oil Cooler · Since 1972
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((n) => (
              <a key={n.h} href={n.h} className={`text-sm font-medium transition-colors ${scrolled ? "text-navy-deep/80 hover:text-amber" : "text-white/80 hover:text-amber"}`}>
                {n.l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-gradient px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-glow hover:scale-105 transition-transform">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button onClick={() => setOpen(true)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass-light text-navy-deep">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display font-black text-white">Menu</span>
              <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl glass text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-6">
              {navLinks.map((n) => (
                <a key={n.h} href={n.h} onClick={() => setOpen(false)} className="rounded-2xl px-5 py-4 text-lg font-semibold text-white glass">
                  {n.l}
                </a>
              ))}
              <a href={`tel:${PHONE_TEL}`} className="mt-4 rounded-2xl bg-amber-gradient px-5 py-4 text-center text-lg font-bold text-navy-deep">
                Call {PHONE}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-dvh overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium radiator inside luxury car engine bay" className="h-full w-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm text-silver">
            <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Est. 1972 · Pune, Maharashtra</span>
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] text-white text-balance">
            50+ Years of <span className="text-amber-gradient">Excellence</span> in Automotive Cooling Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-silver/90 text-balance">
            Premium radiators, oil coolers, heat exchangers and custom cooling systems — engineered for performance, built to last.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-amber-gradient px-7 py-4 text-sm font-bold text-navy-deep shadow-glow hover:scale-105 transition-transform">
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-bold text-white hover:bg-white/15 transition-colors">
              Get Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold text-white hover:bg-emerald-400 transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-12">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-silver/60 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}

function Welcome() {
  const imgs = [welcome1, welcome2, welcome3];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % imgs.length), 3500);
    return () => clearInterval(t);
  }, [imgs.length]);
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Welcome</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy-deep leading-tight text-balance">
            Welcome to <span className="text-amber-gradient">National Radiators</span>
          </h2>
          <div className="mt-6 space-y-5 text-steel text-base sm:text-lg leading-relaxed">
            <p>
              Founded in 1972, National Radiators & Oil Cooler has spent over five decades crafting world-class automotive and industrial cooling
              solutions. From a single workshop in Pune, we have grown into one of Maharashtra's most trusted names for radiators, oil coolers,
              aftercoolers, condensers and bespoke heat-exchange systems.
            </p>
            <p>
              Our work spans premium passenger cars, heavy commercial vehicles, earthmoving machinery, generators and industrial plants. Every
              core we manufacture, every assembly we rebuild, and every custom system we engineer carries the same promise — uncompromising
              quality, precision craftsmanship and a partnership you can rely on for the long road ahead.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition-colors">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-[460px] sm:h-[560px]">
            {imgs.map((src, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: active === i ? 1 : 0.4,
                  scale: active === i ? 1 : 0.92,
                  rotate: (i - 1) * 4,
                  x: (i - 1) * 40,
                  y: (i - 1) * 30,
                  zIndex: active === i ? 30 : 10 - i,
                }}
                transition={{ duration: 1, ease: [0.2, 0.7, 0.3, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-elegant border border-white/40"
              >
                <img src={src} alt={`Radiator showcase ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </motion.div>
            ))}
            <div className="absolute -bottom-6 left-6 right-6 z-40 flex justify-center gap-2">
              {imgs.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${active === i ? "w-10 bg-amber" : "w-4 bg-navy-deep/20"}`} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">About Us</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-balance">
              Engineering Trust Since <span className="text-amber-gradient">1972</span>
            </h2>
            <p className="mt-6 text-silver/90 text-lg leading-relaxed">
              For over five decades, we've built a reputation on three things — premium materials, precision craftsmanship and uncompromising service.
              From OEM supply to one-off custom builds, our team delivers cooling systems trusted by fleets, factories and workshops across India.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            { t: "Our Mission", d: "To deliver cooling solutions of uncompromising quality — engineered with precision, delivered on time, and backed by service that lasts a lifetime." },
            { t: "Our Vision", d: "To be India's most trusted partner for automotive and industrial cooling — defined by innovation, integrity and engineering excellence." },
            { t: "Our Promise", d: "Every radiator, every cooler, every custom build carries five decades of know-how — and a guarantee we stand behind." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 h-full hover-lift">
                <div className="text-amber font-display text-sm font-bold uppercase tracking-widest">{c.t}</div>
                <p className="mt-4 text-silver/90 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Why Choose Us</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">
              Built on Five Decades of Trust
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChoose.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 0.08}>
              <div className="group bg-card rounded-2xl p-7 h-full border border-border hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-gradient text-navy-deep group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{f.t}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our Products</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">
                Cooling Systems Engineered for Every Application
              </h2>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-amber transition-colors">
              Request Custom Build <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <article className="group relative overflow-hidden rounded-3xl bg-navy-deep h-[420px] shadow-elegant hover-lift">
                <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{p.apps}</div>
                  <h3 className="mt-2 font-display text-2xl font-black text-white">{p.name}</h3>
                  <p className="mt-3 text-sm text-silver/90 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                    {p.desc}
                  </p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Enquire <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our Services</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-balance">
              End-to-End Cooling Expertise
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.08}>
              <div className="glass rounded-3xl p-7 h-full hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-gradient text-navy-deep">
                  <Settings className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-silver/85 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our Core Values</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">
              What Drives Us Every Day
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {coreValues.map((v, i) => (
            <Reveal key={v.t} delay={(i % 2) * 0.1}>
              <div className="group relative bg-card rounded-3xl p-8 border border-border hover-lift overflow-hidden">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber/10 blur-2xl group-hover:bg-amber/20 transition-colors" />
                <div className="relative">
                  <div className="font-display text-5xl font-black text-amber-gradient">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{v.t}</h3>
                  <p className="mt-3 text-steel leading-relaxed">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Industries We Serve</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">
              Trusted Across Every Sector
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind} delay={i * 0.04}>
              <div className="rounded-full border-2 border-navy-deep/10 bg-card px-6 py-3 text-sm font-semibold text-navy-deep hover:border-amber hover:bg-amber/5 transition-all">
                {ind}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 sm:py-32 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our Process</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-balance">From Inquiry to Delivery</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {processSteps.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="relative glass rounded-2xl p-6 text-center h-full">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-gradient text-navy-deep font-display font-black text-lg">
                  {i + 1}
                </div>
                <div className="mt-4 font-display font-bold text-white">{step}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proprietor() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-amber-gradient rounded-3xl blur-2xl opacity-30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant border-4 border-card">
              <img src={proprietorImg} alt="Proprietor, National Radiators & Oil Cooler" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-navy-deep px-6 py-4 text-center shadow-elegant">
              <div className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">Proprietor</div>
              <div className="mt-1 font-display font-bold text-white">National Radiators</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Proprietor's Message</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep leading-tight text-balance">
              A Legacy of <span className="text-amber-gradient">Trust & Craftsmanship</span>
            </h2>
            <div className="mt-6 relative pl-6 border-l-4 border-amber">
              <Quote className="absolute -left-3 -top-2 h-6 w-6 text-amber bg-background" />
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  As the esteemed Proprietor of National Radiators & Oil Cooler, it is with great pride and gratitude that I address you today. Over
                  the past five decades, our journey has been nothing short of remarkable — marked by resilience, dedication and an unwavering
                  commitment to excellence.
                </p>
                <p>
                  National Radiators & Oil Cooler has emerged as a key player in the automotive aftermarket, specialising in radiators, oil coolers,
                  aftercoolers, condensers, radiator fans and condenser fans. Every product that leaves our workshop carries the trust of generations
                  of clients — and the promise that we will continue to earn it, every single day.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 sm:py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Testimonials</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">What Our Clients Say</h2>
          </div>
        </Reveal>

        <div className="mt-16 relative h-[340px] sm:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-elegant"
            >
              <div className="flex gap-1 text-amber">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mt-6 text-lg sm:text-xl text-navy-deep leading-relaxed italic">
                "{testimonials[i].q}"
              </p>
              <div className="mt-6">
                <div className="font-display font-bold text-navy-deep">{testimonials[i].n}</div>
                <div className="text-sm text-steel">{testimonials[i].r}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${i === k ? "w-10 bg-amber" : "w-4 bg-navy-deep/20"}`} aria-label={`Testimonial ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">FAQ</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-navy-deep text-balance">Frequently Asked Questions</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display font-semibold text-navy-deep">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-amber shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-5 text-steel leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Get In Touch</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black text-balance">
              Let's Build Your Cooling Solution
            </h2>
            <p className="mt-4 text-silver/85">Reach us at our workshop, branch or warehouse — we respond fast.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors" />
                <input required type="tel" placeholder="Phone" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors" />
              </div>
              <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors" />
              <input placeholder="Vehicle / Equipment" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors" />
              <input placeholder="Requirement (e.g. Radiator, Oil Cooler, Custom Build)" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors" />
              <textarea rows={4} placeholder="Message" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-silver/50 focus:border-amber outline-none transition-colors resize-none" />
              <button type="submit" className="w-full rounded-xl bg-amber-gradient px-6 py-4 font-bold text-navy-deep shadow-glow hover:scale-[1.02] transition-transform">
                {sent ? "✓ Thank you — we'll get back to you" : "Send Enquiry"}
              </button>
              <div className="flex flex-wrap gap-2 pt-2">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Phone className="h-4 w-4" /> Call</a>
                <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Mail className="h-4 w-4" /> Email</a>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { t: "Main Workshop", a: "Shop No. 17, Kaka Halwai Estate Road, Near Bhapkar Petrol Pump, Parvati Industrial Estate, Parvati, Pune – 411009", link: "https://maps.app.goo.gl/MmNSxCPGXWsvxrWA9" },
                { t: "Branch — Katraj", a: "Bus Depo, Narhe Ambegaon Rd, behind Katraj, near Shehnai Hall, Santosh Nagar, Katraj, Pune – 411046", link: "https://maps.google.com/?q=Bus+Depo+Narhe+Ambegaon+Rd+Katraj+Pune" },
                { t: "Warehouse — Bibwewadi", a: "No. 2/1, Gangadham – Shatrunjay Rd, behind Aai Mata Mandir, Bibwewadi, Pune – 411037", link: "https://maps.google.com/?q=Gangadham+Shatrunjay+Rd+Bibwewadi+Pune" },
              ].map((loc) => (
                <a key={loc.t} href={loc.link} target="_blank" rel="noopener" className="block glass rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-gradient text-navy-deep">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-white">{loc.t}</div>
                      <div className="mt-1 text-sm text-silver/85 leading-relaxed">{loc.a}</div>
                      <div className="mt-2 text-xs text-amber font-semibold inline-flex items-center gap-1">
                        Get Directions <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}

              <div className="glass rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber font-semibold">Phone</div>
                  <a href={`tel:${PHONE_TEL}`} className="mt-1 block font-display font-bold text-white">{PHONE}</a>
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-amber font-semibold">Email</div>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block font-display font-bold text-white text-sm truncate">{EMAIL}</a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 h-64">
                <iframe
                  title="National Radiators Location"
                  src="https://www.google.com/maps?q=Parvati+Industrial+Estate+Pune&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#06182d] text-silver/80 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="National Radiators & Oil Cooler Logo"
                className="h-10 w-auto shrink-0 rounded-xl"
                width={40}
                height={36}
              />
              <div>
                <div className="font-display font-black text-white">NATIONAL RADIATORS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-silver/60">& Oil Cooler · Since 1972</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              50+ years of premium automotive & industrial cooling solutions — radiators, oil coolers, heat exchangers and custom builds.
            </p>
          </div>

          <div>
            <div className="font-display font-bold text-white">Quick Links</div>
            <ul className="mt-5 space-y-2 text-sm">
              {navLinks.map((n) => <li key={n.h}><a href={n.h} className="hover:text-amber transition-colors">{n.l}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-white">Products</div>
            <ul className="mt-5 space-y-2 text-sm">
              {products.slice(0, 6).map((p) => <li key={p.name}><a href="#products" className="hover:text-amber transition-colors">{p.name}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-white">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-amber shrink-0" /><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-amber shrink-0" /><a href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-amber shrink-0" /><span>Parvati Industrial Estate, Pune – 411009</span></li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-amber shrink-0" /><span>Mon – Sat · 9:30 AM – 8:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-silver/60">
          <div>© {new Date().getFullYear()} National Radiators & Oil Cooler. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber">Privacy</a>
            <a href="#" className="hover:text-amber">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions({ showTop }: { showTop: boolean }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-white shadow-elegant hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={`tel:${PHONE_TEL}`} className="grid h-14 w-14 place-items-center rounded-full bg-amber-gradient text-navy-deep shadow-glow hover:scale-110 transition-transform" aria-label="Call">
        <Phone className="h-6 w-6" />
      </a>
      <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener" className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-elegant hover:scale-110 transition-transform" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 z-[60] h-1 bg-amber-gradient origin-left" />;
}

function Index() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Welcome />
      <About />
      <WhyChoose />
      <Products />
      <Services />
      <CoreValues />
      <Industries />
      <Process />
      <Proprietor />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions showTop={showTop} />
    </main>
  );
}