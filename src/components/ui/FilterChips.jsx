import { cn } from "../../lib/cn";

export default function FilterChips({ value, onChange, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition",
              active
                ? "border-black bg-black text-white"
                : "border-black/10 bg-white text-black/70 hover:bg-black/5"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
