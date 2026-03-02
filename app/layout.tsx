import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import BottomNav from "@/components/BottomNav";
import BadgeToast from "@/components/BadgeToast";

export const metadata: Metadata = {
  title: "Concept Clarity – Learn Simply",
  description: "Clear, simple learning for students. No login needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-20">
        <Providers>
          {children}
          <BadgeToast />
        </Providers>
        <BottomNav />
      </body>
    </html>
  );
}
