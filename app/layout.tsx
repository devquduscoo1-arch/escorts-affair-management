import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escorts Affair Management",
  description: "Escorts Affair Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
