import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genesis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="theme-primary">{children}</div>
      </body>
    </html>
  );
}
