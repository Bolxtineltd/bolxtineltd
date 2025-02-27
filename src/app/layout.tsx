import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title:
    "Bolxtine Ltd is a leading provider of software development, web app development, mobile app development, and IT consultancy services | Home Page",
  description:
    "Bolxtine Ltd is a leading provider of software development, web app development, mobile app development, and IT consultancy services. With a team of experienced professionals and a proven track record, we are dedicated to delivering high-quality solutions that meet the unique needs of our client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-spaceGrotesk`}>
      <body className="overflow-x-hidden">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
