import Metrics from "@/components/Metrics";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

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
        <Metrics />
      </body>
    </html>
  );
}
