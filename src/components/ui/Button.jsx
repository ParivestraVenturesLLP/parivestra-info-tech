import { forwardRef } from "react";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-ink text-paper hover:bg-accent-hover border border-ink hover:border-accent-hover",
  accent:
    "bg-accent text-paper hover:bg-accent-hover border border-accent hover:border-accent-hover",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink/5",
  ghost: "bg-transparent text-ink-muted hover:text-ink hover:bg-ink/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export const Button = forwardRef(function Button(
  { as = "button", to, href, variant = "primary", size = "md", className = "", children, ...props },
  ref
) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Comp = as;
  return (
    <Comp ref={ref} className={classes} {...props}>
      {children}
    </Comp>
  );
});
