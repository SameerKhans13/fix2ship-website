import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function RoiCalculator() {
  const [clientsCount, setClientsCount] = useState(150);
  const [hoursPerClient, setHoursPerClient] = useState(4.5);
  const [hourlyRate, setHourlyRate] = useState(650);

  // Math: 70% of chasing hours saved
  const totalChasingHours = clientsCount * hoursPerClient;
  const hoursSavedMonthly = Math.round(totalChasingHours * 0.7);
  const monthlySavings = Math.round(hoursSavedMonthly * hourlyRate);
  const annualSavings = Math.round(monthlySavings * 12);
  const annualLakhs = (annualSavings / 100000).toFixed(2);

  return (
    <section id="roi" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICE IMPACT CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Firm's Chasing Hours Saved
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            See how much billable capacity your staff and article assistants recover each month with fix2ship.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders (7-Col) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 border-purple-500/30 space-y-6">
              
              {/* Slider 1: Active Monthly Clients */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    Monthly GST Return Clients
                  </label>
                  <span className="font-mono text-base font-extrabold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-500/25">
                    {clientsCount} Clients
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={clientsCount}
                  onChange={(e) => setClientsCount(Number(e.target.value))}
                  className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] text-purple-400/60 font-mono">
                  <span>20 Clients</span>
                  <span>250 Clients</span>
                  <span>500 Clients</span>
                </div>
              </div>

              {/* Slider 2: Chasing Hours per Client */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    Staff Chasing Hours per Client (Day 1-15)
                  </label>
                  <span className="font-mono text-base font-extrabold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-500/25">
                    {hoursPerClient} Hours
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={hoursPerClient}
                  onChange={(e) => setHoursPerClient(Number(e.target.value))}
                  className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] text-purple-400/60 font-mono">
                  <span>1 Hour</span>
                  <span>5 Hours</span>
                  <span>10 Hours</span>
                </div>
              </div>

              {/* Slider 3: Hourly Staff Cost */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-purple-400" />
                    Blended Staff Rate / Billable Value
                  </label>
                  <span className="font-mono text-base font-extrabold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-500/25">
                    ₹{hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="2500"
                  step="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] text-purple-400/60 font-mono">
                  <span>₹300/hr</span>
                  <span>₹1,200/hr</span>
                  <span>₹2,500/hr</span>
                </div>
              </div>

            </SpotlightCard>
          </div>

          {/* Results Summary Box (5-Col) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl glass-panel-elevated border-2 border-purple-500/40 relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <span className="text-xs font-mono text-purple-300 uppercase tracking-wider font-semibold">
                  ESTIMATED PRACTICE RETURN
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300">
                  70% EFFICIENCY BOOST
                </span>
              </div>

              <div>
                <p className="text-xs text-purple-300/70 mb-1">Recovered Billable Capacity:</p>
                <div className="text-4xl font-extrabold text-white font-mono flex items-baseline gap-2">
                  <span>{hoursSavedMonthly.toLocaleString()} hrs</span>
                  <span className="text-sm text-purple-400 font-normal">/ month</span>
                </div>
                <p className="text-xs text-purple-400/80 mt-1 font-mono">
                  Equal to {(hoursSavedMonthly / 160).toFixed(1)} full-time audit seniors
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/20">
                <p className="text-xs text-purple-300/70 mb-1">Annual Value Created:</p>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono flex items-baseline gap-2">
                  <span>₹{annualLakhs} Lakhs</span>
                  <span className="text-xs text-purple-300 font-normal">/ year</span>
                </div>
                <p className="text-xs text-purple-400/80 mt-1 font-mono">
                  (₹{monthlySavings.toLocaleString()} recovered monthly)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-purple-400">Day 1-15 Stress:</span>
                  <span className="text-emerald-400 font-bold">Eliminated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Turnaround Time:</span>
                  <span className="text-white font-bold">14 Days &rarr; 4 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Section 16(2)(a) ITC Risk:</span>
                  <span className="text-white font-bold">Pre-empted 100%</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
