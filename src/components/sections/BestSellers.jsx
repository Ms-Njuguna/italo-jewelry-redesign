import Container from "../ui/Container";
import Button from "../ui/Button";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Best Seller ${i + 1}`,
  price: 129 + i * 10,
}));

export default function BestSellers() {
  return (
    <section>
      <Container className="py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Best sellers</h2>
            <p className="mt-2 text-sm text-black/70">
              Clean grid, bigger images, more breathing room.
            </p>
          </div>
          <Button variant="secondary">View all</Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white"
            >
              <div className="aspect-square bg-black/5" />
              <div className="p-5">
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-black/70">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
