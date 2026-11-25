export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center">
      <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
        Bogotá · Belleza y transformación
      </span>
      <h1 className="font-display text-5xl font-medium leading-none md:text-7xl">
        La belleza <em className="text-champagne">de renacer.</em>
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Kintsugi Studio. Esqueleto del sitio público: esta vista se reemplaza por
        el home con reserva, servicios y galería de la Fase 1.
      </p>
      <a
        href="#reservar"
        className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink"
      >
        Reservar mi cita
      </a>
    </main>
  );
}
