import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "VERDANT | Preciznost u svakom pokretu",
  description: "Profesionalno održavanje dvorišta u Beogradu.",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${outfit.variable} ${plusJakarta.variable}`}
      lang="sr"
      suppressHydrationWarning
    >
      <body className={plusJakarta.className} suppressHydrationWarning>
        <div suppressHydrationWarning>
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
