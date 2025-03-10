import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StockProvider } from "@/context";
import { SideBarMenuModal } from "@/molecules/SideBarMenuModal";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import('@/molecules/NavBar'), {
  ssr: false,
});

const defaultUrl = process.env.PROD_DOMAIN
? `https://${process.env.PROD_DOMAIN}`
: "http://localhost:3000";


const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StockProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} flex w-full flex-col relative`}>
          <SideBarMenuModal></SideBarMenuModal>
          <Suspense fallback={
            <nav className="flex w-full bg-black h-[50px]">

            </nav>
          }>
            <NavBar baseUrl={defaultUrl} />
          </Suspense>
            {children}
        </body>
      </StockProvider>
    </html>
  );
}
