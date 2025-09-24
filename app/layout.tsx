import "./globals.css";
import React from "react";
export const metadata = {
  title: "Hack the Case",
  description: "Hackathon event website",
  icons: {
    icon: [
      { url: '/Logo_weiß.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo_weiß.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo_weiß.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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


