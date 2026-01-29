import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact | Pollos A La Brasa El Chalan",
  description:
    "Call to order pickup or delivery. Visit us at 405 Chelsea St, East Boston. Hours, map, and contact info.",
};

function IconPhone() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ContactPage() {
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Pollos+A+La+Brasa+El+Chalan+East+Boston";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[280px] w-full overflow-hidden md:h-[340px]">
        <Image
          src="/images/hero.jpg"
          alt="Pollos El Chalan - Peruvian chicken"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#121212]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center text-white">
          <Image
            src="/images/logo.png"
            alt="Pollos A La Brasa El Chalan"
            width={200}
            height={60}
            className="h-14 w-auto object-contain drop-shadow-lg md:h-16"
          />
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-3 max-w-md text-lg text-white/90">
            Call to order pickup or delivery. Visit us in East Boston for the best Peruvian
            charcoal chicken.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Illustrated strip */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border-2 border-[#C62828]/15 bg-[#FFF4E0]/80 px-6 py-6 md:gap-12 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C62828]/15 text-2xl">
              🍗
            </span>
            <span className="font-semibold text-[#121212]">Fresh charcoal chicken</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C62828]/15 text-2xl">
              👨‍👩‍👧‍👦
            </span>
            <span className="font-semibold text-[#121212]">Family recipes</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C62828]/15 text-2xl">
              📍
            </span>
            <span className="font-semibold text-[#121212]">East Boston</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={`tel:${site.phones[0]}`}
            className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-[#C62828]/20 bg-white p-6 text-center shadow-sm transition-all hover:border-[#C62828] hover:shadow-md hover:shadow-[#C62828]/10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C62828] text-white transition-transform group-hover:scale-110">
              <IconPhone />
            </span>
            <div>
              <h2 className="font-semibold text-[#121212]">Call to order</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">Pickup & delivery by phone</p>
              <p className="mt-2 font-mono text-lg font-semibold text-[#C62828]">{site.phones[0]}</p>
            </div>
          </a>

          <Link
            href={site.orderOnlineUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-black/10 bg-white p-6 text-center shadow-sm transition-all hover:border-[#C62828]/40 hover:shadow-md"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#121212] text-white transition-transform group-hover:scale-110">
              <IconCart />
            </span>
            <div>
              <h2 className="font-semibold text-[#121212]">Order online</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">SkyTab ordering</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#C62828]">
                Order now <IconExternal />
              </span>
            </div>
          </Link>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-black/10 bg-white p-6 text-center shadow-sm transition-all hover:border-[#C62828]/40 hover:shadow-md"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#121212] text-white transition-transform group-hover:scale-110">
              <IconMapPin />
            </span>
            <div>
              <h2 className="font-semibold text-[#121212]">Get directions</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">405 Chelsea St, East Boston</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#C62828]">
                Open in Maps <IconExternal />
              </span>
            </div>
          </a>
        </div>

        {/* Info + Map grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {/* Address */}
            <div className="flex gap-4 rounded-2xl border border-black/8 bg-[#FFF4E0]/50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                <IconMapPin />
              </span>
              <div>
                <h3 className="font-semibold text-[#121212]">Address</h3>
                <p className="mt-1 text-[#5c5c5c]">{site.addressLine}</p>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#C62828] hover:underline"
                >
                  View on Google Maps <IconExternal />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 rounded-2xl border border-black/8 bg-[#FFF4E0]/50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                <IconClock />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-[#121212]">Hours</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#5c5c5c]">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-[#121212]">
                        {h.open} – {h.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* All phones + Email */}
            <div className="flex gap-4 rounded-2xl border border-black/8 bg-[#FFF4E0]/50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                <IconPhone />
              </span>
              <div>
                <h3 className="font-semibold text-[#121212]">Phone</h3>
                <p className="mt-1 text-sm text-[#5c5c5c]">Call to order pickup or delivery.</p>
                <div className="mt-3 space-y-2">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="block rounded-lg bg-[#C62828] px-4 py-2.5 text-center font-semibold text-white transition-colors hover:bg-[#A31F1F]"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-black/8 bg-[#FFF4E0]/50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                <IconMail />
              </span>
              <div>
                <h3 className="font-semibold text-[#121212]">Email</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-medium text-[#C62828] hover:underline"
                >
                  {site.email}
                </a>
                <p className="mt-1 text-sm text-[#5c5c5c]">For catering and general inquiries.</p>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-black/8 bg-[#121212] p-5 text-white">
              <h3 className="font-semibold">Follow us</h3>
              <p className="mt-1 text-sm text-white/70">Stay updated on specials and news.</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#C62828]"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#C62828]"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-black/10 shadow-md">
              <div className="flex items-center justify-between border-b border-black/10 bg-[#FFF4E0]/60 px-4 py-3">
                <h3 className="font-semibold text-[#121212]">Find us</h3>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#C62828] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A31F1F]"
                >
                  Open in Google Maps <IconExternal />
                </a>
              </div>
              <iframe
                title="Google Map - Pollos El Chalan"
                src={site.mapEmbedUrl}
                className="h-[400px] w-full md:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center text-sm text-[#5c5c5c]">
              No reservations. Walk-ins welcome. Phone orders for pickup and delivery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
