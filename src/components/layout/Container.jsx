export function Container({ className = "", children, as: Comp = "div" }) {
  return (
    <Comp className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </Comp>
  );
}
