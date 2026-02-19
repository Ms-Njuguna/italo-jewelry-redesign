import { useState } from "react";
import { cn } from "../../lib/cn";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/10">
      {items.map((item, idx) => {
        const open = idx === openIndex;

        return (
          <div key={item.title} className="bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <span className="text-sm font-semibold">{item.title}</span>
              <span
                className={cn(
                  "text-xs text-black/60 transition",
                  open ? "rotate-45" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm text-black/70">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
