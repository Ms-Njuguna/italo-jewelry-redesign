import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const items = [
  { title: "Free worldwide shipping", desc: "Clear value up-front" },
  { title: "60-day returns", desc: "Lower purchase anxiety" },
  { title: "1-year warranty", desc: "Confidence signal" },
  { title: "Secure checkout", desc: "Trust + safety" },
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
              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-sm font-semibold">{i.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-black/60">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
