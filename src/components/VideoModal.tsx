import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookService: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onBookService,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    if (progress < 25) setActiveStep(0);
    else if (progress < 55) setActiveStep(1);
    else if (progress < 80) setActiveStep(2);
    else setActiveStep(3);
  }, [progress]);

  if (!isOpen) return null;

  const steps = [
    { label: 'Thermal Diagnostic', detail: 'Infrared panel scan detecting hot spots' },
    { label: 'Voltage Balancing', detail: 'Harmonic load check & grounding validation' },
    { label: 'Breaker Replacement', detail: 'UL-certified commercial grade arc-fault breakers' },
    { label: 'Official Certification', detail: 'Passed 100% electrical code standards' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1320] rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-800 overflow-hidden relative flex flex-col text-white">
        {/* Top bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Cospert Safety Showcase
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 hidden sm:inline">How our certified team powers homes</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden group">
          {/* Animated Electrical Scene */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] flex flex-col items-center justify-center p-8">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Simulated Live Panel Graphic */}
            <div className="relative z-10 text-center max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <ShieldCheck className="w-9 h-9 text-amber-400" />
              </div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-amber-400 mb-1">
                Active Protocol: Step {activeStep + 1} of 4
              </div>
              <h4 className="text-2xl font-black text-white mb-2">
                {steps[activeStep].label}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {steps[activeStep].detail}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 bg-black/40 border border-slate-700/60 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Voltage: 120.4V • Amps: 18.2A • Ground: 0.02Ω [STABLE]</span>
              </div>
            </div>
          </div>

          {/* Video Overlay Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
            {/* Progress line */}
            <div
              className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress(Math.round((clickX / rect.width) * 100));
              }}
            >
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px]">00:{progress < 10 ? `0${progress}` : progress} / 01:40</span>
              </div>

              <div className="text-[11px] font-semibold text-amber-300">
                1080p HD • 60 FPS
              </div>
            </div>
          </div>
        </div>

        {/* Steps footer */}
        <div className="p-4 sm:p-5 bg-[#0B1320] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Ready to experience professional electrical service?
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService();
            }}
            className="w-full sm:w-auto bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
          >
            Schedule Free Safety Visit
          </button>
        </div>
      </div>
    </div>
  );
};
