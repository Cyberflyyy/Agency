import type { Metadata } from "next";

import "./globals.css";
// import SmoothScroll from "./components/smooth_scrol";
import { Figtree } from "next/font/google";
import { AppProviders } from "./providers/app-providers";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vision Studio",
  description: "Tworzymy nowoczesne strony internetowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={` ${figtree.className} antialiased relative`}>
        <AppProviders>{children}</AppProviders>
        {/* <SmoothScroll /> */}

        <div
          className="fixed bottom-0 left-0 w-full h-[10vh] pointer-events-none z-50 
    backdrop-blur-md 
    [mask-image:linear-gradient(to_top,black,transparent)] 
    [mask-mode:match-source]"
        ></div>
      </body>
    </html>
  );
}
