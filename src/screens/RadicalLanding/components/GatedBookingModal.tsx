import { useState } from "react";
import { Button } from "../../../components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GatedBookingModal = ({ isOpen, onClose }: ModalProps): JSX.Element | null => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState("");
  const [timeline, setTimeline] = useState("");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  const handleSubmit = () => {
    alert(`Assessment request logged. Objective: ${objective}, Timeline: ${timeline}, Selected Date: June ${selectedDay}, 2026. A clinician will review your profile shortly.`);
    onClose();
    // Reset state
    setStep(1);
    setObjective("");
    setTimeline("");
    setSelectedDay(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/90 p-0 backdrop-blur-xl transition-all duration-500">
      <div className="h-full w-full max-w-xl border-l border-stone-900 bg-[#050505] p-8 md:p-12 text-[#F5F5F5] flex flex-col justify-between shadow-2xl relative overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-stone-500 hover:text-stone-300 transition-colors"
          aria-label="Close booking engine"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <div className="space-y-12 my-auto pt-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 font-light">Verification Protocol</span>
              <h3 className="text-3xl font-light font-serif mt-2 tracking-wide">Private Assessment Intake</h3>
              <p className="mt-2 text-xs text-stone-500 font-light leading-relaxed">
                Prior to scheduling clinical allocations, please select your primary treatment profile objectives.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-light block">1. Primary transformation objective?</label>
                <div className="grid gap-3">
                  {["Veneer Architecture", "Implant Protocol", "Full Restoration"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setObjective(opt)}
                      type="button"
                      className={`w-full text-left rounded-xl border p-4 text-sm font-light tracking-wide transition-all duration-300 ${
                        objective === opt
                          ? "border-amber-200 bg-amber-200/[0.03] text-amber-200"
                          : "border-stone-900 bg-[#0c0c0a]/50 text-stone-400 hover:border-stone-850"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-light block">2. Desired initiation timeline?</label>
                <div className="grid gap-3">
                  {["Immediate Allocation", "1-3 Months", "Discretionary Review"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setTimeline(opt)}
                      type="button"
                      className={`w-full text-left rounded-xl border p-4 text-sm font-light tracking-wide transition-all duration-300 ${
                        timeline === opt
                          ? "border-amber-200 bg-amber-200/[0.03] text-amber-200"
                          : "border-stone-900 bg-[#0c0c0a]/50 text-stone-400 hover:border-stone-850"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              disabled={!objective || !timeline}
              onClick={() => setStep(2)}
              className="w-full h-14 bg-gradient-to-r from-amber-300 to-amber-200 text-stone-950 font-semibold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              Proceed to Calendar
            </Button>
          </div>
        ) : (
          <div className="space-y-8 my-auto pt-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 font-light">Availability Allocation</span>
              <h3 className="text-3xl font-light font-serif mt-2 tracking-wide">Clinical Calendar</h3>
              <div className="mt-3 inline-flex items-center gap-2 bg-amber-300/[0.03] border border-amber-200/10 text-amber-200 text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-light">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
                Only 2 clinical allocations remaining this week
              </div>
            </div>

            {/* Custom Minimalist Calendar Mockup */}
            <div className="border border-stone-900 rounded-2xl p-6 bg-black">
              <div className="flex justify-between items-center text-xs tracking-widest uppercase text-stone-400 mb-6 font-serif">
                <span>June 2026</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-stone-500 tracking-wider mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i} className="font-light">{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const isAvailable = day === 18 || day === 24;
                  const isSelected = selectedDay === day;
                  return (
                    <button
                      key={i}
                      disabled={!isAvailable}
                      onClick={() => handleDaySelect(day)}
                      type="button"
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                        isSelected
                          ? "bg-amber-200 text-stone-950 font-bold"
                          : isAvailable
                          ? "border border-amber-200/40 text-amber-200 hover:bg-amber-200/10 cursor-pointer"
                          : "text-stone-800 cursor-not-allowed opacity-20"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                disabled={selectedDay === null}
                onClick={handleSubmit}
                className="w-full h-14 bg-gradient-to-r from-amber-300 to-amber-200 text-stone-950 font-semibold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              >
                Request Selected Allocation
              </Button>
              <button
                onClick={() => setStep(1)}
                type="button"
                className="w-full py-3 text-center text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-300 transition-colors font-light"
              >
                Back to Objectives
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
