import Image from "next/image";
import { site } from "@/data/site";

export const metadata = {
  title: "Order | Pollos A La Brasa El Chalan",
  description:
    "Order pickup or delivery by phone, or order online through SkyTab. East Boston Peruvian charcoal chicken.",
};

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-7 w-7"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconCart({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-7 w-7"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconTruck({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1h9M4 13a3 3 0 006 0m0 0a3 3 0 106 0m-6-6h.01M17 16h.01" />
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

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/chicken.jpg"
            alt=""
            fill
            className="object-cover grayscale"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/90 to-[#121212]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Order with us
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-white/85">
            Pickup and delivery by phone, or order online through SkyTab. We&apos;re ready when you are.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Main order options */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Call to order — primary */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#C62828]/20 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#C62828]/30">
            <div className="p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C62828] text-white">
                <IconPhone />
              </div>
              <h2 className="text-xl font-bold text-[#121212]">Order by phone</h2>
              <p className="mt-2 text-[#5c5c5c]">
                Call for pickup or delivery. Our team will take your order and confirm timing.
              </p>
              <div className="mt-6 space-y-3">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C62828] px-5 py-4 font-semibold text-white transition-colors hover:bg-[#A31F1F]"
                  >
                    <IconPhone className="h-5 w-5" />
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Order online */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:shadow-lg hover:border-black/15">
            <div className="p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#121212] text-white">
                <IconCart />
              </div>
              <h2 className="text-xl font-bold text-[#121212]">Order online</h2>
              <p className="mt-2 text-[#5c5c5c]">
                Use SkyTab for takeout or dine-in. Pay online and pick your time.
              </p>
              <a
                href={site.orderOnlineUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#121212] bg-transparent px-5 py-4 font-semibold text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
              >
                Open SkyTab
                <IconExternal />
              </a>
            </div>
          </div>
        </div>

        {/* Delivery info — elegant strip */}
        <div className="mt-10 rounded-2xl border border-black/8 bg-[#FFF4E0]/60 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
              <IconTruck />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#121212]">Delivery</h3>
              <p className="mt-2 text-[#5c5c5c]">
                Delivery is provided by our team. Please call to confirm availability and delivery area. We&apos;ll give you an estimate when you order.
              </p>
            </div>
          </div>
        </div>

        {/* How to order — clean steps */}
        <div className="mt-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-[#5c5c5c]">
            How to order
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="relative text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C62828]/30 bg-[#FFF4E0]/80 text-sm font-bold text-[#C62828]">
                1
              </span>
              <h3 className="mt-4 font-semibold text-[#121212]">Choose how to order</h3>
              <p className="mt-2 text-sm text-[#5c5c5c]">
                Call us or use SkyTab online.
              </p>
            </div>
            <div className="relative text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C62828]/30 bg-[#FFF4E0]/80 text-sm font-bold text-[#C62828]">
                2
              </span>
              <h3 className="mt-4 font-semibold text-[#121212]">Pick your favorites</h3>
              <p className="mt-2 text-sm text-[#5c5c5c]">
                Pollo a la brasa, sides, and more.
              </p>
            </div>
            <div className="relative text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C62828]/30 bg-[#FFF4E0]/80 text-sm font-bold text-[#C62828]">
                3
              </span>
              <h3 className="mt-4 font-semibold text-[#121212]">Pickup or delivery</h3>
              <p className="mt-2 text-sm text-[#5c5c5c]">
                We&apos;ll have it ready for you.
              </p>
            </div>
          </div>
        </div>

        {/* Address reminder */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#5c5c5c]">
            Pickup at <span className="font-medium text-[#121212]">{site.addressLine}</span>
          </p>
        </div>
      </div>
    </>
  );
}
