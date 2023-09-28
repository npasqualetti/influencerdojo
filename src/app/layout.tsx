// @ts-nocheck

import Sidebar from "../components/sidebar";
import { Footer}  from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Influencer Dojo Demo',
  description: 'Search 100K+ curated and weekly updated leads from over 15M+ TikTok, Youtube, and Instagram profiles.',
  icons: '/logo.png'
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = {}
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, "dark:bg-black bg-white")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <div className="w-full relative">
            <div className="flex sm:flex-row flex-col items-start sm:gap-x-8">
              <Sidebar session={session} />
              <div className="w-full ">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}