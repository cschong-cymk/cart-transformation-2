import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useLocation, NavLink, Link, Outlet } from "react-router-dom";
import { useId, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { Phone, Clock, X, Menu, Facebook, Instagram, Linkedin, MessageCircle, MapPin, Mail, CheckCircle2, Loader2, ArrowRight, ShieldCheck, AlertCircle, Star, TrendingUp, Headphones, Gauge, Code2, Filter, RotateCcw, ShoppingCart, Sparkles, Check, Quote, CalendarCheck, Search, Wrench, LineChart, Users, ExternalLink, Heart, Train, Car, Home as Home$1 } from "lucide-react";
const site = {
  name: "Cart Transformation",
  shortName: "CartXForm",
  tagline: "E-commerce conversion experts",
  url: "https://CartXForm.com",
  // ⚠️ HIGHEST PRIORITY — this is the single most damaging placeholder on the
  // site. It renders in the header bar, hero, footer, contact cards, CTA, and
  // schema.org. A visitor who taps a fake number is gone. `tel` = digits only
  // with country code, no spaces.
  phone: {
    display: "+65 8000 0000",
    tel: "+6580000000"
  },
  email: "hello@CartXForm.com",
  // NOTE: if Cloudflare "Email Address Obfuscation" (Scrape Shield) is on for
  // this domain, it rewrites visible emails into a script-injected blob that
  // some users and most bots can't resolve. Turn it off for the apex domain, or
  // accept that the mailto link is the reliable path.
  // Contact form POST target (PHP mailer on send.cartxform.com). Must respond
  // with CORS headers allowing this site's origin (staging AND production), and
  // a 2xx status with JSON {ok: true} on success.
  formEndpoint: "https://send.cartxform.com/send.php",
  // Full NAP — used in header, footer, contact page, and schema.org.
  address: {
    line1: "13 Lorong 8 Toa Payoh",
    unit: "#04-11, Braddell Tech",
    city: "Singapore",
    postal: "319261",
    full: "13 Lorong 8 Toa Payoh, #04-11, Braddell Tech, Singapore 319261"
  },
  serviceArea: "Singapore",
  // ⚠️ Confirm real opening hours.
  hours: [
    { days: "Mon – Fri", time: "9:00am – 6:00pm" },
    { days: "Saturday", time: "10:00am – 2:00pm" },
    { days: "Sunday", time: "Closed", closed: true }
  ],
  hoursShort: "Mon–Fri 9–6 · Sat 10–2",
  // ⚠️ Real profile URLs only. Empty string '' HIDES that icon everywhere
  // (footer + contact). Placeholders are emptied below precisely so the site
  // never ships an icon that links to a bare domain root — fill, then re-enable.
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
    whatsapp: ""
    // e.g. 'https://wa.me/6581234567'
  },
  // ⚠️ Legal registration. Empty strings HIDE the line in the footer (see
  // Footer.jsx) — far better than shipping a fake "20XXXXXXX". Fill once the
  // entity is registered. UEN is the Flowdaptor Pte. Ltd. number if Cart
  // Transformation trades under it.
  legal: {
    uen: "",
    // e.g. '202412345A'
    gst: ""
    // e.g. 'M9-1234567-8'  (omit if not GST-registered)
  },
  // Google Maps embed (query-based, no API key needed).
  mapEmbedSrc: "https://www.google.com/maps?q=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261"
};
function LogoMark({ className = "" }) {
  const uid = useId();
  const maskId = `xf-weave-${uid}`;
  const dilateId = `xf-dilate-${uid}`;
  const X2 = "M 0 0 L 0 100 L 413 100 L 798 561 L 799 569 L 628 865 L 622 879 L 873 879 L 948 746 L 953 747 L 1063 879 L 1203 879 L 1202 875 L 1008 645 L 1008 639 L 1198 303 L 1251 205 L 1008 205 L 862 460 L 859 463 L 855 463 L 465 0 Z";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "-80 -80 1800 1039",
      fill: "none",
      className,
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx("filter", { id: dilateId, x: "-30%", y: "-30%", width: "160%", height: "160%", children: /* @__PURE__ */ jsx("feMorphology", { in: "SourceAlpha", operator: "dilate", radius: "15" }) }),
          /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
            /* @__PURE__ */ jsx("rect", { x: "-80", y: "-80", width: "1800", height: "1039", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: X2, fill: "black", filter: `url(#${dilateId})` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("g", { mask: `url(#${maskId})`, fill: "currentColor", children: [
          /* @__PURE__ */ jsx("path", { d: "M 1293.0 205 L 1413.3 205 L 1035.8 879 L 915.6 879 Z" }),
          /* @__PURE__ */ jsx("path", { d: "M 1293.0 205 L 1640 205 L 1640 310 L 1234.2 310 Z" }),
          /* @__PURE__ */ jsx("path", { d: "M 1144.6 470 L 1410 470 L 1410 575 L 1085.8 575 Z" })
        ] }),
        /* @__PURE__ */ jsx("path", { d: X2, fill: "#F15A25" })
      ]
    }
  );
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Logo() {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", "aria-label": `${site.name} home`, children: [
    /* @__PURE__ */ jsx(LogoMark, { className: "h-7 w-auto text-ink" }),
    /* @__PURE__ */ jsxs("span", { className: "hidden sm:flex flex-col leading-none", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-bold text-ink", children: "Cart Transformation" }),
      /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-slate-soft", children: site.tagline })
    ] })
  ] });
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden bg-ink text-white md:block", children: /* @__PURE__ */ jsxs("div", { className: "container-x flex h-9 items-center justify-between text-[13px]", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:${site.phone.tel}`,
          className: "flex items-center gap-2 font-medium hover:text-flame-light",
          children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "text-flame" }),
            site.phone.display
          ]
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-cloud-200", children: [
        /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-mint" }),
        site.hoursShort
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `border-b transition-colors duration-300 ${scrolled ? "border-ink/10 bg-cloud-100/95 backdrop-blur-md" : "border-transparent bg-cloud"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "container-x flex h-16 items-center justify-between md:h-20", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 lg:flex", "aria-label": "Primary", children: nav.map((item) => /* @__PURE__ */ jsx(
            NavLink,
            {
              to: item.to,
              end: item.to === "/",
              className: ({ isActive }) => `relative font-display text-[15px] font-medium transition-colors ${isActive ? "text-flame" : "text-ink hover:text-flame"}`,
              children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                item.label,
                isActive && /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    layoutId: "nav-underline",
                    className: "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-flame"
                  }
                )
              ] })
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `tel:${site.phone.tel}`,
                className: "grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink md:hidden",
                "aria-label": `Call ${site.phone.display}`,
                children: /* @__PURE__ */ jsx(Phone, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-primary hidden text-sm sm:inline-flex", children: "Get a free quote" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen((v) => !v),
                className: "grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden",
                "aria-label": open ? "Close menu" : "Open menu",
                "aria-expanded": open,
                children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.25, ease: "easeOut" },
        className: "overflow-hidden border-b border-white/10 bg-ink lg:hidden",
        children: /* @__PURE__ */ jsxs("nav", { className: "container-x flex flex-col py-4", "aria-label": "Mobile", children: [
          nav.map((item) => /* @__PURE__ */ jsx(
            NavLink,
            {
              to: item.to,
              end: item.to === "/",
              className: ({ isActive }) => `border-b border-white/10 py-3 font-display text-base ${isActive ? "text-flame-light" : "text-white"}`,
              children: item.label
            },
            item.to
          )),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${site.phone.tel}`,
                className: "btn-ghost w-full border-white/20 bg-white/5 text-white hover:border-flame hover:text-flame-light",
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 16 }),
                  " Call ",
                  site.phone.display
                ]
              }
            ),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-primary w-full", children: "Get a free quote" })
          ] })
        ] })
      }
    ) })
  ] });
}
function SectionSeam({ position = "bottom", className = "" }) {
  const pos = position === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t";
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      className: `pointer-events-none absolute inset-x-0 ${pos} z-0 h-28 from-cloud to-transparent ${className}`
    }
  );
}
const socialIcons = [
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "whatsapp", Icon: MessageCircle, label: "WhatsApp" }
];
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const legalParts = [];
  const legalLine = legalParts.join(" · ");
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden bg-ink text-cloud-200", children: [
    /* @__PURE__ */ jsx(SectionSeam, { position: "top" }),
    /* @__PURE__ */ jsxs("div", { className: "container-x relative z-10 grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx(LogoMark, { className: "h-7 w-auto text-white" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-bold text-white", children: "Cart Transformation" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-cloud-200/80", children: "Conversion specialists helping Singapore e-commerce merchants recover lost carts and grow revenue." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: socialIcons.map(
          ({ key, Icon, label }) => site.socials[key] ? /* @__PURE__ */ jsx(
            "a",
            {
              href: site.socials[key],
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "grid h-9 w-9 place-items-center rounded-full bg-white/8 text-white transition-colors hover:bg-flame",
              children: /* @__PURE__ */ jsx(Icon, { size: 16 })
            },
            key
          ) : null
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-sm font-semibold uppercase tracking-wider text-white", children: "Visit us" }),
        /* @__PURE__ */ jsxs("address", { className: "mt-4 space-y-3 text-sm not-italic", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 shrink-0 text-flame" }),
            /* @__PURE__ */ jsxs("span", { children: [
              site.address.line1,
              /* @__PURE__ */ jsx("br", {}),
              site.address.unit,
              /* @__PURE__ */ jsx("br", {}),
              site.address.city,
              " ",
              site.address.postal
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:${site.phone.tel}`,
              className: "flex items-center gap-2.5 hover:text-flame-light",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 16, className: "shrink-0 text-flame" }),
                site.phone.display
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `mailto:${site.email}`,
              className: "flex items-center gap-2.5 hover:text-flame-light",
              children: [
                /* @__PURE__ */ jsx(Mail, { size: 16, className: "shrink-0 text-flame" }),
                site.email
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-sm font-semibold uppercase tracking-wider text-white", children: "Opening hours" }),
        /* @__PURE__ */ jsx("dl", { className: "mt-4 space-y-2 text-sm", children: site.hours.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-cloud-200/80", children: h.days }),
          /* @__PURE__ */ jsx(
            "dd",
            {
              className: `font-mono text-[13px] ${h.closed ? "text-cloud-200/50" : "text-white"}`,
              children: h.time
            }
          )
        ] }, h.days)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-sm font-semibold uppercase tracking-wider text-white", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-flame-light", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-flame-light", children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-flame-light", children: "Book / Get a quote" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-flame-light", children: "Privacy policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-flame-light", children: "Terms of service" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cloud-200/60 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        year,
        " ",
        site.name,
        ". Serving ",
        site.serviceArea,
        "."
      ] }),
      legalLine && /* @__PURE__ */ jsx("p", { className: "font-mono", children: legalLine })
    ] }) })
  ] });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
function Layout() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { id: "main", className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function PageTransition({ children }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: reduce ? false : { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: reduce ? { opacity: 0 } : { opacity: 0, y: -8 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: reduce ? false : { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
      children
    }
  );
}
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const images = {
  heroStore: u("photo-1460925895917-afdab827c52f"),
  // analytics dashboard on laptop
  csChong: "assets/CS.jpeg",
  mengWee: "assets/MW.jpeg",
  founder2: "assets/KC.png",
  founder3: "assets/sa.png"
};
const HONEYPOT_FIELD$1 = "website";
function HeroLeadForm() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [store, setStore] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [status, setStatus] = useState("idle");
  const emailValid = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    if (!emailValid(email)) {
      setFieldError("Enter a valid email so we can send your audit.");
      return;
    }
    setFieldError("");
    setStatus("sending");
    try {
      const cleanStore = store.trim();
      const body = new URLSearchParams({
        name: cleanStore ? `Lead — ${cleanStore}` : "Homepage hero lead",
        email: email.trim(),
        company: cleanStore,
        interest: "Free audit (homepage hero)",
        platform: "",
        revenue: "",
        message: cleanStore ? `Free audit requested from the homepage hero. Store: ${cleanStore}` : "Free audit requested from the homepage hero. No store URL provided.",
        [HONEYPOT_FIELD$1]: honeypot
      });
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body
      });
      let data = null;
      try {
        data = await res.json();
      } catch {
      }
      if (!res.ok || data && data.ok === false) {
        throw new Error((data == null ? void 0 : data.error) || `Server responded ${res.status}`);
      }
      setStatus("sent");
    } catch (err) {
      console.error("Hero lead submission failed:", err);
      setStatus("error");
    }
  };
  const inputClass = "w-full rounded-2xl border border-white/10 bg-cloud-100 px-4 py-3 text-sm text-ink placeholder:text-slate-soft/70 focus:border-flame focus-visible:ring-2 focus-visible:ring-flame/40";
  if (status === "sent") {
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: reduce ? { opacity: 0 } : { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur",
        role: "status",
        "aria-live": "polite",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 22, className: "mt-0.5 shrink-0 text-mint" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-white", children: "Request received." }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-cloud-200/80", children: [
              "We'll review your store and reply within one business day. Need a faster answer?",
              " ",
              /* @__PURE__ */ jsxs("a", { href: `tel:${site.phone.tel}`, className: "font-semibold text-flame-light underline", children: [
                "Call ",
                site.phone.display
              ] }),
              "."
            ] })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit,
      noValidate: true,
      className: "rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur",
      "aria-label": "Request a free conversion audit",
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: HONEYPOT_FIELD$1,
            value: honeypot,
            onChange: (e) => setHoneypot(e.target.value),
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            className: "absolute left-[-9999px] h-0 w-0 opacity-0"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "hero-email", className: "sr-only", children: "Work email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "hero-email",
                name: "email",
                type: "email",
                inputMode: "email",
                autoComplete: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@store.com",
                className: inputClass,
                "aria-invalid": !!fieldError,
                "aria-describedby": fieldError ? "hero-field-error" : void 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "hero-store", className: "sr-only", children: "Store website (optional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "hero-store",
                name: "store",
                type: "text",
                value: store,
                onChange: (e) => setStore(e.target.value),
                placeholder: "yourstore.com (optional)",
                className: inputClass
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "sending",
            className: "btn-primary mt-3 w-full text-base disabled:cursor-not-allowed disabled:opacity-70",
            children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }),
              " Sending…"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Get my free audit ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 flex items-center gap-1.5 text-xs text-cloud-200/70", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { size: 14, className: "text-flame-light" }),
          "Free · no obligation · reply within 1 business day"
        ] }),
        fieldError && /* @__PURE__ */ jsx("p", { id: "hero-field-error", className: "mt-2 text-xs text-flame-light", role: "alert", children: fieldError }),
        status === "error" && /* @__PURE__ */ jsxs("p", { className: "mt-2 flex items-center gap-1.5 text-xs text-flame-light", role: "alert", children: [
          /* @__PURE__ */ jsx(AlertCircle, { size: 14, className: "shrink-0" }),
          "Couldn't send — please try again or",
          " ",
          /* @__PURE__ */ jsxs("a", { href: `tel:${site.phone.tel}`, className: "font-semibold underline", children: [
            "call ",
            site.phone.display
          ] }),
          "."
        ] })
      ]
    }
  );
}
function Hero() {
  const reduce = useReducedMotion();
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-ink text-white", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-flame/30 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-flame-light/20 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container-x relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { variants: stagger, initial: "hidden", animate: "show", children: [
        /* @__PURE__ */ jsxs(motion.span, { variants: item, className: "eyebrow text-flame-light", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-flame" }),
          "E-commerce conversion · ",
          site.serviceArea
        ] }),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            variants: item,
            className: "mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl",
            children: [
              "Turn abandoned carts into your",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-transform-gradient bg-clip-text text-transparent", children: "best sales channel" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            variants: item,
            className: "mt-6 max-w-xl text-lg leading-relaxed text-cloud-200/80",
            children: "Singapore's e-commerce conversion specialists. We recover lost carts, rebuild slow checkouts, and engineer funnels that turn browsers into buyers — for Lazada, Shopee, and your own store."
          }
        ),
        /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "mt-8 max-w-xl", children: [
          /* @__PURE__ */ jsx(HeroLeadForm, {}),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${site.phone.tel}`,
                className: "btn-ghost border-white/20 bg-white/5 text-white text-base hover:border-flame hover:text-flame-light",
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 18 }),
                  " Call ",
                  site.phone.display
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/services",
                className: "text-sm font-medium text-cloud-200/70 underline-offset-4 hover:text-flame-light hover:underline",
                children: "Or browse our services →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: item,
            className: "mt-7 flex items-center gap-4 text-sm text-cloud-200/70",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, className: "fill-flame text-flame" }, i)) }),
              /* @__PURE__ */ jsx("span", { children: "Trusted by 120+ Singapore merchants" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[28px] bg-cloud-100 p-2 shadow-2xl", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "aspect-[16/11] w-full rounded-3xl bg-cover bg-center bg-transform-gradient",
                style: { backgroundImage: `url(${images.heroStore})` }
              }
            ) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: reduce ? false : { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.5, duration: 0.5 },
                className: "absolute -left-3 top-8 rounded-2xl bg-ink-700/90 px-4 py-3 shadow-lg ring-1 ring-white/10 backdrop-blur",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-mono text-[10px] uppercase tracking-wider text-cloud-200/60", children: "Before" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-0.5 font-mono text-xl font-bold text-flame-light", children: "68%" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] text-cloud-200/70", children: "carts abandoned" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: reduce ? false : { opacity: 0, x: 16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.65, duration: 0.5 },
                className: "absolute -bottom-5 right-2 rounded-2xl bg-cloud-100 px-4 py-3 text-ink shadow-xl ring-1 ring-ink/5",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-mint/15 text-mint-dark", children: /* @__PURE__ */ jsx(TrendingUp, { size: 16 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-mono text-lg font-bold leading-none text-mint-dark", children: "+S$214k" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-soft", children: "revenue recovered" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function AnimatedNumber({ value, duration = 1.4, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const didReset = useRef(false);
  const didAnimate = useRef(false);
  useEffect(() => {
    if (reduce) return;
    if (!inView) {
      didReset.current = true;
      setDisplay(0);
    }
  }, []);
  useEffect(() => {
    if (reduce || !inView || !didReset.current || didAnimate.current) return;
    didAnimate.current = true;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1e3), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);
  return /* @__PURE__ */ jsxs("span", { ref, className: "font-mono tabular-nums", children: [
    prefix,
    display,
    suffix
  ] });
}
const stats = [
  { value: 20, prefix: "", suffix: "+", display: "20+ yrs combined experience", label: "combined experience" },
  { value: 31, prefix: "+", suffix: "%", display: "+31% average lift", label: "average lift" },
  { value: 14, prefix: "", suffix: "", display: "14-day average turnaround", label: "day average turnaround" }
];
function StatBand() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-labelledby": "stat-band-heading",
      className: "relative overflow-hidden bg-ink text-white",
      children: [
        /* @__PURE__ */ jsx("h2", { id: "stat-band-heading", className: "sr-only", children: "Cart Transformation results at a glance" }),
        /* @__PURE__ */ jsxs("div", { className: "container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4", children: [
          stats.map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 0.08, className: "text-center lg:text-left", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold sm:text-4xl", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: s.display }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-flame-light", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: s.value, prefix: s.prefix, suffix: s.suffix }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-cloud-200/70", "aria-hidden": "true", children: s.label })
          ] }, s.label)),
          /* @__PURE__ */ jsxs(Reveal, { delay: 3 * 0.08, className: "text-center lg:text-left", children: [
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-flame-light sm:text-4xl", children: "Free" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-cloud-200/70", children: "audit — no obligation" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(SectionSeam, { position: "bottom" })
      ]
    }
  );
}
const iconMap = {
  ShoppingCart,
  RotateCcw,
  Filter,
  Code2,
  Gauge,
  Headphones
};
function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Sparkles;
  const isFree = /free/i.test(service.price);
  return (
    // Inherits the improved .card (cloud-50 surface, 16px radius, ink/8 ring).
    /* @__PURE__ */ jsxs("article", { className: "card group flex flex-col hover:-translate-y-1 hover:shadow-cardHover", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-flame/10 text-flame transition-colors group-hover:bg-flame-dark group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 2 }) }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `rounded-full px-3 py-1 font-mono text-xs font-bold ${isFree ? "bg-mint/15 text-mint-dark" : "bg-cloud-200 text-ink"}`,
            children: service.price
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-bold text-ink", children: service.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-slate-soft", children: service.summary }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2", children: service.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-slate-ink", children: [
        /* @__PURE__ */ jsx(Check, { size: 16, className: "mt-0.5 shrink-0 text-mint-dark" }),
        p
      ] }, p)) }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contact",
          className: "mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-flame transition-colors hover:text-flame-dark",
          children: [
            "Request this service ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
          ]
        }
      )
    ] })
  );
}
function TestimonialCard({ t }) {
  return (
    // Inherits the improved .card surface.
    /* @__PURE__ */ jsxs("figure", { className: "card flex h-full flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "flex", "aria-label": "5 out of 5 stars", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, className: "fill-flame text-flame" }, i)) }),
        /* @__PURE__ */ jsx(Quote, { size: 22, className: "text-flame/20" })
      ] }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 flex-1 text-[15px] leading-relaxed text-slate-ink", children: [
        "“",
        t.quote,
        "”"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-mint/12 px-3 py-1 font-mono text-xs font-bold text-mint-dark", children: t.metric }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 flex items-center gap-3 border-t border-ink/5 pt-4", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-ink-700 font-display text-sm font-bold text-white", children: t.name.charAt(0) }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: t.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-soft", children: [
            t.business,
            " · ",
            t.location
          ] })
        ] })
      ] })
    ] })
  );
}
function CTASection({
  heading = "Ready to recover the revenue slipping through your checkout?",
  sub = "Get a free, no-obligation conversion audit. We’ll show you exactly where you’re losing sales — and what to fix first."
}) {
  return /* @__PURE__ */ jsx("section", { className: "bg-cloud py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxs(Reveal, { className: "relative overflow-hidden rounded-[32px] bg-ink px-7 py-14 text-center text-white md:px-16", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/30 blur-[100px]"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-flame-light/20 blur-[100px]"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold leading-tight sm:text-4xl", children: heading }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-cloud-200/80", children: sub }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary text-base", children: [
          /* @__PURE__ */ jsx(CalendarCheck, { size: 18 }),
          " Book free audit ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${site.phone.tel}`,
            className: "btn-ghost border-white/20 bg-white/5 text-base text-white hover:border-flame hover:text-flame-light",
            children: [
              /* @__PURE__ */ jsx(Phone, { size: 18 }),
              " ",
              site.phone.display
            ]
          }
        )
      ] })
    ] })
  ] }) }) });
}
const faqs = [
  {
    q: "How is pricing structured?",
    a: "Most projects are fixed-scope with a clear quote up front. Recovery and CX work runs monthly. We always start with a free audit so you know the expected return before committing."
  },
  {
    q: "Do you work with Shopify, WooCommerce, and marketplaces?",
    a: "Yes. We work across WooCommerce, Shopify, and native Lazada and Shopee storefronts, and we connect them so stock, orders, and pricing stay in sync."
  },
  {
    q: "How fast will I see results?",
    a: "Checkout and recovery fixes often show measurable lift within the first 2 to 4 weeks. Most clients hit positive ROI within 30 days, and larger funnel rebuilds compound over a quarter."
  },
  {
    q: "Are you based in Singapore?",
    a: "Yes. Our studio is in Braddell Tech, Toa Payoh. We understand local payment habits, delivery options, and buyer behaviour first-hand."
  }
];
const testimonials = [
  {
    quote: "Our abandoned-cart revenue went from an afterthought to a real channel. The WhatsApp recovery flow alone paid for the project in the first month.",
    name: "Sarah M.",
    location: "Tampines",
    business: "Skincare brand",
    metric: "+31% recovered revenue"
  },
  {
    quote: "They rebuilt our checkout from five screens to one. Mobile conversions jumped almost overnight and our drop-off at payment basically disappeared.",
    name: "Daniel T.",
    location: "Bukit Timah",
    business: "Home & living store",
    metric: "−42% checkout drop-off"
  },
  {
    quote: "The free audit was more useful than the paid work we had done elsewhere. Clear, honest, and they fixed the highest-impact issues first.",
    name: "Priya R.",
    location: "Jurong East",
    business: "Fashion boutique",
    metric: "+18% conversion rate"
  },
  {
    quote: "Our WooCommerce store finally syncs cleanly with Shopee and Lazada. No more double-entry, no more oversold stock. Worth every dollar.",
    name: "Marcus L.",
    location: "Toa Payoh",
    business: "Electronics reseller",
    metric: "12 hrs/week saved"
  },
  {
    quote: "Genuinely local team that picks up the phone. They understood PayNow, GrabPay, and SG buyer habits without us having to explain.",
    name: "Wei Ling C.",
    location: "Ang Mo Kio",
    business: "Specialty foods",
    metric: "+27% repeat orders"
  },
  {
    quote: "Support used to be a cost. Now it closes sales. The live-chat and returns workflow they set up made our small team feel twice the size.",
    name: "Aisyah B.",
    location: "Serangoon",
    business: "Kids & baby store",
    metric: "−35% refund rate"
  }
];
function JsonLd({ data }) {
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(data) }) });
}
function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  return /* @__PURE__ */ jsx(JsonLd, { data });
}
function ReviewSchema() {
  return null;
}
const services = [
  {
    slug: "checkout-optimization",
    icon: "ShoppingCart",
    title: "Checkout Optimization",
    price: "Starting at S$1,500",
    summary: 'Trim every needless field and tap between "Add to cart" and "Order placed". We rebuild your checkout to load fast, support local payment and delivery options, and stop drop-off at the final step.',
    points: [
      "One-page and express checkout flows",
      "Local payment rails (PayNow, GrabPay, cards)",
      "Guest checkout and address autofill"
    ]
  },
  {
    slug: "cart-recovery",
    icon: "RotateCcw",
    title: "Cart Abandonment Recovery",
    price: "Starting at S$900 / month",
    summary: "Win back shoppers who left items behind. We set up timed email, SMS, and WhatsApp flows that bring buyers back with the right nudge — without nagging them into unsubscribing.",
    points: [
      "Three-stage recovery sequences",
      "WhatsApp and SMS reminders",
      "Dynamic discounts that protect margin"
    ]
  },
  {
    slug: "funnel-engineering",
    icon: "Filter",
    title: "Sales Funnel Engineering",
    price: "Free audit",
    summary: "Map the full journey from first click to repeat order. We find where revenue leaks between landing page, product page, and cart, then fix the steps that lose the most buyers first.",
    points: [
      "Landing-to-cart journey mapping",
      "Upsell and cross-sell placement",
      "Post-purchase retention loops"
    ]
  },
  {
    slug: "woocommerce-development",
    icon: "Code2",
    title: "WooCommerce Development",
    price: "Starting at S$2,500",
    summary: "Custom WooCommerce stores built for speed and built to scale. From a clean migration to bespoke integrations with your logistics, accounting, and marketplace tools — we handle the engineering.",
    points: [
      "Custom themes and headless builds",
      "Lazada / Shopee / marketplace sync",
      "Speed and Core Web Vitals tuning"
    ]
  },
  {
    slug: "conversion-audit",
    icon: "Gauge",
    title: "Conversion Rate Audit",
    price: "Free estimate",
    summary: "A clear, prioritized report on what is costing you sales. We pair analytics with session recordings and heatmaps to show exactly where shoppers hesitate — and what to change first.",
    points: [
      "Heatmaps and session recordings",
      "Analytics and funnel diagnostics",
      "Prioritized fix list with impact estimates"
    ]
  },
  {
    slug: "ecommerce-cx",
    icon: "Headphones",
    title: "E-commerce CX & Support",
    price: "Custom plans",
    summary: "Turn support into a sales channel. We build live chat, helpdesk, and post-sale workflows that answer buyers quickly, reduce refunds, and keep customers coming back.",
    points: [
      "Live chat and helpdesk setup",
      "Order, returns, and refund workflows",
      "Trained support playbooks"
    ]
  }
];
const BRAND = "Cart Transformation";
const SITE = "https://CartXForm.com";
const DEFAULT_DESC = "Cart Transformation helps Singapore e-commerce merchants recover abandoned carts, optimize checkout, and grow revenue. Book a free conversion audit today.";
function Seo({ title, description }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${BRAND}` : `${BRAND} | E-commerce Conversion Experts in Singapore`;
  const desc = description || DEFAULT_DESC;
  const url = `${SITE}${pathname === "/" ? "" : pathname}`;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: desc }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: desc }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: url })
  ] });
}
const steps = [
  {
    icon: Search,
    title: "Audit",
    body: "We dig into your analytics, session recordings, and checkout to find exactly where buyers drop off — and why. No guesswork, no generic advice."
  },
  {
    icon: Wrench,
    title: "Transform",
    body: "We fix the highest-impact leaks first — checkout friction, recovery flows, and funnel gaps. You see results before the month is out."
  },
  {
    icon: LineChart,
    title: "Grow",
    body: "We measure the lift, then keep optimizing. Most clients see positive ROI within 30 days — and from there it compounds."
  }
];
function Home() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "E-commerce Conversion Experts in Singapore",
        description: "Recover abandoned carts, optimize checkout, and grow revenue. Free conversion audit for Singapore e-commerce merchants on Lazada, Shopee, and WooCommerce."
      }
    ),
    /* @__PURE__ */ jsx(ReviewSchema, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(StatBand, {}),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "What we do" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Conversion services built for SE-Asian commerce" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-soft", children: "Every engagement starts with the same question: where are you losing sales, and what's the fastest way to win them back?" })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/services",
            className: "inline-flex shrink-0 items-center gap-1.5 font-display font-semibold text-flame hover:text-flame",
            children: [
              "View all services ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.slice(0, 6).map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsx(ServiceCard, { service: s }) }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-ink py-16 text-white md:py-24", children: [
      /* @__PURE__ */ jsx(SectionSeam, { position: "top" }),
      /* @__PURE__ */ jsxs("div", { className: "container-x relative z-10", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-flame-light", children: "How it works" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl", children: "A simple path from leaking to leading" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: steps.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl bg-ink-700/60 p-7 ring-1 ring-white/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm text-flame-light", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-transform-gradient", children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-bold", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-cloud-200/75", children: s.body })
        ] }) }, s.title)) })
      ] }),
      /* @__PURE__ */ jsx(SectionSeam, { position: "bottom" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Proof" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Local merchants, real results" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-soft", children: "Five-star reviews from store owners across Singapore." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsx(TestimonialCard, { t }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "E-commerce Services & Pricing",
        description: "Checkout optimization, cart abandonment recovery, WooCommerce development, and conversion audits for Singapore e-commerce stores."
      }
    ),
    /* @__PURE__ */ jsx(FaqSchema, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-ink py-16 text-white md:py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "container-x relative z-10", children: /* @__PURE__ */ jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-flame-light", children: "Services" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: "Everything you need to convert more shoppers" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg text-cloud-200/80", children: "From a free audit to a full store rebuild — pick where you're losing the most revenue, and we'll start there." })
      ] }) }),
      /* @__PURE__ */ jsx(SectionSeam, { position: "bottom" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsx(ServiceCard, { service: s }) }, s.slug)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-cloud py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Questions, answered" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-soft", children: "Still unsure? Call us — we're happy to talk through your store before you commit to anything." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-ink/8", children: faqs.map((f, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("details", { className: "group py-5", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink", children: [
          f.q,
          /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-slate-soft transition-transform group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-slate-soft", children: f.a })
      ] }) }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
const team = [
  {
    name: "CS Chong",
    role: "CEO · Co-Founder",
    img: images.csChong,
    url: "",
    bio: "Solutions architect behind every conversion system we deploy. Leads scoping and turns messy problems into production-ready automations."
  },
  {
    name: "Meng Wee Tan",
    role: "Co-Founder · Engineering",
    img: images.mengWee,
    url: "",
    bio: "Two decades across enterprise software, fintech, and AI. Builds the checkout and recovery infrastructure that works in production, not just in demos."
  },
  {
    name: "Kevin Chua",
    role: "Project Director",
    img: images.founder2,
    url: "",
    bio: "15+ years in technology programme management and digital transformation. Keeps every engagement on track from scoping to go-live."
  },
  {
    name: "Sarah Nguyen",
    role: "E-commerce Lead",
    img: images.founder3,
    url: "",
    bio: "Ten years building and operating e-commerce businesses from the merchant side. She knows what a broken checkout costs because she has lived it."
  }
];
const values = [
  {
    icon: MapPin,
    title: "Local first",
    body: "Born and run in Singapore. We know PayNow, GrabPay, WhatsApp commerce, and how SE-Asian shoppers actually buy — without needing it explained."
  },
  {
    icon: ShieldCheck,
    title: "No fluff, no lock-in",
    body: "Plain reporting, honest scopes, and work you own outright. We earn the next project by doing good work, never by trapping you in a retainer you don’t need."
  },
  {
    icon: Heart,
    title: "Invested in your numbers",
    body: "We treat your conversion rate like our own. If a fix won’t move real revenue, we won’t sell it to you. The audit is free precisely because we want to be honest before we start."
  }
];
function About() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "About Us — Local E-commerce Conversion Studio",
        description: "Meet Cart Transformation — Singapore's e-commerce conversion specialists. A Flowdaptor venture, built by people who've been merchants themselves."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx(Users, { size: 14 }),
          " Our story"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl", children: "Built by people who’ve been the merchant" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-slate-soft", children: "Cart Transformation grew out of a simple observation: most agencies fix the ads and forget the checkout. We kept seeing the same fixable problems across Singapore's stores — clunky checkouts, silent abandoned carts, revenue quietly leaking at the final step — so we built a studio to fix the part that actually closes the sale." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-slate-soft", children: "We're small, senior, and close to the work — the person who audits your store is the person who fixes it. No account managers, no hand-offs, no junior teams running your work while the seniors take the credit." }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary mt-8", children: [
          "Work with us ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: team.slice(0, 4).map((m) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "aspect-square w-full rounded-2xl bg-cloud-200 bg-cover bg-center shadow-card ring-1 ring-ink/5",
            style: { backgroundImage: `url(${m.img})` },
            role: "img",
            "aria-label": `${m.name}, ${m.role}`
          },
          m.name
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-6 hidden rounded-2xl bg-cloud-50 p-5 shadow-xl ring-1 ring-ink/8 sm:block", children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-3xl font-bold text-flame", children: "2026" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-soft", children: "a Flowdaptor venture" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-cloud py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container-x max-w-3xl", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "A Flowdaptor venture" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Engineering rigour, pointed at one problem" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 leading-relaxed text-slate-soft", children: [
        "Cart Transformation is a specialist brand from",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-ink", children: "Flowdaptor" }),
        ", a Singapore-based AI automation studio. Where Flowdaptor builds the infrastructure that makes businesses run on AI, Cart Transformation applies that same rigour to one specific problem: the revenue merchants lose between “add to cart” and “order placed”."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-slate-soft", children: "The combination is deliberate — first-hand merchant experience paired with production-grade automation, aimed squarely at cart recovery, checkout optimization, and conversion funnels. Not demos. Things that hold up in production, on real stores, with real traffic." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://flowdaptor.ai",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-flame hover:text-flame-dark",
          children: [
            "Visit Flowdaptor ",
            /* @__PURE__ */ jsx(ExternalLink, { size: 15 })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "What we stand for" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Principles that keep us honest" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: values.map((v, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "card h-full", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-flame/10 text-flame", children: /* @__PURE__ */ jsx(v.icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-bold text-ink", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-slate-soft", children: v.body })
      ] }) }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-cloud py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Meet the team" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Senior people, no hand-offs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-soft", children: "A small team that does the work itself — and answers the phone when you call." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: team.map((m, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("article", { className: "card flex h-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "aspect-square w-full rounded-xl bg-cloud-200 bg-cover bg-center",
            style: { backgroundImage: `url(${m.img})` },
            role: "img",
            "aria-label": m.name
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-bold text-ink", children: m.name }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-wide text-slate-soft", children: m.role }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-slate-soft", children: m.bio }),
        m.url && /* @__PURE__ */ jsxs(
          "a",
          {
            href: m.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-flame hover:text-flame-dark",
            children: [
              "Profile ",
              /* @__PURE__ */ jsx(ExternalLink, { size: 13 })
            ]
          }
        )
      ] }) }, m.name)) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-2xl bg-flame/8 p-8 ring-1 ring-flame/10 md:p-10", children: [
        /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-display text-xl font-bold text-ink", children: [
          /* @__PURE__ */ jsx(Heart, { size: 20, className: "text-flame" }),
          " In the community"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-slate-soft", children: "We run free monthly conversion clinics for early-stage SG sellers, mentor at local maker markets, and share what we learn openly with the merchant community. Helping small stores win is the whole point." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTASection,
      {
        heading: "Let's grow your store together",
        sub: "Book a friendly, no-pressure call. We'll look at your store and tell you honestly where the biggest wins are."
      }
    )
  ] });
}
function MapSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-cloud py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
        /* @__PURE__ */ jsx(MapPin, { size: 14 }),
        " Find us"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-ink sm:text-4xl", children: "Drop by our Braddell Tech studio" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-soft", children: "Centrally located in Toa Payoh — easy to reach by MRT or car. Book ahead and we'll have coffee ready for your strategy session." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: `Map to ${site.name}`,
          src: site.mapEmbedSrc,
          className: "h-[340px] w-full md:h-[440px]",
          style: { border: 0 },
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          allowFullScreen: true
        }
      ) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-display text-lg font-bold text-ink", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-flame" }),
            " Address"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-relaxed text-slate-ink", children: [
            site.address.line1,
            /* @__PURE__ */ jsx("br", {}),
            site.address.unit,
            /* @__PURE__ */ jsx("br", {}),
            site.address.city,
            " ",
            site.address.postal
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: site.mapLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-flame hover:text-flame",
              children: [
                "Open in Google Maps ",
                /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Train, { size: 18, className: "mt-0.5 shrink-0 text-flame" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-ink", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "By MRT:" }),
              " 12–15 min walk from Braddell (NS9) station."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Car, { size: 18, className: "mt-0.5 shrink-0 text-flame" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-ink", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "Parking:" }),
              " Visitor lots in Braddell Tech (B1–B2). Take lift to Level 4, turn left for #04-11."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Clock, { size: 18, className: "mt-0.5 shrink-0 text-flame" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-ink", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "Visits:" }),
              " By appointment —",
              " ",
              site.hoursShort,
              "."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const initial = { name: "", email: "", phone: "", store: "", service: "", platform: "", revenue: "", message: "" };
const platforms = ["WooCommerce", "Shopify", "Lazada", "Shopee", "SiteGiant", "Other"];
const revenueBands = [
  "Under S$10,000 / month",
  "S$10,000 – S$50,000 / month",
  "S$50,000 – S$200,000 / month",
  "Over S$200,000 / month",
  "Prefer not to say"
];
const HONEYPOT_FIELD = "website";
function Contact() {
  const [form, setForm] = useState(initial);
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.message.trim()) er.message = "Tell us a little about your store";
    setErrors(er);
    return Object.keys(er).length === 0;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        company: form.store,
        interest: form.service,
        platform: form.platform,
        revenue: form.revenue,
        message: form.message,
        website: honeypot
      });
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body
      });
      let data = null;
      try {
        data = await res.json();
      } catch {
      }
      if (!res.ok || data && data.ok === false) {
        throw new Error((data == null ? void 0 : data.error) || `Server responded ${res.status}`);
      }
      setSent(true);
      setStatus("idle");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };
  const field = "w-full rounded-2xl border border-ink/12 bg-cloud-100 px-4 py-3 text-sm text-ink placeholder:text-slate-soft/70 focus:border-flame focus-visible:ring-2 focus-visible:ring-flame/40";
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "Contact — Book a Free Conversion Audit", description: "Request a free quote or book a conversion audit. Call, WhatsApp, or visit our Braddell Tech studio in Toa Payoh, Singapore." }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-ink py-16 text-white md:py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "container-x relative z-10", children: /* @__PURE__ */ jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "eyebrow text-flame-light", children: [
          /* @__PURE__ */ jsx(CalendarCheck, { size: 14 }),
          " Book · Quote · Call"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: "Let's find your hidden revenue" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg text-cloud-200/80", children: "Tell us about your store and we'll come back within one business day to arrange a 20-minute call — no sales pitch, just an honest look at where you're losing sales and what to fix first. Prefer to talk now? Just call." })
      ] }) }),
      /* @__PURE__ */ jsx(SectionSeam, { position: "bottom" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-[1.3fr_0.7fr]", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "card", children: sent ? /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          className: "flex flex-col items-center py-12 text-center",
          children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 56, className: "text-mint-dark" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-5 text-2xl font-bold text-ink", children: "Request received" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-md text-slate-soft", children: [
              "Thanks, ",
              form.name.split(" ")[0],
              ". We'll review your store and reply within one business day. Need a faster answer? Call us at",
              " ",
              /* @__PURE__ */ jsx("a", { href: `tel:${site.phone.tel}`, className: "font-semibold text-flame", children: site.phone.display }),
              "."
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setForm(initial);
                  setHoneypot("");
                  setStatus("idle");
                  setSent(false);
                },
                className: "btn-ghost mt-7",
                children: "Send another request"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxs("form", { onSubmit, noValidate: true, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: HONEYPOT_FIELD,
            value: honeypot,
            onChange: (e) => setHoneypot(e.target.value),
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            className: "absolute left-[-9999px] h-0 w-0 opacity-0"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-ink", children: "Request a free quote" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-soft", children: "No obligation. Fields marked with * are required." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-1", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "mb-1.5 block text-sm font-medium text-ink", children: "Name *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                name: "name",
                value: form.name,
                onChange: update,
                className: field,
                placeholder: "Your name",
                autoComplete: "name"
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-flame-dark", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "mb-1.5 block text-sm font-medium text-ink", children: "Email *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                value: form.email,
                onChange: update,
                className: field,
                placeholder: "you@store.com",
                autoComplete: "email"
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-flame-dark", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "mb-1.5 block text-sm font-medium text-ink", children: "Phone" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "phone",
                name: "phone",
                value: form.phone,
                onChange: update,
                className: field,
                placeholder: "+65 …",
                autoComplete: "tel"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "store", className: "mb-1.5 block text-sm font-medium text-ink", children: "Store website" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "store",
                name: "store",
                value: form.store,
                onChange: update,
                className: field,
                placeholder: "yourstore.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "service", className: "mb-1.5 block text-sm font-medium text-ink", children: "What do you need help with?" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "service",
                name: "service",
                value: form.service,
                onChange: update,
                className: field,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select a service…" }),
                  services.map((s) => /* @__PURE__ */ jsx("option", { value: s.title, children: s.title }, s.slug)),
                  /* @__PURE__ */ jsx("option", { value: "Not sure", children: "Not sure yet" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "platform", className: "mb-1.5 block text-sm font-medium text-ink", children: "Your platform" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "platform",
                name: "platform",
                value: form.platform,
                onChange: update,
                className: field,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select one…" }),
                  platforms.map((p) => /* @__PURE__ */ jsx("option", { value: p, children: p }, p))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "revenue", className: "mb-1.5 block text-sm font-medium text-ink", children: "Approximate monthly revenue" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "revenue",
                name: "revenue",
                value: form.revenue,
                onChange: update,
                className: field,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select range…" }),
                  revenueBands.map((r) => /* @__PURE__ */ jsx("option", { value: r, children: r }, r))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "mb-1.5 block text-sm font-medium text-ink", children: "Tell us about your store *" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                value: form.message,
                onChange: update,
                rows: 4,
                className: field,
                placeholder: "Platform, monthly orders, and where you think you're losing sales…"
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-flame-dark", children: errors.message })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "sending",
            className: "btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
            children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }),
              " Sending…"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CalendarCheck, { size: 18 }),
              " Request my free audit"
            ] })
          }
        ),
        status === "error" && /* @__PURE__ */ jsxs("p", { className: "mt-4 flex items-start gap-2 rounded-2xl bg-flame/8 p-3 text-sm text-flame-dark ring-1 ring-flame/15", children: [
          /* @__PURE__ */ jsx(AlertCircle, { size: 16, className: "mt-0.5 shrink-0" }),
          "Something went wrong sending your request. Please try again, or call us directly at",
          " ",
          /* @__PURE__ */ jsx("a", { href: `tel:${site.phone.tel}`, className: "font-semibold underline", children: site.phone.display }),
          "."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxs("a", { href: `tel:${site.phone.tel}`, className: "card flex items-center gap-4 hover:shadow-cardHover", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-flame/12 text-flame-dark", children: /* @__PURE__ */ jsx(Phone, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-soft", children: "Call us" }),
            /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink", children: site.phone.display })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: site.socials.whatsapp,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "card flex items-center gap-4 hover:shadow-cardHover",
            children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-mint/15 text-mint-dark", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-soft", children: "WhatsApp" }),
                /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink", children: "Chat with us" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: `mailto:${site.email}`, className: "card flex items-center gap-4 hover:shadow-cardHover", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-flame/12 text-flame", children: /* @__PURE__ */ jsx(Mail, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-soft", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink", children: site.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-display font-bold text-ink", children: [
            /* @__PURE__ */ jsx(Clock, { size: 18, className: "text-flame" }),
            " Opening hours"
          ] }),
          /* @__PURE__ */ jsx("dl", { className: "mt-3 space-y-2 text-sm", children: site.hours.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-slate-soft", children: h.days }),
            /* @__PURE__ */ jsx("dd", { className: `font-mono ${h.closed ? "text-slate-soft/60" : "text-ink"}`, children: h.time })
          ] }, h.days)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-display font-bold text-ink", children: [
            /* @__PURE__ */ jsx(CalendarCheck, { size: 18, className: "text-flame" }),
            " What happens next"
          ] }),
          /* @__PURE__ */ jsxs("ol", { className: "mt-3 space-y-3 text-sm text-slate-soft", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "Within 1 business day" }),
              " — we reply to confirm a 20-minute call time that suits you."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "On the call" }),
              " — we ask for read access to your analytics and look at your store live."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "Within 3–5 days" }),
              " — you receive a clear, prioritised report showing where you're losing sales and what to fix first."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink", children: "Your choice" }),
              " — act on the report yourself, or let us fix it. No pressure either way."
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MapSection, {})
  ] });
}
function Privacy() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "Privacy Policy", description: "How Cart Transformation collects and uses your personal data under the Singapore PDPA." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Legal" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold text-ink", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-slate-soft", children: "Last updated: June 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "prose mt-8 space-y-6 text-slate-ink", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-slate-soft", children: [
          site.name,
          " (“we”, “us”, “our”) is a venture of Flowdaptor Pte. Ltd., registered in Singapore. We are committed to protecting your personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore."
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "1. Data we collect" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "When you use our website or contact us, we may collect:" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-slate-soft", children: [
            /* @__PURE__ */ jsx("li", { children: "Name, email address, phone number" }),
            /* @__PURE__ */ jsx("li", { children: "Business name and website URL" }),
            /* @__PURE__ */ jsx("li", { children: "Information you provide in enquiry forms" }),
            /* @__PURE__ */ jsx("li", { children: "Analytics data (page views, referral source) via anonymised tools" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We do not collect payment card details. Any payment processing is handled by third-party providers." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "2. How we use your data" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-slate-soft", children: [
            /* @__PURE__ */ jsx("li", { children: "To respond to enquiries and deliver agreed services" }),
            /* @__PURE__ */ jsx("li", { children: "To send you project updates and invoices" }),
            /* @__PURE__ */ jsx("li", { children: "To improve our website and service quality" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We do not sell, rent, or share your personal data with third parties for marketing purposes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "3. Data retention" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We retain personal data only as long as necessary to fulfil the purpose for which it was collected, or as required by law. Client project data is retained for 7 years for accounting and legal compliance. Enquiry data from non-clients is deleted after 12 months if no engagement follows." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "4. Your rights under the PDPA" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "You have the right to:" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-slate-soft", children: [
            /* @__PURE__ */ jsx("li", { children: "Request access to the personal data we hold about you" }),
            /* @__PURE__ */ jsx("li", { children: "Request correction of inaccurate data" }),
            /* @__PURE__ */ jsx("li", { children: "Withdraw consent for data use (subject to legal obligations)" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-slate-soft", children: [
            "To exercise these rights, email us at",
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${site.email}`, className: "font-semibold text-flame", children: site.email }),
            ". We will respond within 30 days."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "5. Cookies" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "Our website uses minimal cookies for analytics purposes only. We do not use advertising or tracking cookies. You can disable cookies in your browser settings without affecting site functionality." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "6. Third-party services" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We do not currently use any third-party services that process data. However, this may change in the future." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "7. Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-slate-soft", children: [
            "For any privacy-related questions, contact our Data Protection Officer at",
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${site.email}`, className: "font-semibold text-flame", children: site.email }),
            ". ",
            site.name,
            ", ",
            site.address.full,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-soft", children: "This policy may be updated from time to time. The “last updated” date at the top of this page reflects the most recent revision. Continued use of our website constitutes acceptance of the current policy." })
      ] })
    ] }) })
  ] });
}
function Terms() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "Terms of Service", description: "Terms of service for Cart Transformation e-commerce conversion services in Singapore." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Legal" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold text-ink", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-slate-soft", children: "Last updated: June 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-slate-soft", children: [
          "These terms govern your use of the ",
          site.name,
          " website and any services provided by Flowdaptor Pte. Ltd. (“we”, “us”, “our”) trading as ",
          site.name,
          ". By engaging our services or using our website, you agree to these terms."
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "1. Services" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We provide e-commerce conversion optimisation services including audits, checkout optimisation, cart abandonment recovery, sales funnel engineering, WooCommerce development, and CX support. The specific scope, deliverables, and pricing of each engagement are set out in a separate Statement of Work or quotation agreed between the parties before work begins." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "2. Free audit" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "The free conversion audit is provided at no cost and with no obligation to purchase further services. We reserve the right to decline audit requests at our discretion. Audit findings are provided for informational purposes only and do not constitute a guarantee of results." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "3. Payment terms" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-slate-soft", children: [
            /* @__PURE__ */ jsx("li", { children: "Fixed-scope projects: 50% deposit required before work begins; balance due on completion" }),
            /* @__PURE__ */ jsx("li", { children: "Monthly retainers: invoiced in advance at the start of each month" }),
            /* @__PURE__ */ jsx("li", { children: "All prices are in Singapore Dollars (SGD) and subject to GST where applicable" }),
            /* @__PURE__ */ jsx("li", { children: "Payment is due within 14 days of invoice date" }),
            /* @__PURE__ */ jsx("li", { children: "Late payments may incur interest at 1.5% per month" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "4. Cancellation and refunds" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "Monthly retainers may be cancelled with 30 days’ written notice. No refunds are issued for work already completed. For fixed-scope projects, the deposit is non-refundable if work has commenced. If we are unable to complete agreed work due to our own fault, we will refund fees paid for incomplete work." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "5. Intellectual property" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "On full payment, all custom work product created for you becomes your property. We retain the right to use general methodologies, frameworks, and non-client-specific know-how developed during engagements. We may reference your business as a client in our marketing materials unless you request otherwise in writing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "6. Confidentiality" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We treat all client information as confidential. We will not disclose your business data, analytics, or commercially sensitive information to third parties without your consent, except where required by law." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "7. Limitation of liability" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "Our liability for any claim arising from our services is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect, consequential, or speculative losses including lost revenue or lost profits. We do not guarantee specific conversion rate improvements — results depend on many factors outside our control including your product, pricing, and market conditions." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "8. Governing law" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "These terms are governed by the laws of Singapore. Any disputes shall be subject to the exclusive jurisdiction of the Singapore courts." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "9. Changes to these terms" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-soft", children: "We may update these terms from time to time. Continued use of our services constitutes acceptance of the current terms." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-ink", children: "10. Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-slate-soft", children: [
            "Questions? Email",
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${site.email}`, className: "font-semibold text-flame", children: site.email }),
            " ",
            "or call ",
            site.phone.display,
            ". ",
            site.name,
            ", ",
            site.address.full,
            "."
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx(Seo, { title: "Page Not Found", description: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx("section", { className: "grid min-h-[60vh] place-items-center py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-7xl font-bold text-flame/30", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold text-ink", children: "This cart wandered off" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-md text-slate-soft", children: "The page you're looking for doesn't exist — but we can help you recover the ones that do." }),
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-primary mt-8", children: [
        /* @__PURE__ */ jsx(Home$1, { size: 18 }),
        " Back to home"
      ] })
    ] }) })
  ] });
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Home, {}) },
      { path: "services", element: /* @__PURE__ */ jsx(Services, {}) },
      { path: "about", element: /* @__PURE__ */ jsx(About, {}) },
      { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) },
      { path: "privacy", element: /* @__PURE__ */ jsx(Privacy, {}) },
      { path: "terms", element: /* @__PURE__ */ jsx(Terms, {}) },
      { path: "404", element: /* @__PURE__ */ jsx(NotFound, {}) },
      { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
    ]
  }
];
const createRoot = ViteReactSSG({
  routes,
  basename: "/",
  ssgOptions: {
    dirStyle: "nested",
    // clean URLs: /services/ -> dist/services/index.html
    includedRoutes(paths) {
      const statics = paths.filter((p) => !p.includes(":") && !p.includes("*"));
      return Array.from(/* @__PURE__ */ new Set([...statics, "/404"]));
    }
  }
});
export {
  createRoot
};
