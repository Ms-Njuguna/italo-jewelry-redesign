import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <Container className="py-12">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">Italo Jewelry — Redesign Concept</p>
              <p className="mt-2 text-xs text-black/60">
                Unofficial concept for portfolio/demo purposes.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-black/70">
              <a className="hover:text-black" href="#">
                Shipping
              </a>
              <a className="hover:text-black" href="#">
                Returns
              </a>
              <a className="hover:text-black" href="#">
                Contact
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
