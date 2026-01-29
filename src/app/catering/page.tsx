import CateringForm from "@/components/CateringForm";

export const metadata = {
  title: "Catering | Pollos A La Brasa El Chalan",
  description:
    "Request catering for your event. Corporate, family gatherings, and celebrations. Pickup or delivery in East Boston and surrounding areas.",
};

export default function CateringPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#121212] md:text-4xl">Catering</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-[#5c5c5c]">
          From office lunches to family celebrations—we’ll work with you on menu, quantity, and
          pickup or delivery. Fill out the form below and we’ll get back to you within 1–2 business
          days.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <CateringForm />

        <aside className="rounded-2xl border border-black/8 bg-[#121212] p-6 text-white lg:sticky lg:top-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
            How it works
          </h2>
          <ol className="mt-4 space-y-4 text-sm text-white/90">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C62828] text-xs font-bold">
                1
              </span>
              <span>Submit your catering request with date, guests, and preferences.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C62828] text-xs font-bold">
                2
              </span>
              <span>We’ll contact you to confirm menu, pricing, and pickup or delivery.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C62828] text-xs font-bold">
                3
              </span>
              <span>Enjoy Peruvian charcoal chicken and favorites at your event.</span>
            </li>
          </ol>
          <div className="mt-6 border-t border-white/15 pt-4 text-xs text-white/60">
            <p className="font-medium text-white/80">Minimum 10 guests for catering.</p>
            <p className="mt-1">Delivery area and fees depend on location.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
