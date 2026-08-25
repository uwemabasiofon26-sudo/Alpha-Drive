import { cn } from "@/lib/utils";
import { formatNZD } from "@/lib/brand";

export default function SubscriptionToggle({ value, onChange, oneTime, monthly, className }) {
  const hasSub = monthly && monthly > 0;
  return (
    <div className={cn("inline-flex rounded-full border border-av-teal p-1 bg-av-deep/60 text-xs", className)}>
      <button
        onClick={() => onChange("one_time")}
        className={cn(
          "px-4 py-2 rounded-full uppercase tracking-[0.15em] font-semibold transition-all",
          value === "one_time" ? "bg-av-gold text-av-deep" : "text-av-alloy/70 hover:text-av-alloy"
        )}
      >
        One-time · {formatNZD(oneTime)}
      </button>
      {hasSub && (
        <button
          onClick={() => onChange("subscription")}
          className={cn(
            "px-4 py-2 rounded-full uppercase tracking-[0.15em] font-semibold transition-all",
            value === "subscription" ? "bg-av-gold text-av-deep" : "text-av-alloy/70 hover:text-av-alloy"
          )}
        >
          Monthly · {formatNZD(monthly)}
        </button>
      )}
    </div>
  );
}
