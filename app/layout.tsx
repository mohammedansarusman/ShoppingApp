import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./components/navigation/NavigationBar";
import { ProviderTanStack } from "./components/general/ProviderTanStack";
import { ProviderRedux } from "./components/general/ProviderRedux";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Very Online Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ProviderRedux>
          <ProviderTanStack>
            <NavigationBar/>
            {children}
        </ProviderTanStack>
      </ProviderRedux>  
      
      </body>
    </html>
  );
}
