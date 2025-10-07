"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Link2,
  Zap,
  BarChart3,
  History,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Globe,
  MousePointerClick,
  Copy,
  Share2,
  Rocket,
  Star,
  ChevronDown,
  Menu,
  X,
  Users,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeaturesSection from "@/components/Features";
import BenefitsTestimonialsCTA from "@/components/BenefitsTestimonialCTA";

export default function BrightDealsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const platforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Twitter, name: "Twitter", color: "text-blue-400" },
    { icon: Youtube, name: "YouTube", color: "text-red-500" },
    { icon: Globe, name: "Telegram", color: "text-sky-500" },
  ];

  const benefits = [
    "Save 10+ hours per week on link management",
    "Increase click-through rates by up to 40%",
    "Track performance across all platforms",
    "Built-in compliance tools for FTC guidelines",
    "Custom branded short domains",
    "API access for automation",
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fashion Influencer",
      followers: "2.3M",
      text: "BrightDeals transformed my workflow. I used to spend hours managing links - now it takes minutes!",
      avatar: "SC",
    },
    {
      name: "Mike Rodriguez",
      role: "Tech Reviewer",
      followers: "890K",
      text: "The analytics alone are worth it. I've optimized my posting strategy and doubled my affiliate income.",
      avatar: "MR",
    },
    {
      name: "Aisha Patel",
      role: "Lifestyle Creator",
      followers: "1.5M",
      text: "Finally, a tool built specifically for influencers. The multi-platform sharing is a game-changer.",
      avatar: "AP",
    },
  ];

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 overflow-hidden'>
      {/* Subtle Background Pattern */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-40'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className='fixed inset-x-0 z-50 px-6 py-4   '>
        <div className='max-w-6xl rounded-full px-10 py-4 mx-auto flex items-center justify-between border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-2xl bg-white/50'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30'>
              <Sparkles className='w-6 h-6 text-white' />
            </div>
            <span className='text-2xl font-bold text-slate-900'>
              BrightDeals
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#features'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Features
            </a>
            <a
              href='#benefits'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Benefits
            </a>
            <a
              href='#testimonials'
              className='text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
              Testimonials
            </a>
            <Button className='bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30'>
              Get Started <ArrowRight className='ml-2 w-4 h-4' />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-slate-900'>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden mt-4 space-y-4'>
              <a
                href='#features'
                className='block text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
                Features
              </a>
              <a
                href='#benefits'
                className='block text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
                Benefits
              </a>
              <a
                href='#testimonials'
                className='block text-slate-600 hover:text-indigo-600 transition-colors font-medium'>
                Testimonials
              </a>
              <Button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white'>
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className='relative z-10 px-6 pt-20 pb-32 mt-15'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            style={{ opacity, scale }}
            className='text-center space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200'>
              <Rocket className='w-4 h-4 text-indigo-600' />
              <span className='text-sm text-indigo-600 font-medium'>
                First-to-Market Influencer Link Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-6xl md:text-7xl lg:text-8xl font-bold leading-tight cursor-pointer tracking-tight '>
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400 text-shadow-md'>
                Manage Links Like
              </span>
              <br />
              <span className="text-white after:content-[''] after:bg-gradient-to-r after:from-indigo-600 after:via-violet-600 after:to-purple-600 after:w-[102%] after:h-full relative after:absolute after:inset-0 after:-z-1 after:-skew-4 mx-4 p-3 after:mt-2">
                Never
              </span>
              <span className='bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
                Before
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-xl md:text-2xl p-3 text-slate-600 max-w-3xl mx-auto leading-relaxed'>
              The ultimate link shortening & management platform built
              exclusively for content creators. Streamline your workflow and
              maximize your earnings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                size='lg'
                className='bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 shadow-xl shadow-indigo-500/30'>
                Start Free Trial <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-slate-300 text-slate-900 hover:bg-slate-100 text-lg px-8 py-6'>
                Watch Demo
              </Button>
            </motion.div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex items-center justify-center gap-8 pt-8'>
              {platforms.slice(0, 3).map((platform, idx) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className='flex flex-col items-center gap-2'>
                  <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-200'>
                    <platform.icon className={`w-8 h-8 ${platform.color}`} />
                  </div>
                  <span className='text-xs text-slate-600 font-medium'>
                    {platform.name}
                  </span>
                </motion.div>
              ))}

              {/* render telegram here using ccustom svf */}
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className='flex flex-col items-center gap-2'>
                <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-200'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11.09.722.558 1.155.894 1.394.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836.18.574.355.933.574 1.207.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02.04.011.067.015.118.023.773.234 1.394-.246 1.394-.246l.035-.028 2.883-2.625 4.832 3.707.11.047c1.007.442 2.027.196 2.566-.238.543-.437.754-.996.754-.996l.035-.09 3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047 1.872 1.872 0 0 0-1.067-.27Zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145-.078.062-.14.101-.465-.028l-5.91-4.531-3.57 3.254.75-4.79 9.656-9c.398-.37.265-.448.265-.448.028-.454-.601-.133-.601-.133l-12.176 7.543-.004-.02-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11 2.055-.863 3.574-1.496 3.66-1.53.082-.032.043-.032.102-.032Z"/></svg> usew this */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#0088CC'
                    viewBox='0 0 32 32'
                    className='w-8 h-8'>
                    <path d='M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11.09.722.558 1.155.894 1.394.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836.18.574.355.933.574 1.207.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02.04.011.067.015.118.023.773.234 1.394-.246 1.394-.246l.035-.028 2.883-2.625 4.832 3.707.11.047c1.007.442 2.027.196 2.566-.238.543-.437.754-.996.754-.996l.035-.09 3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047 1.872 1.872 0 0 0-1.067-.27Zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145-.078.062-.14.101-.465-.028l-5.91-4.531-3.57 3.254.75-4.79 9.656-9c.398-.37.265-.448.265-.448.028-.454-.601-.133-.601-.133l-12.176 7.543-.004-.02-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11 2.055-.863 3.574-1.496 3.66-1.53.082-.032.043-.032.102-.032Z' />
                  </svg>
                </div>
                <span className='text-xs text-slate-600 font-medium'>
                  Telegram
                </span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16'>
              {[
                { label: "Links Shortened", value: "10M+", icon: Link2 },
                { label: "Active Creators", value: "50K+", icon: Users },
                { label: "Time Saved", value: "10hrs", icon: Clock },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className='text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-200'>
                  <stat.icon className='w-8 h-8 text-indigo-600 mx-auto mb-3' />
                  <div className='text-3xl md:text-4xl font-bold text-slate-900'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-slate-600 mt-1 font-medium'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <ChevronDown className='w-8 h-8 text-indigo-400' />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Benefits Section */}
      <BenefitsTestimonialsCTA
        benefits={benefits}
        testimonials={testimonials}
      />

      {/* Footer */}
      <footer className='relative z-10 bg-gradient-to-br from-white via-slate-50 to-slate-100 border-t border-slate-200'>
        <div className='max-w-6xl mx-auto px-6 py-20'>
          {/* Top Section */}
          <div className='grid lg:grid-cols-4 gap-14 mb-16'>
            {/* Brand */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <Sparkles className='w-6 h-6 text-white' />
                </div>
                <span className='text-2xl font-extrabold text-slate-900'>
                  BrightDeals
                </span>
              </div>
              <p className='text-slate-600 text-base leading-relaxed'>
                The ultimate link management platform built for modern creators
                and ambitious brands.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className='font-bold mb-5 text-slate-900 tracking-wide uppercase text-sm'>
                Product
              </h4>
              <ul className='space-y-3 text-slate-600 font-medium'>
                <li>
                  <a
                    href='#'
                    className='hover:text-indigo-600 transition-colors'>
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-indigo-600 transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-indigo-600 transition-colors'>
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className='relative lg:-left-10'>
              <h4 className='font-bold mb-5 text-slate-900 tracking-wide uppercase text-sm'>
                Company
              </h4>
              <ul className='space-y-3 text-slate-600 font-medium'>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className='relative lg:-left-26'>
              <h4 className='font-bold mb-5 text-slate-900 tracking-wide uppercase text-sm'>
                Stay Updated
              </h4>
              <p className='text-slate-600 text-sm mb-4'>
                Subscribe to get the latest product updates, tips, and exclusive
                offers.
              </p>
              <form className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm'
                />
                <button
                  type='submit'
                  className='px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6'>
            <p className='text-sm text-slate-500'>
              © 2025 BrightDeals. All rights reserved.
            </p>

            <div className='flex items-center gap-5'>
              <a
                href='#'
                className='w-9 h-9 flex items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100 transition'>
                <Twitter className='w-5 h-5 text-indigo-600' />
              </a>
              <a
                href='#'
                className='w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 transition'>
                <Instagram className='w-5 h-5 text-pink-500' />
              </a>
              <a
                href='#'
                className='w-9 h-9 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 transition'>
                <Youtube className='w-5 h-5 text-red-500' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
