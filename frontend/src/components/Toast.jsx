import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts = [], onDismiss }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-md w-full">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';
          const isWarning = toast.type === 'warning';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto p-4 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-start gap-3 ${
                isSuccess
                  ? 'bg-[#0f1715]/95 border-emerald-500/40 text-emerald-100 shadow-[0_10px_30px_rgba(16,185,129,0.25)]'
                  : isError
                  ? 'bg-[#1a0d16]/95 border-rose-500/40 text-rose-100 shadow-[0_10px_30px_rgba(244,63,94,0.25)]'
                  : 'bg-[#18112e]/95 border-purple-500/40 text-purple-100 shadow-[0_10px_30px_rgba(168,85,247,0.25)]'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {isError && <XCircle className="w-5 h-5 text-rose-400" />}
                {isWarning && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                {!isSuccess && !isError && !isWarning && <Info className="w-5 h-5 text-purple-400" />}
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold leading-relaxed">{toast.message}</p>
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 text-white/50 hover:text-white p-0.5 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
