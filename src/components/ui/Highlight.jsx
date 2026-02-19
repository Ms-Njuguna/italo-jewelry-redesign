export default function Highlight({ text, query }) {
  const q = String(query || "").trim();
  if (!q) return text;

  const lower = String(text).toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());

  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);

  return (
    <>
      {before}
      <mark className="rounded bg-black/10 px-1 py-0.5 text-black">
        {match}
      </mark>
      {after}
    </>
  );
}
