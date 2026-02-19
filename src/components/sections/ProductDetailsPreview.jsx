import { useMemo, useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ImageFrame from "../ui/ImageFrame";
import Card from "../ui/Card";
import { formatPrice, percentOff, isOnSale } from "../../data/products";
import { Truck, RotateCcw, ShieldCheck, Lock } from "lucide-react";
import { cn } from "../../lib/cn";

export default function ProductDetailsPreview({ product }) {
  // Fall back to a “featured-ish” product if none passed
  const p = product;

  const images = useMemo(() => {
    const base = p?.image ? [p.image] : [];
    // Duplicate image as gallery placeholders (still looks like a gallery)
    while (base.length < 4) base.push(p?.image);
    return base.slice(0, 4);
  }, [p]);

  const [activeImg, setActiveImg] = useState(0);
  const [metal, setMetal] = useState("18k Gold Vermeil");
  const [size, setSize] = useState("6");

  if (!p) return null;

  return (
    <section id="pdp-preview" className="border-y border-black/10 bg-white">
      <Container className="py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-black/60">
                PRODUCT PAGE PREVIEW
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                A premium product detail experience
              </h2>
              <p className="mt-2 max-w-prose text-sm text-black/70">
                Clean gallery, clear options, stronger CTA, and trust info where it
                belongs — without visual clutter.
              </p>
            </div>

            <a
              href="#"
              className="text-sm font-medium text-[rgb(var(--accent-strong))] hover:opacity-80"
            >
              View full concept →
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Gallery */}
          <Reveal y={12}>
            <div className="grid gap-4">
              <ImageFrame
                ratio="square"
                src={images[activeImg]}
                alt={p.name}
                label={p.tag}
              />

              <div className="grid grid-cols-4 gap-3">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImg(idx)}
                    className={cn(
                      "rounded-2xl border p-2 transition",
                      idx === activeImg
                        ? "border-[rgb(var(--accent)/0.8)] bg-[rgb(var(--accent)/0.10)]"
                        : "border-black/10 hover:bg-black/5"
                    )}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <ImageFrame
                      ratio="square"
                      rounded="2xl"
                      subtle
                      src={src}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal y={12} delay={0.06}>
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-black/70">
                    {p.rating} ★ ({p.reviews} reviews)
                  </p>
                </div>

                {isOnSale(p) ? (
                  <span className="rounded-full border border-[rgb(var(--sale)/0.25)] bg-[rgb(var(--sale)/0.06)] px-3 py-1 text-xs font-semibold text-[rgb(var(--sale))]">
                    Save {percentOff(p)}%
                  </span>
                ) : (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60">
                    {p.tag}
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-2xl font-semibold text-[rgb(var(--accent-strong))]">
                  {formatPrice(p.price)}
                </p>

                {isOnSale(p) ? (
                  <p className="text-sm text-black/50 line-through">
                    {formatPrice(p.compareAt)}
                  </p>
                ) : null}

                <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60">
                  {p.category}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-black/70">
                Editorial, premium product copy goes here. Keep it short, confident,
                and benefit-driven: comfort fit, durable finish, timeless silhouette.
              </p>

              {/* Options */}
              <div className="mt-8 space-y-6">
                <OptionGroup
                  label="Metal"
                  value={metal}
                  options={["18k Gold Vermeil", "Sterling Silver", "Rose Gold Tone"]}
                  onChange={setMetal}
                />

                <OptionGroup
                  label="Ring size"
                  value={size}
                  options={["5", "6", "7", "8", "9"]}
                  onChange={setSize}
                />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" className="min-w-50">
                  Add to cart
                </Button>
                <Button variant="secondary">Buy now</Button>
              </div>

              <p className="mt-3 text-xs text-black/60">
                Selected: <span className="font-medium text-black/70">{metal}</span>,{" "}
                <span className="font-medium text-black/70">Size {size}</span>
              </p>

              {/* Trust */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <TrustMini
                  Icon={Truck}
                  title="Free shipping"
                  desc="Worldwide on select orders"
                />
                <TrustMini
                  Icon={RotateCcw}
                  title="60-day returns"
                  desc="Easy, no-stress returns"
                />
                <TrustMini
                  Icon={ShieldCheck}
                  title="1-year warranty"
                  desc="Coverage included"
                />
                <TrustMini
                  Icon={Lock}
                  title="Secure checkout"
                  desc="Encrypted payments"
                />
              </div>

              {/* Delivery info */}
              <Card className="mt-8 p-5">
                <p className="text-sm font-semibold">Delivery & returns</p>
                <ul className="mt-3 space-y-2 text-sm text-black/70">
                  <li>
                    <span className="font-medium text-black/80">Ships in:</span>{" "}
                    1–3 business days (concept)
                  </li>
                  <li>
                    <span className="font-medium text-black/80">Returns:</span>{" "}
                    60 days from delivery
                  </li>
                  <li>
                    <span className="font-medium text-black/80">Warranty:</span>{" "}
                    1 year manufacturer coverage
                  </li>
                </ul>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function OptionGroup({ label, value, options, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-black/60">
          {label.toUpperCase()}
        </p>
        <p className="text-xs text-black/60">
          Selected: <span className="font-medium text-black/70">{value}</span>
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition",
                active
                  ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.12)] text-[rgb(var(--accent-strong))]"
                  : "border-black/10 bg-white text-black/70 hover:bg-black/5"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TrustMini({ Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4 transition hover:border-[rgb(var(--accent)/0.35)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-black/10 p-2 text-black/70">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-1 text-xs text-black/60">{desc}</p>
        </div>
      </div>
    </div>
  );
}
