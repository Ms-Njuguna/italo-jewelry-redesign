import Container from "../ui/Container";
import { categories } from "../../data/categories";

export default function CategoryGrid() {
  return (
    <section>
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Shop by category</h2>
            <p className="mt-2 text-sm text-black/70">
              Big visual cards, clean browsing, fewer distractions.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white"
            >
              <div className="aspect-5/4 bg-black/5 transition group-hover:scale-[1.02]" />
              <div className="p-5">
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="mt-1 text-xs text-black/60">{c.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
