import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide">ITALO</span>
            <span className="text-xs text-black/50">Redesign</span>
          </a>

          {/* Search (MVP, no logic yet) */}
          <div className="hidden w-full max-w-md md:block">
            <label className="sr-only" htmlFor="search">
              Search products
            </label>
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
              <span className="text-xs text-black/40">⌕</span>
              <input
                id="search"
                type="search"
                placeholder="Search rings, bands, necklaces…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
              aria-label="Sign in"
            >
              Sign in
            </Button>

            <Button
              variant="secondary"
              className="rounded-full px-4 py-2 text-sm"
              aria-label="Cart"
            >
              Cart <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-xs text-white">0</span>
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
              placeholder="Search products…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
