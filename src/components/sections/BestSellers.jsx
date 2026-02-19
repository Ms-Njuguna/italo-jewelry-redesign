import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { formatPrice, getBestSellers } from "../../data/products";
import ImageFrame from "../ui/ImageFrame";
import Card from "../ui/Card";

export default function BestSellers() {
  const products = getBestSellers(8);

  return (
    <section id="bestsellers">
      <Container className="py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Best sellers</h2>
              <p className="mt-2 text-sm text-black/70">
                Clean grid, bigger images, more breathing room.
              </p>
            </div>
            <Button variant="secondary">View all</Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <Reveal key={p.id} delay={0.03 * idx} y={12}>
              <Card className="overflow-hidden">
                <div className="p-4">
                  <ImageFrame
                    ratio="square"
                    rounded="2xl"
                    subtle
                    label={p.tag}
                    src={p.image}
                    alt={p.name}
                  />
                </div>
                <div className="px-5 pb-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <span className="shrink-0 rounded-full border border-black/10 px-2 py-1 text-[10px] text-black/70">
                      {p.tag}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-sm text-black/80">{formatPrice(p.price)}</p>
                    <p className="text-xs text-black/40 line-through">
                      {formatPrice(p.compareAt)}
                    </p>
                  </div>

                  <p className="mt-2 text-xs text-black/60">
                    {p.rating} ★ ({p.reviews})
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
