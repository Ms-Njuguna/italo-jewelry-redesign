import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { categories } from "../../data/categories";
import ImageFrame from "../ui/ImageFrame";

export default function CategoryGrid() {
  return (
    <section>
      <Container className="py-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Shop by category</h2>
              <p className="mt-2 text-sm text-black/70">
                Big visual cards, clean browsing, fewer distractions.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <Reveal key={c.id} delay={0.04 * idx} y={12}>
              <a
                href={c.href}
                className="group block overflow-hidden rounded-3xl border border-black/10 bg-white"
              >
                <div className="p-4">
                  <ImageFrame ratio="landscape" rounded="2xl" subtle label={c.title} />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="mt-1 text-xs text-black/60">{c.subtitle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
