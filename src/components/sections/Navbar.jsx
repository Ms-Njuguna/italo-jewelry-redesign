import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar({ query, onQueryChange }) {
  const [shopOpen, setShopOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setShopOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setShopOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="text-[rgb(var(--accent-strong))] text-sm font-semibold tracking-wide">ITALO</span>
            <span className="text-xs text-black/50">Redesign</span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                className="text-sm text-black/70 hover:text-black"
                onClick={() => setShopOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={shopOpen}
              >
                Shop <span className="ml-1 text-black/40">▾</span>
              </button>

              {shopOpen ? (
                <div
                  role="menu"
                  className="absolute left-0 mt-3 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
                >
                  <a className="block px-4 py-3 text-sm hover:bg-black/5" href="#categories">
                    Categories
                  </a>
                  <a className="block px-4 py-3 text-sm hover:bg-black/5" href="#featured">
                    Featured
                  </a>
                  <a className="block px-4 py-3 text-sm hover:bg-black/5" href="#bestsellers">
                    Best sellers
                  </a>
                  <a className="block px-4 py-3 text-sm hover:bg-black/5" href="#trust">
                    Shipping & returns
                  </a>
                </div>
              ) : null}
            </div>

            <a className="text-sm text-black/70 hover:text-black" href="#featured">
              New in
            </a>
            <a className="text-sm text-black/70 hover:text-black" href="#bestsellers">
              Best sellers
            </a>
          </nav>

          {/* Search (controlled) */}
          <div className="hidden w-full max-w-md md:block">
            <label className="sr-only" htmlFor="search">
              Search products
            </label>
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
              <span className="text-xs text-black/40">⌕</span>
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search rings, bands, necklaces…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
              />
              {query ? (
                <button
                  type="button"
                  className="text-xs text-black/50 hover:text-black"
                  onClick={() => onQueryChange("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" aria-label="Sign in">
              Sign in
            </Button>

            <Button variant="secondary" className="rounded-full px-4 py-2 text-sm" aria-label="Cart">
              Cart{" "}
              <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-xs text-white">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <label className="sr-only" htmlFor="search-mobile">
            Search products
          </label>
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
            <span className="text-xs text-black/40">⌕</span>
            <input
              id="search-mobile"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
            />
            {query ? (
              <button
                type="button"
                className="text-xs text-black/50 hover:text-black"
                onClick={() => onQueryChange("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
