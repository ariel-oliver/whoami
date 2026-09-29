import { stack, certifications, education } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <ul
        className="marquee flex shrink-0 gap-3 pr-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
        aria-hidden={reverse}
      >
        {doubled.map((t, i) => (
          <li key={`${t}-${i}`} className="card rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-ink/85">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Stack() {
  const half = Math.ceil(stack.length / 2);
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader eyebrow="Toolbox" title="Fluent in the modern cloud stack." />
      </div>
      <div className="space-y-3">
        <Row items={stack.slice(0, half)} />
        <Row items={stack.slice(half)} reverse />
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 md:grid-cols-2 md:px-6">
        <Reveal className="card rounded-3xl p-8">
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase">Certifications</p>
          <ul className="space-y-5">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-dim">{c.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{c.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="card rounded-3xl p-8">
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase">Education & languages</p>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-dim">{e.school}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{e.date}</span>
              </li>
            ))}
            <li>
              <p className="font-medium">Portuguese · English</p>
              <p className="text-sm text-dim">Native · Professional — daily work with teams in the US, India and Europe</p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
