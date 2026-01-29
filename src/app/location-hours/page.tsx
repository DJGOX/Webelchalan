import Image from "next/image";
import { site } from "@/data/site";

export const metadata = {
  title: "Location & Hours | Pollos A La Brasa El Chalan",
  description:
    "Find us at 405 Chelsea St, East Boston, MA. Opening hours and directions. Walk-ins welcome.",
};

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconExternal({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressLine)}`;

export default function LocationHoursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/85 to-[#121212]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Location & Hours
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Visit us in East Boston. Walk-ins welcome—no reservations needed.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-white/95 backdrop-blur-sm">
            <IconMapPin className="h-5 w-5 text-[#C62828]" />
            <span className="font-medium">{site.addressLine}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Map + CTA */}
        <div className="overflow-hidden rounded-2xl border border-black/10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 bg-[#FFF4E0]/80 px-4 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                <IconMapPin />
              </span>
              <div>
                <h2 className="font-semibold text-[#121212]">Find us</h2>
                <p className="text-sm text-[#5c5c5c]">{site.addressLine}</p>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C62828] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#A31F1F]"
            >
              Get directions
              <IconExternal />
            </a>
          </div>
          <iframe
            title="Google Map - Pollos El Chalan"
            src={site.mapEmbedUrl}
            className="h-[320px] w-full md:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Hours card */}
        <div className="mt-10 rounded-2xl border border-black/8 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
              <IconClock />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-[#121212]">Hours</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                We&apos;re open every day. No reservations—just come in.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-black/8">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 bg-[#FFF4E0]/50">
                      <th className="px-4 py-3 font-semibold text-[#121212]">Day</th>
                      <th className="px-4 py-3 font-semibold text-[#121212]">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/6">
                    {site.hours.map((h) => (
                      <tr key={h.day} className="transition-colors hover:bg-[#FFF4E0]/30">
                        <td className="px-4 py-3.5 text-[#5c5c5c]">{h.day}</td>
                        <td className="px-4 py-3.5 font-medium text-[#121212]">
                          {h.open} – {h.close}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Quick strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-[#C62828]/15 bg-[#FFF4E0]/60 px-6 py-6 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5c5c5c]">Address</p>
            <p className="mt-1 font-semibold text-[#121212]">{site.addressLine}</p>
          </div>
          <div className="h-8 w-px bg-black/15" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5c5c5c]">East Boston</p>
            <p className="mt-1 font-semibold text-[#121212]">Boston, MA</p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#121212] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C62828]"
          >
            Open in Maps
            <IconExternal className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
