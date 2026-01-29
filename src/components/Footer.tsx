import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#121212] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="mt-2 text-sm text-white/80">{site.addressLine}</div>
          <div className="mt-3 space-y-1 text-sm">
            {site.phones.map((p) => (
              <div key={p}>
                <a className="text-white/90 hover:text-white" href={`tel:${p}`}>
                  {p}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Hours</div>
          <div className="mt-2 space-y-1 text-sm text-white/80">
            <div>Mon–Thu: 9:00 AM – 9:30 PM</div>
            <div>Fri–Sun: 9:00 AM – 10:30 PM</div>
          </div>

          <div className="mt-4 text-sm">
            <a className="text-white/90 hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Links</div>
          <div className="mt-2 space-y-2 text-sm">
            <Link className="block text-white/85 hover:text-white" href="/menu">
              Menu
            </Link>
            <Link className="block text-white/85 hover:text-white" href="/catering">
              Catering
            </Link>
            <a className="block text-white/85 hover:text-white" href={site.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="block text-white/85 hover:text-white" href={site.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>

            <div className="pt-2 text-white/70">
              Gift Cards — Coming Soon<br />
              Rewards Program — Coming Soon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
