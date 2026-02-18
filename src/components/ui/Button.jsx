import { cn } from "../../lib/cn";

export default function Button({
  as: Comp = "button",
  className = "",
  variant = "primary", // primary | secondary | ghost
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20";

  const styles = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-black/5",
  };

  return <Comp className={cn(base, styles[variant], className)} {...props} />;
}
