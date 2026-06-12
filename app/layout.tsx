import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import GsapProvider from "@/components/GsapProvider";
import Navbar from "@/components/Navbar";
import IntroOverlay from "@/components/IntroOverlay";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nyima | Full stack developer and UI designer",
  description:
    "Full-stack developer & UI designer building products from Figma to deployment. See projects: Dogear, RentLocals, DeepLock, Lineup.",
  openGraph: {
    siteName: "Nyima",
    title: "Nyima — Full-Stack Developer & Designer",
    description:
      "Full-stack developer and UI designer. I build products end-to-end, from Figma to deployment.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-primary-100 
      bg-[radial-gradient(rgba(197,197,195,0.7)_2px,transparent_2px)] bg-size-[40px_40px] text-foreground"
      >
        <GsapProvider>
          <Navbar />
          <IntroOverlay />
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
