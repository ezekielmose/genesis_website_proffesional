export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section border-b border-[var(--line)]">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h2 mt-6 max-w-4xl">{title}</h1>
        <p className="lead mt-6 max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
