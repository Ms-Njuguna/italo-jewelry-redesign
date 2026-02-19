import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { Truck, RotateCcw, ShieldCheck, Lock } from "lucide-react";

const items = [
  { title: "Free worldwide shipping", desc: "Clear value up-front", Icon: Truck },
  { title: "60-day returns", desc: "Lower purchase anxiety", Icon: RotateCcw },
  { title: "1-year warranty", desc: "Confidence signal", Icon: ShieldCheck },
  { title: "Secure checkout", desc: "Trust + safety", Icon: Lock },
];

export default function TrustBar() {
  return (
    <section id="trust" className="border-t border-black/10">
      <Container className="py-12">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold">Confidence, built in</h2>
              <p className="mt-2 text-sm text-black/70">
                Trust signals that reduce friction and boost conversions.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <Reveal key={i.title} delay={0.04 * idx} y={10}>
              <div className="rounded-2xl border border-black/10 p-5 transition hover:border-[rgb(var(--accent)/0.35)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-black/10 p-2 text-black/70">
                    <i.Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">{i.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-black/60">
                      {i.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
