import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ShareNomad", description: "Shareholder benefits for global living and travel" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
