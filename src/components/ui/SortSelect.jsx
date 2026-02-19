export default function SortSelect({ value, onChange, options }) {
  return (
    <label className="flex items-center gap-3 text-xs text-black/60">
      <span className="hidden sm:inline">Sort</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/80 outline-none hover:bg-black/5"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
