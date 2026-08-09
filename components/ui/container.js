// The design puts every block in a 1280px column with 48px gutters. The repo's
// `container` utility already centers and caps at max-w-screen-xl (1280px), so
// this only widens the gutter at desktop.
export default function Container({ className = "", children }) {
  return (
    <div className={`container max-w-screen-xl lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
