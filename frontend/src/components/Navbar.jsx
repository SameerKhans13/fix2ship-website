import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Ship,
  Sparkles,
  Zap,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import ShinyText from './ReactBits/ShinyText';

export default function Navbar({ onLoadDemo, onReset, isLoaded }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: '3D Gatekeeper', href: '#architecture' },
    { name: 'Live Demo', href: '#demo' },
    { name: 'Inspection Hub', href: '#inspection' },
    { name: 'ROI Calculator', href: '#roi' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-purple-500/30 bg-[#090616]/85 backdrop-blur-2xl shadow-[0_10px_35px_rgba(112,26,179,0.3)] py-2.5 px-6'
            : 'border-purple-500/15 bg-[#090616]/60 backdrop-blur-lg py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-fuchsia-500 p-0.5 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d091e] rounded-[10px] flex items-center justify-center">
                <Ship className="w-5 h-5 text-purple-300 group-hover:text-purple-100 transition-colors" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                  fix<span className="text-purple-400">2</span>ship
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  v1.0 POC
                </span>
              </div>
              <p className="text-[10px] font-medium text-purple-300/60 tracking-wider uppercase font-mono hidden sm:block">
                Deterministic Practice OS
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-purple-200/80 rounded-lg hover:text-white hover:bg-purple-800/30 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Demo Button */}
            <button
              onClick={onLoadDemo}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              <span>{isLoaded ? 'Reload Apex Demo' : '1-Click Apex Demo'}</span>
            </button>

            <a
              href="#demo"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-purple-200 rounded-xl bg-purple-950/50 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40 transition-all cursor-pointer"
            >
              <span>Interactive Suite</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-purple-500/20 flex flex-col gap-2.5 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onLoadDemo();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
                >
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>Load Canonical Apex Demo</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
