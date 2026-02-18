import Container from "../ui/Container";

const items = [
  { title: "Free worldwide shipping", desc: "Clear value up-front" },
  { title: "60-day returns", desc: "Lower purchase anxiety" },
  { title: "1-year warranty", desc: "Confidence signal" },
  { title: "Secure checkout", desc: "Trust + safety" },
];

export default function TrustBar() {
  return (
    <section className="border-t border-black/10">
      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-black/10 p-5">
              <p className="text-sm font-semibold">{i.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-black/60">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
