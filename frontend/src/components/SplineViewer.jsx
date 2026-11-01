import React, { useState } from 'react';
import { Sparkles, Layers, Box, RefreshCw, Sliders } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

/**
 * Spline 3D Interactive Viewer Component
 * Features dual-engine:
 * 1. Quantum Holographic 3D Gatekeeper Core (Three.js WebGL with 4-Stream satellites)
 * 2. Spline 3D Interactive WebGL Scene (Spline viewer with interactive particles)
 */
export default function SplineViewer({ className = '', onStreamClick }) {
  const [activeMode, setActiveMode] = useState('three'); // 'three' | 'spline'

  return (
    <div className={`relative w-full h-full rounded-3xl border border-purple-500/20 bg-[#0c091d]/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(112,26,179,0.25)] overflow-hidden ${className}`}>
      
      {/* Mode Switcher Pill */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-[#140e2e]/90 border border-purple-500/30 backdrop-blur-md shadow-lg">
        <button
          onClick={() => setActiveMode('three')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
            activeMode === 'three'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
              : 'text-purple-300 hover:text-white'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>3D Quantum Core</span>
        </button>

        <button
          onClick={() => setActiveMode('spline')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
            activeMode === 'spline'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
              : 'text-purple-300 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Spline 3D Runtime</span>
        </button>
      </div>

      {/* Floating 3D Badge Indicator */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>INTERACTIVE 3D &middot; 60 FPS</span>
      </div>

      {/* 3D Scene Rendering Area */}
      <div className="w-full h-full flex items-center justify-center min-h-[460px] md:min-h-[560px]">
        {activeMode === 'three' ? (
          <ThreeCanvas onStreamClick={onStreamClick} />
        ) : (
          <div className="relative w-full h-full min-h-[460px] md:min-h-[560px] flex items-center justify-center">
            {/* Native Spline Viewer Web Component */}
            <spline-viewer
              url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              className="w-full h-full min-h-[460px] md:min-h-[560px]"
            />
          </div>
        )}
      </div>

      {/* Bottom 3D Data Overlay Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-[#120e29]/80 border border-purple-500/20 backdrop-blur-md text-xs text-purple-200/90 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold">fix2ship Engine:</span>
          <span>4-Stream Real-Time Verification Node</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-purple-300/70">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Sales OK
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Purchase OK
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Bank Cutoff Flag
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> ITC Discrepancy
          </span>
        </div>
      </div>
    </div>
  );
}
