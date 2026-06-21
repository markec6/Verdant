export default function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = "",
  isLoading = false,
  onClick,
  type = "button",
}) {
  const content = (
    <>
      {isLoading ? <span className="btn__spinner" aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  if (onClick || type === "submit") {
    return (
      <button
        className={`btn btn-${variant} ${className}`.trim()}
        disabled={isLoading}
        onClick={onClick}
        type={type}
      >
        {content}
      </button>
    );
  }

  return (
    <a className={`btn btn-${variant} ${className}`.trim()} href={href}>
      {content}
    </a>
  );
}
