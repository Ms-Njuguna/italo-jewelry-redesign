import { cn } from "../../lib/cn";

export default function Card({ className = "", children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-black/10 bg-white transition duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]",
        "active:translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}
