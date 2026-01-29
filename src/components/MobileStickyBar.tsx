import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl border-t border-white/10 bg-[#121212]/95 backdrop-blur-lg pb-safe">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${site.phones[0]}`}
            className="group flex flex-col items-center justify-center gap-1 py-3 text-[10px] font-medium text-white/80 active:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1 h-6 w-6 opacity-80 transition-opacity group-active:opacity-100"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>
          <a
            href={site.orderOnlineUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-1 border-x border-white/5 py-3 text-[10px] font-medium text-white/80 active:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1 h-6 w-6 opacity-80 transition-opacity group-active:opacity-100"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Order
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              site.addressLine
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-1 py-3 text-[10px] font-medium text-white/80 active:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1 h-6 w-6 opacity-80 transition-opacity group-active:opacity-100"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Directions
          </a>
        </div>
      </div>
    </div>
  );
}
