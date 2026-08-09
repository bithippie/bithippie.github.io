import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

// Case studies is intentionally absent until the page has real content.
const PAGES = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Engagement", href: "/engagement" },
  { label: "Team", href: "/team" },
  { label: "Schedule", href: "/schedule" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bithippie/" },
  { label: "YouTube", href: "https://www.youtube.com/@BrainwaveExchange" },
  { label: "Spotify", href: "https://open.spotify.com/show/55k8tssP1aOA06aZr3MsVQ" },
  {
    label: "Apple",
    href: "https://podcasts.apple.com/us/podcast/brainwave-exchange/id1710255399",
  },
];

export default function Footer() {
  return (
    <footer className="bg-night">
      <Container className="pt-16 pb-10 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <Image
              src="/assets/images/logo-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-[34px] w-[34px]"
            />
            <Image
              src="/assets/images/logo-wordmark-light.svg"
              alt="BitHippie"
              width={132}
              height={28}
              className="h-7 w-auto relative top-[2.6px]"
            />
          </div>
          <p className="font-plex text-[15px] leading-relaxed text-night-text max-w-[320px]">
            Trusting in Nature&apos;s Wisdom, complemented by human ingenuity.
          </p>
        </div>

        <div>
          <Eyebrow tone="olive" className="mb-4">
            Pages
          </Eyebrow>
          <div className="flex flex-col gap-2.5">
            {PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="font-plex text-[15px] leading-none text-night-link hover:text-amber"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow tone="olive" className="mb-4">
            Join the socials
          </Eyebrow>
          <p className="font-plex text-[15px] leading-relaxed text-night-text max-w-[300px] mb-3.5">
            Check out the{" "}
            <a
              href="https://www.youtube.com/@BrainwaveExchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-night-link"
            >
              Brainwave Exchange Podcast
            </a>{" "}
            where we talk to humans making their mark on the world.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-plex text-sm leading-none text-night-link hover:text-amber"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="pb-10">
        <div className="border-t border-cream/10 pt-5 font-plex text-[13px] leading-none text-night-faint">
          &copy; {new Date().getFullYear()} BitHippie LLC. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
