import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import ImageFrame from "../ui/ImageFrame";
import FilterChips from "../ui/FilterChips";
import SortSelect from "../ui/SortSelect";
import Highlight from "../ui/Highlight";
import { formatPrice, isOnSale, percentOff } from "../../data/products";

export default function BestSellers({
  products,
  query,
  onQuickView,

  activeCategory,
  onCategoryChange,
  sortKey,
  onSortChange,
  categoryOptions,
  sortOptions,
}) {
  const hasQuery = Boolean(String(query || "").trim());

  return (
    <section id="bestsellers">
      <Container className="py-16">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {hasQuery ? "Search results" : "Best sellers"}
                </h2>
                <p className="mt-2 text-sm text-black/70">
                  {hasQuery
                    ? `Showing results for “${query}”.`
                    : "Clean grid, bigger images, more breathing room."}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <SortSelect value={sortKey} onChange={onSortChange} options={sortOptions} />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <FilterChips
                value={activeCategory}
                onChange={onCategoryChange}
                options={categoryOptions}
              />

              <Button
                variant="secondary"
                onClick={() => {
                  onCategoryChange("all");
                  onSortChange("best_match");
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </Reveal>

        {products.length === 0 ? (
          <Reveal y={10}>
            <div className="mt-10 rounded-3xl border border-black/10 p-8">
              <p className="text-sm font-semibold">No results found</p>
              <p className="mt-2 text-sm text-black/70">
                Try a different keyword like <span className="font-medium">ring</span>,{" "}
                <span className="font-medium">band</span>, or{" "}
                <span className="font-medium">necklace</span>.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, idx) => (
              <Reveal key={p.id} delay={0.02 * idx} y={12}>
                <Card className="group overflow-hidden">
                  <div className="relative p-4">
                    <ImageFrame
                      ratio="square"
                      rounded="2xl"
                      subtle
                      label={p.tag}
                      src={p.image}
                      alt={p.name}
                    />

                    <button
                      type="button"
                      onClick={() => onQuickView(p)}
                      className="absolute bottom-6 left-6 right-6 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs font-medium text-black opacity-0 backdrop-blur transition group-hover:opacity-100"
                    >
                      Quick view
                    </button>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold">
                        <Highlight text={p.name} query={query} />
                      </p>
                      <span className="shrink-0 rounded-full border border-black/10 px-2 py-1 text-[10px] text-black/70">
                        {p.tag}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <p className="text-sm text-black/80">{formatPrice(p.price)}</p>
                      {isOnSale(p) ? (
                        <>
                          <p className="text-xs text-black/40 line-through">
                            {formatPrice(p.compareAt)}
                          </p>
                          <span className="rounded-full border border-[rgb(var(--sale)/0.25)] bg-[rgb(var(--sale)/0.06)] px-2 py-1 text-[10px] font-medium text-[rgb(var(--sale))]">
                            {percentOff(p)}% off
                          </span>
                        </>
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs text-black/60">
                      {p.rating} ★ ({p.reviews})
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
