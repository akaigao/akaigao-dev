import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
export const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGÃO - Dev & Design",
  description: "Igão's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
