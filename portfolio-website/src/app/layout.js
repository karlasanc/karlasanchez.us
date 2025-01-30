import { Gabriela, Rum_Raisin, Caveat_Brush, Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const gabriela = Gabriela({
  variable: "--font-gabriela",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const rumRaisin = Rum_Raisin({
  variable: "--font-rum-raisin",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karla Sanchez Portfolio",
  description: "Professional portfolio showcasing software application development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rumRaisin.variable} ${caveatBrush.variable} ${gabriela.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
