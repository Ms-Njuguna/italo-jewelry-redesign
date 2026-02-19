import { motion } from "framer-motion";
import Container from "../ui/Container";

const items = [
  { type: "trust", text: "Free worldwide shipping" },
  { type: "sale", text: "Seasonal event: 15% off select styles — code LOVE15" },
  { type: "trust", text: "60-day returns" },
  { type: "trust", text: "1-year warranty included" },
];

function RibbonContent() {
  return (
    <div className="flex items-center gap-6 pr-6">
      {items.map((item, idx) => (
        <div key={`${item.type}-${idx}`} className="flex items-center gap-3">
          {item.type === "sale" ? (
            <span className="rounded-full border border-[rgb(var(--sale)/0.3)] bg-[rgb(var(--sale)/0.08)] px-2 py-0.5 text-[10px] font-semibold text-[rgb(var(--sale))]">
              SALE
            </span>
          ) : (
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--accent-strong)/0.65)]" />
          )}

          <span className="whitespace-nowrap text-xs text-black/70">
            {item.text}
          </span>

          {/* separator */}
          <span className="h-3 w-px bg-black/10" />
        </div>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="border-b border-black/10 bg-[rgb(var(--accent)/0.08)]">
      <Container className="py-2">
        <div className="relative overflow-hidden">
          {/* soft edge fade so it feels luxe */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18, // slower = more premium
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* duplicate content so it loops seamlessly */}
            <div className="flex">
              <RibbonContent />
              <RibbonContent />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
