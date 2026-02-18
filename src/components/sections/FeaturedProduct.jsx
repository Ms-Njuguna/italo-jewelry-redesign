import Container from "../ui/Container";
import Button from "../ui/Button";
import { formatPrice, getFeaturedProduct } from "../../data/products";

export default function FeaturedProduct() {
  const product = getFeaturedProduct();

  return (
    <section className="border-y border-black/10">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-[0.2em] text-black/60">
              FEATURED
            </p>

            <h2 className="mt-3 text-3xl font-semibold">{product.name}</h2>

            <p className="mt-3 text-sm leading-relaxed text-black/70">
              A premium product spotlight section instead of a noisy grid. This
              is where you push your hero SKU.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
              <p className="text-sm text-black/50 line-through">
                {formatPrice(product.compareAt)}
              </p>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70">
                {product.tag}
              </span>
            </div>

            <div className="mt-8 flex gap-3">
              <Button variant="primary">View product</Button>
              <Button variant="ghost">See details</Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-4/3 rounded-3xl border border-black/10 bg-black/5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
