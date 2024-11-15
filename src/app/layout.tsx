import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/providers/Providers";

const metropolisRegular = localFont({
  src: "../fonts/Metropolis-Regular.otf",
  variable: "--font-metropolis-regular",
  weight: "400",
})
const metropolisSemiBold = localFont({
  src: "../fonts/Metropolis-SemiBold.otf",
  variable: "--font-metropolis-semibold",
  weight: "700",
})
const metropolisBold = localFont({
  src: "../fonts/Metropolis-Bold.otf",
  variable: "--font-metropolis-bold",
  weight: "900",
})
const metropolisLight = localFont({
  src: "../fonts/Metropolis-Light.otf",
  variable: "--font-metropolis-light",
  weight: "300",
})
const metropolisExtraLight = localFont({
  src: "../fonts/Metropolis-ExtraLight.otf",
  variable: "--font-metropolis-extralight",
  weight: "200",
})
const metropolisRegularItalic = localFont({
  src: "../fonts/Metropolis-RegularItalic.otf",
  variable: "--font-metropolis-regular-italic",
  weight: "400",
})



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
      <body
        className={` 
          ${metropolisRegular.variable} 
          ${metropolisSemiBold.variable} 
          ${metropolisBold.variable} 
          ${metropolisLight.variable} 
          ${metropolisExtraLight.variable} 
          ${metropolisRegularItalic.variable}
          antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
