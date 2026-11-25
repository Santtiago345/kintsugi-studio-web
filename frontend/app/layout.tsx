import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kintsugi Studio — La belleza de renacer",
  description:
    "Kintsugi Studio es un estudio de belleza y transformación en Bogotá. Reserva tu cita en línea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-ink font-sans text-pearl antialiased">{children}</body>
    </html>
  );
}
