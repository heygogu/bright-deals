import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Database,
  ShieldCheck,
  Link as LinkIcon,
  BarChart2,
  Copy,
  Zap,
  Share2,
} from "lucide-react";

// A "god-level" minimal SaaS features section.
// - Tailwind-first utility classes
// - Subtle glassmorphism + gradients (keeps indigo/violet palette)
// - Interactive right-side cards that update the left mock preview on hover
// - Accessible, responsive, production-ready structure

const DEFAULT_FEATURES = [
  {
    title: "Smart Link Shortening",
    description:
      "Shorten, brand, and manage affiliate links with one click — add custom domains and rules.",
    icon: LinkIcon,
    iconBg: "bg-indigo-600",
    stats: "1.7x CTR",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Real-time Analytics",
    description:
      "Live clicks, conversions, and geo breakdowns so you can optimize instantly.",
    icon: BarChart2,
    iconBg: "bg-violet-600",
    stats: "Realtime",
    color: "from-violet-500 to-pink-500",
  },
  {
    title: "Auto-tagging & Rules",
    description:
      "Create rules to auto-tag campaigns, route traffic, and apply UTM presets at scale.",
    icon: Database,
    iconBg: "bg-indigo-500",
    stats: "Set & forget",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "Lightning Shortening",
    description:
      "Bulk import & instant shortening — save time for creators and teams.",
    icon: Zap,
    iconBg: "bg-purple-600",
    stats: "Bulk & Fast",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Secure Link Shield",
    description:
      "Protect users with safety checks, malware filters and smart redirects.",
    icon: ShieldCheck,
    iconBg: "bg-slate-700",
    stats: "SOC2-ready",
    color: "from-slate-700 to-indigo-700",
  },
  {
    title: "Share Everywhere",
    description:
      "One-click distribution to socials, email, and partner networks with tracking.",
    icon: Share2,
    iconBg: "bg-indigo-700",
    stats: "Multi-channel",
    color: "from-indigo-600 to-indigo-400",
  },
];

export default function FeaturesSection({ features = DEFAULT_FEATURES }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const activeFeature = features[active] || features[0];

  return (
    <section
      id='features'
      className='relative z-10 px-6 py-20 max-w-6xl mx-auto '>
      {/* Decorative blobs */}

      <div className='max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start'>
        {/* Left column: Headline + Live mockup */}
        <div className='lg:col-span-6'>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-left'>
            <span className='text-indigo-600 font-semibold text-sm uppercase tracking-wider'>
              Features
            </span>
            <h2 className='mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900'>
              A minimal, powerful link stack
            </h2>
            <p className='mt-4 text-lg text-slate-600 max-w-md'>
              Everything you need to shorten, track and distribute links with
              enterprise-grade controls and delightful UX.
            </p>

            <div className='mt-8 flex items-center gap-4'>
              <a
                href='#'
                className='inline-flex items-center gap-3 rounded-full bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition'
                aria-label='Get started'>
                Get started
              </a>
              <a
                href='#'
                className='text-sm text-slate-600 hover:text-slate-900'>
                View pricing
              </a>
            </div>

            {/* Live mini mockup — updates on hover of feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className='mt-8 hidden md:block'>
              <div
                className={`relative rounded-2xl border border-slate-100 p-5 shadow-md bg-white/80 backdrop-blur-md`}
                role='region'
                aria-label='Feature preview'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-xs text-slate-400'>Top link</div>
                    <div className='text-sm font-semibold text-slate-900'>
                      amzn.to/abc123
                    </div>
                  </div>

                  <div className='text-right'>
                    <div className='text-xs text-slate-400'>Clicks</div>
                    <div className='text-lg font-bold text-indigo-600'>
                      {activeFeature.stats}
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex items-end gap-4'>
                  {/* Spark bars — colored by active feature */}
                  {[0, 1, 2, 3, 4].map((n, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2 rounded-full bg-gradient-to-r ${
                        activeFeature.color
                      } opacity-${n === 4 ? "100" : 40 + n * 10}`}
                      style={{ transformOrigin: "left" }}
                      aria-hidden
                    />
                  ))}
                </div>

                <div className='mt-4 flex items-center justify-between text-xs text-slate-500'>
                  <div>{activeFeature.title}</div>
                  <div>Updated just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right column: Feature cards (timeline-like, interactive) */}
        <div className='lg:col-span-6'>
          <div className='space-y-6'>
            {features.map((f, idx) => {
              const Icon = f.icon || LinkIcon;
              return (
                <motion.button
                  key={idx}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onMouseLeave={() => setActive(0)}
                  onBlur={() => setActive(0)}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className='w-full text-left'>
                  <div className='relative'>
                    {/* connector line (left side) */}
                    <span className='absolute left-0 top-0 h-full -ml-6 flex items-start'>
                      <span
                        className='w-0.5 bg-slate-100 h-full rounded'
                        aria-hidden
                      />
                    </span>

                    <div className='ml-6 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition flex gap-5 items-start'>
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-lg text-white shadow-md ${f.iconBg} flex-shrink-0`}
                        aria-hidden>
                        <Icon className='w-6 h-6' />
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center justify-between gap-4'>
                          <h3 className='text-md font-semibold text-slate-900'>
                            {f.title}
                          </h3>

                          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium'>
                            <TrendingUp className='w-4 h-4' />
                            {f.stats}
                          </div>
                        </div>

                        <p className='mt-2 text-slate-600'>{f.description}</p>

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: active === idx ? "84%" : 0 }}
                          className={`h-1 mt-4 rounded-full bg-gradient-to-r ${f.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* See It In Action — compact steps */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {[
                {
                  icon: Copy,
                  label: "Paste Links",
                  step: "1",
                  color: "bg-indigo-500",
                },
                {
                  icon: Zap,
                  label: "Instant Shorten",
                  step: "2",
                  color: "bg-violet-500",
                },
                {
                  icon: Share2,
                  label: "Share Everywhere",
                  step: "3",
                  color: "bg-purple-500",
                },
              ].map((s, i) => {
                const SIcon = s.icon;
                return (
                  <div
                    key={i}
                    className='rounded-2xl p-5 bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition'>
                    <div
                      className={`w-14 h-14 ${s.color} rounded-full flex items-center justify-center mb-3 text-white shadow`}>
                      <SIcon className='w-6 h-6' />
                    </div>
                    <div className='text-2xl font-extrabold text-slate-300 mb-1'>
                      {s.step}
                    </div>
                    <div className='font-semibold text-sm text-slate-900'>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
