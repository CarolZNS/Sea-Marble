import classNames from "classnames";

export default function Box({ children, className, ...rest }) {
  const classes = classNames(
    "border rounded p-3 shadow bg-stone-50 w-full",
    className
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}
