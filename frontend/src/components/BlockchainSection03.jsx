import React, { useState } from 'react';
import { ShieldCheck, Lock, Terminal, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function BlockchainSection03() {
  const [activeSlide, setActiveSlide] = useState(0);

  const securitySlides = [
    {
      stat: '0',
      title: 'SECURITY INCIDENTS &amp; ZERO DATA LEAKAGE',
      desc: '100% on-premise execution. Spreadsheets, PDF bank statements, and vendor invoices never touch external third-party LLM APIs.',
    },
    {
      stat: '256',
      unit: '-BIT',
      title: 'SHA-256 BINARY MANIFEST INTEGRITY',
      desc: 'Every file page, table sheet, and extracted row is indexed with cryptographically verifiable SHA-256 binary hash fingerprints.',
    },
    {
      stat: '100',
      unit: '%',
      title: 'DETERMINISTIC ZERO-HALLUCINATION ENGINE',
      desc: 'No probabilistic generative AI guessing tax statutes. Strict mathematical invariants verified by 161 automated Pytest suites.',
    },
    {
      stat: '161',
      title: 'INVARIANTS TESTED &amp; AUTOMATED PYTESTS PASSING',
      desc: 'Regression suite verifies multi-sheet Excel corruption, magic byte spoofing, zero-byte uploads, and maker-checker audit persistence.',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % securitySlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + securitySlides.length) % securitySlides.length);
  };

  const slide = securitySlides[activeSlide];

  return (
    <section id="security" className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f] overflow-hidden">
      
      {/* Giant Outline Number "03" */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 left-8 text-big-outline-bx">
          03
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-[840px] mb-20">
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
            Bulletproof Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1] mb-6">
            Bulletproof Security By Design<span className="text-[#a855f7]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c5c5ca] leading-relaxed">
            Chartered Accountants manage ultra-confidential client financial ledgers. fix2ship provides on-premise zero-knowledge execution.
          </p>
        </div>

        {/* Security Slider Card (Exact Blockchain X carousel card layout) */}
        <div className="card-bx p-8 sm:p-16 border-l-4 border-l-[#7928ca]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Stat Number */}
            <div className="lg:col-span-5 font-mono">
              <div className="text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight text-white flex items-baseline">
                <span>{slide.stat}</span>
                {slide.unit && <span className="text-4xl sm:text-5xl text-[#a855f7]">{slide.unit}</span>}
                <span className="text-[#a855f7]">.</span>
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#929298] font-bold mt-2">
                VERIFIED AUDIT STATISTIC
              </div>
            </div>

            {/* Slide Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white leading-snug">
                {slide.title}
              </h3>

              <p className="text-base text-[#c5c5ca] leading-relaxed">
                {slide.desc}
              </p>

              {/* Slider Controls */}
              <div className="pt-4 flex items-center justify-between border-t border-[#2a2a2f]">
                <div className="text-xs font-mono uppercase text-[#929298]">
                  SLIDE 0{activeSlide + 1} OF 0{securitySlides.length}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-white hover:border-[#7928ca] hover:text-[#a855f7] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-white hover:border-[#7928ca] hover:text-[#a855f7] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
