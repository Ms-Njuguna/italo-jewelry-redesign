import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import ImageFrame from "./ImageFrame";
import { formatPrice } from "../../data/products";

export default function QuickViewModal({ product, onClose }) {
  // ESC to close (safe to run always)
  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  // Lock background scroll ONLY when modal is open
  useEffect(() => {
    if (!product) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [product]);

  // ✅ early return AFTER hooks
  if (!product) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-black/10 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-black/60">
              QUICK VIEW
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
          </div>

          <button
            className="rounded-full border border-black/10 px-3 py-2 text-xs text-black/70 hover:bg-black/5"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
          <ImageFrame
            ratio="square"
            src={product.image}
            alt={product.name}
            label={product.tag}
          />

          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-xl font-semibold">{formatPrice(product.price)}</p>
              <p className="text-sm text-black/50 line-through">
                {formatPrice(product.compareAt)}
              </p>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70">
                {product.category}
              </span>
            </div>

            <p className="mt-3 text-sm text-black/70">
              {product.rating} ★ ({product.reviews} reviews)
            </p>

            <p className="mt-5 text-sm leading-relaxed text-black/70">
              Premium concept copy: clean materials, timeless silhouette, and a
              polished finish designed for everyday wear or a standout moment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary">Add to cart</Button>
              <Button variant="secondary">View full details</Button>
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 p-4 text-xs text-black/60">
              <p className="font-medium text-black/70">
                Why this helps conversion:
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>Quick view reduces clicks</li>
                <li>Users compare products faster</li>
                <li>More time on site = higher intent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
