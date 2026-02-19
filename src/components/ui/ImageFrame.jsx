import { cn } from "../../lib/cn";

export default function ImageFrame({
  className = "",
  ratio = "square", // square | portrait | landscape | wide
  rounded = "3xl", // 2xl | 3xl
  label,
  subtle = false,
  src,
  alt = "",
}) {
  const ratios = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  };

  const radius = rounded === "2xl" ? "rounded-2xl" : "rounded-3xl";

  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-black/10 bg-white",
        radius,
        ratios[ratio],
        className
      )}
    >
      {/* Base “luxury” gradient */}
      <div
        className={cn(
          "absolute inset-0",
          subtle
            ? "bg-linear-to-br from-black/3 via-black/1 to-black/6"
            : "bg-linear-to-br from-black/5 via-black/1.5 to-black/8"
        )}
      />

      {/* Fine texture using layered gradients (no images needed) */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_90%,rgba(0,0,0,0.05),transparent_55%)]" />
      </div>

      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            "transition duration-700 group-hover:scale-[1.03]"
          )}
        />
      ) : null}

      {/* Shine hover */}
      <div className="absolute -inset-x-24 -inset-y-10 rotate-12 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="h-full w-full bg-linear-to-r from-transparent via-white/35 to-transparent" />
      </div>

      {/* Inner border for “premium glass” effect */}
      <div className={cn("absolute inset-0", radius, "ring-1 ring-inset ring-black/5")} />

      {/* Optional label */}
      {label ? (
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
