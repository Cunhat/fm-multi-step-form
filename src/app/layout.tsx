import { cn } from "@/lib/utils";
import "./globals.css";

import localFont from "next/font/local";

const fontBold = localFont({
  src: "../assets/fonts/Ubuntu-Bold.ttf",
  variable: "--font-ubuntu-bold",
});
const fontMedium = localFont({
  src: "../assets/fonts/Ubuntu-Medium.ttf",
  variable: "--font-ubuntu-medium",
});
const fontRegular = localFont({
  src: "../assets/fonts/Ubuntu-Bold.ttf",
  variable: "--font-ubuntu-regular",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-ubuntu-regular antialiased",
          fontBold.variable,
          fontMedium.variable,
          fontRegular.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
