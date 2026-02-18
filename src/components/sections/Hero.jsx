import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="border-b border-black/10">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-black/60">
              ITALO REDESIGN CONCEPT
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Jewelry that feels timeless — not templated.
            </h1>

            <p className="mt-4 max-w-prose text-base leading-relaxed text-black/70">
              A clean, premium storefront concept with better hierarchy, product focus,
              and conversion-friendly layout.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary">Shop Engagement</Button>
              <Button variant="secondary">Shop Best Sellers</Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Stat label="Shipping" value="Worldwide" />
              <Stat label="Returns" value="60 days" />
              <Stat label="Warranty" value="1 year" />
              <Stat label="Checkout" value="Secure" />
            </div>
          </div>

          {/* MVP image placeholder */}
          <div className="aspect-4/5 w-full rounded-3xl border border-black/10 bg-black/5" />
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
