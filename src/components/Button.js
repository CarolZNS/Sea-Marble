import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    classNames("flex items-center px-3 py-2 rounded text-cyan-500", {
      "border border-cyan-500 bg-cyan-500 text-white": primary,
      "border border-tangerine bg-tangerine text-white": secondary,
      "border border-teal-400 bg-teal-400 text-white": success,
      "border border-orange-300 bg-orange-300 text-white": warning,
      "border border-rose-600 bg-rose-600 text-white": danger,
      "border rounded-full": rounded,
      "border bg-white": outline,
      "text-cyan-500": outline && primary,
      "text-tangerine": outline && secondary,
      "text-teal-400": outline && success,
      "text-orange-300": outline && warning,
      "text-rose-600": outline && danger,
    }, rest.className)
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
