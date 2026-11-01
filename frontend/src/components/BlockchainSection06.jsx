import React from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export default function BlockchainSection06() {
  const articles = [
    {
      author: 'KAVITA MEHTA',
      date: 'OCT 28, 2026',
      title: 'HOW TO DETECT BANK STATEMENT CUTOFFS BEFORE FILING GSTR-3B',
      readTime: '4 MIN READ',
      tag: 'STATUTORY AUDIT',
    },
    {
      author: 'RAJESH SHAH',
      date: 'OCT 24, 2026',
      title: 'SECTION 16(2)(a) ITC RISKS: WHY UNATTACHED INVOICES TRIGGER NOTICES',
      readTime: '6 MIN READ',
      tag: 'GST LAW',
    },
    {
      author: 'ANAND VERMA',
      date: 'OCT 18, 2026',
      title: 'ZERO-DISRUPTION PRACTICE AUTOMATION: CONNECTING WHATSAPP TO TALLY',
      readTime: '5 MIN READ',
      tag: 'PRACTICE OS',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f] overflow-hidden">
      
      {/* Giant Outline Number "06" */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 right-12 text-big-outline-bx text-right">
          06
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-[720px]">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
              Knowledge &amp; Standards
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1]">
              Browse Latest Practice Standards<span className="text-[#a855f7]">.</span>
            </h2>
          </div>

          <a
            href="#faq"
            className="inline-flex items-center text-[14px] font-bold tracking-[0.08em] uppercase text-white hover:text-[#a855f7] transition-colors group shrink-0"
          >
            <span>Explore All Articles</span>
            <div className="link-arrow-circle group-hover:border-[#a855f7] group-hover:bg-[#7928ca]">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* 3 Articles Grid (Exact Blockchain X style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="card-bx p-8 sm:p-10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#929298] uppercase mb-4">
                  <span>{art.author}</span>
                  <span>{art.date}</span>
                </div>

                <div className="w-full h-1 bg-[#2a2a2f] mb-6">
                  <div className="w-1/3 h-full bg-[#7928ca] group-hover:w-full transition-all duration-500" />
                </div>

                <span className="text-[11px] font-mono tracking-wider uppercase text-[#a855f7] mb-2 block">
                  {art.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white leading-snug mb-4 group-hover:text-[#a855f7] transition-colors">
                  {art.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-[#2a2a2f] flex justify-between items-center text-xs font-mono text-[#c5c5ca]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#929298]" />
                  {art.readTime}
                </span>
                <span className="font-bold uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read More &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
