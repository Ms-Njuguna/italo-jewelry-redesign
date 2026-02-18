import Container from "../ui/Container";

export default function AnnouncementBar() {
  return (
    <div className="border-b border-black/10 bg-white">
      <Container className="py-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-black/70">
          <span className="font-medium text-black/80">Free worldwide shipping</span>
          <span className="hidden sm:inline text-black/30">•</span>
          <span>60-day returns</span>
          <span className="hidden sm:inline text-black/30">•</span>
          <span>1-year warranty</span>
        </div>
      </Container>
    </div>
  );
}
