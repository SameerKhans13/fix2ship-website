import React from 'react';
import { Quote } from 'lucide-react';

export default function BlockchainSection05() {
  const testimonials = [
    {
      quote: 'THE FUTURE OF GST PRE-ACCOUNTING & TRIAGE',
      text: 'Before fix2ship, our article assistants spent the first 14 days of every month manually checking bank statements for missing days. Now, bank cutoffs and unattached bills are flagged instantly.',
      name: 'RAJESH SHAH, FCA',
      role: 'Senior Partner, NSVM & Associates',
      firm: '80 Staff &middot; 300 Monthly Returns',
      initials: 'RS',
    },
    {
      quote: 'ZERO CLIENT PUSHBACK OR APP ONBOARDING',
      text: 'Every other software required our clients to log into a portal they never used. With fix2ship, clients still send files on WhatsApp, but our team gets structured, verified audit cards in 2 seconds.',
      name: 'KAVITA MEHTA',
      role: 'Audit Senior & Practice Lead',
      firm: 'Direct Tax & GST Compliance Lead',
      initials: 'KM',
    },
    {
      quote: 'PREVENTED ₹1.8L ITC LOSS ON TATA STEEL BILL',
      text: 'The Section 16(2)(a) cross-reference engine caught a missing ₹1.8L voucher from Tata Steel that our junior staff had overlooked. That single finding saved our client from heavy statutory interest.',
      name: 'ANAND VERMA',
      role: 'Managing Partner, Apex Advisory',
      firm: 'Enterprise Tax & Statutory Audit',
      initials: 'AV',
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f] overflow-hidden">
      
      {/* Giant Outline Number "05" */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 left-8 text-big-outline-bx">
          05
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-[840px] mb-20">
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
            Client &amp; Partner Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1] mb-6">
            What Practice Leaders Say About Us<span className="text-[#a855f7]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c5c5ca] leading-relaxed">
            Validated by leading Chartered Accountant firms managing hundreds of complex monthly GST client filings.
          </p>
        </div>

        {/* 3 Testimonials Grid (Exact Blockchain X style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-bx p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-[#a855f7] mb-6">
                  <Quote className="w-8 h-8 fill-current opacity-80" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white leading-snug mb-4">
                  &ldquo;{t.quote}&rdquo;
                </h3>

                <p className="text-sm text-[#c5c5ca] leading-relaxed mb-8">
                  {t.text}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2a2a2f] flex items-center gap-4">
                <div className="w-12 h-12 bg-[#7928ca] flex items-center justify-center font-bold text-white font-mono text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#a855f7] font-mono">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-[#929298] font-mono">
                    {t.firm}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
