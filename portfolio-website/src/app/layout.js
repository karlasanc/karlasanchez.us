import { Gabriela, Rum_Raisin, Caveat_Brush, Montserrat } from "next/font/google";
import "./globals.css";

// Primary font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

// Primary heading font
const gabriela = Gabriela({
  variable: "--font-gabriela",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// display header display fonts
const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
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

export const metadata = {
  title: "Karla Sanchez Portfolio",
  description: "Professional portfolio showcasing software application development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${gabriela.variable}  ${caveatBrush.variable} ${rumRaisin.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
