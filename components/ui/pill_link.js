import Link from "next/link";

// Rounded-full CTA. Every instance in the design uses slightly different
// padding and text size, so those stay in className — only the colour
// treatment is a variant.
const VARIANTS = {
  amber: "bg-amber text-ink hover:brightness-95",
  outline: "text-ink border border-ink/30 hover:border-olive",
  ink: "bg-ink text-cream hover:brightness-125",
};

export default function PillLink({
  href,
  variant = "amber",
  className = "px-6 py-4 text-base",
  children,
}) {
  const classes = `inline-block rounded-full font-plex font-medium leading-none whitespace-nowrap transition ${VARIANTS[variant]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
