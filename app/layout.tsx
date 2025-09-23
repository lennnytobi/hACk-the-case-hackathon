import "./globals.css";
import React from "react";
export const metadata = {
  title: "Hack the Case",
  description: "Hackathon event website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


