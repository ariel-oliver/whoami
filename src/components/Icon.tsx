import type { Service } from "@/data/profile";

const paths: Record<Service["icon"], React.ReactNode> = {
  agent: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 12h.01M15 12h.01M9.5 16h5" />
    </>
  ),
  cloud: <path d="M7 18a5 5 0 1 1 .9-9.92A6 6 0 0 1 19 10a4 4 0 0 1-1 7.87V18H7Z" />,
  k8s: (
    <>
      <path d="m12 2.5 8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4L12 2.5Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  pipeline: (
    <>
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M7.5 12h4l5-6M11.5 12l5 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.5c-.5-.9-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.6-2.5-1.5M12 6.5V8M12 16v1.5" />
    </>
  ),
};

export function Icon({ name }: { name: Service["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
      {paths[name]}
    </svg>
  );
}
