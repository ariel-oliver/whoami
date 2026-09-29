import { Nav } from "@/components/Nav";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Statement } from "@/components/Statement";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Stack } from "@/components/Stack";
import { Engage } from "@/components/Engage";
import { profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "PT" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Platform Engineering", "DevOps", "Kubernetes", "Terraform", "AWS", "Azure", "GCP", "AI Agents", "MCP"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Metrics />
        <Statement />
        <Services />
        <Projects />
        <Timeline />
        <Stack />
        <Engage />
      </main>
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-dim md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <div className="flex gap-6">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
