import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import SocialIcons from "@/components/ui/SocialIcons";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=405+Chelsea+St,+East+Boston,+MA+02128";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#121212] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y contacto */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-white/75">
              Pollo a la brasa peruano en East Boston. Tradición, sabor y atención de familia.
            </p>
            <div className="mt-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/85 transition hover:text-white"
              >
                <span className="text-white/60">📍</span>
                {site.addressLine}
              </a>
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              {site.phones.map((p) => (
                <div key={p}>
                  <a
                    className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-white"
                    href={`tel:${p}`}
                  >
                    <span className="text-white/60">📞</span>
                    {p}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <a
                className="inline-flex items-center gap-1.5 text-sm text-white/90 transition hover:text-white"
                href={`mailto:${site.email}`}
              >
                <span className="text-white/60">✉️</span>
                {site.email}
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Horario
            </h3>
            <div className="mt-3 space-y-1.5 text-sm text-white/80">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="shrink-0 text-white/70">
                    {h.open} – {h.close}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Navegación
            </h3>
            <nav className="mt-3 space-y-2 text-sm">
              <Link className="block text-white/85 transition hover:text-white" href="/">
                Inicio
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/menu">
                Menú
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/order">
                Ordenar en línea
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/catering">
                Catering
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/location-hours">
                Ubicación y horarios
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/gallery">
                Galería
              </Link>
              <Link className="block text-white/85 transition hover:text-white" href="/contact">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Redes y más */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Síguenos
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Facebook, Instagram, TikTok, Linktree, Web
            </p>
            <SocialIcons variant="social" className="mt-3" />
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contacto
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Email, Teléfono, Web
            </p>
            <SocialIcons variant="contact" className="mt-3" />
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/70">
              <p className="font-medium text-white/80">Próximamente</p>
              <ul className="mt-1.5 space-y-1 text-white/60">
                <li>• Gift Cards</li>
                <li>• Programa de recompensas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>
            East Boston, MA · Pollo a la brasa peruano
          </p>
        </div>
      </div>
    </footer>
  );
}
