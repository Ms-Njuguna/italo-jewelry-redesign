import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ImageFrame from "../ui/ImageFrame";

export default function Hero() {
  return (
    <section id="top" className="border-b border-black/10">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.28em] text-black/60">
                ITALO REDESIGN CONCEPT
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
                Jewelry that feels timeless — not templated.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-black/70">
                A clean, premium storefront concept with better hierarchy, product focus,
                and conversion-friendly layout.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary">Shop Engagement</Button>
                <Button variant="secondary">Shop Best Sellers</Button>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Reveal delay={0.18}><Stat label="Shipping" value="Worldwide" /></Reveal>
              <Reveal delay={0.22}><Stat label="Returns" value="60 days" /></Reveal>
              <Reveal delay={0.26}><Stat label="Warranty" value="1 year" /></Reveal>
              <Reveal delay={0.3}><Stat label="Checkout" value="Secure" /></Reveal>
            </div>
          </div>

          <Reveal delay={0.08} y={14}>
            <ImageFrame ratio="portrait" label="Hero visual" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4">
      <p className="text-xs font-medium tracking-wide text-black/60">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
