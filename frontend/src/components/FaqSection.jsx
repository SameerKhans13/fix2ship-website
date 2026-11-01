import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Does fix2ship use LLMs to make legal tax determinations?',
      answer:
        'No. fix2ship is an entirely deterministic 3-tier readiness gatekeeper. It enforces mathematical rules, binary integrity, coverage manifests, and Section 16(2)(a) document matching. It never invents tax conclusions or legal advice. Final statutory determinations remain strictly under CA reviewer control.',
    },
    {
      question: 'What is the "Strict Exclusion Invariant" in the WhatsApp generator?',
      answer:
        'Clients get frustrated when accountants repeatedly ask for documents they already submitted. fix2ship enforces a strict exclusion invariant: verified streams (such as the 120-row Sales Register) are permanently excluded from follow-ups. The dynamic message only requests missing items (e.g. the 6-day bank cutoff and the missing ₹1.8L Tata Steel bill).',
    },
    {
      question: 'Why is the ₹1,80,000 Tata Steel invoice flagged as critical?',
      answer:
        'Under GST Section 16(2)(a), a taxpayer cannot claim Input Tax Credit without possession of a valid tax invoice. Because the purchase register claims ₹1,80,000 ITC but no supporting invoice file was attached, fix2ship flags this high-value risk before GSTR-3B submission to prevent disallowance and interest penalties.',
    },
    {
      question: 'Can fix2ship be deployed 100% on-premise for client privacy?',
      answer:
        'Yes. All file ingestion, SHA-256 binary hashing, SQLite database trails, and rule evaluations execute on-premise. No client spreadsheets or bank statements are transmitted to public LLM APIs or external third-party servers.',
    },
    {
      question: 'How does fix2ship integrate with Tally and Winman GST?',
      answer:
        'When an assignment reaches "Ship-Ready" status (all items verified or justified via CA reviewer override), the release gate exports clean, verified data structures compatible with Tally Prime XML import and Winman GST filing utilities.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#090616]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers for CA Partners
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Everything you need to know about the deterministic engine, data privacy, and practice workflow.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SpotlightCard
                key={index}
                className="border-purple-500/25 bg-[#0e0924]/80 overflow-hidden cursor-pointer transition-all"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                    <div className={`p-1.5 rounded-lg bg-purple-950 text-purple-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-200' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 pt-4 border-t border-purple-500/15 overflow-hidden"
                      >
                        <p className="text-sm text-purple-200/80 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
