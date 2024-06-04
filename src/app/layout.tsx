import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierce Hahn",
  description: "My Web Portfolio",
  openGraph: {
    type: "website",
    url: "https://pierce-hahn.vercel.app/",
    title: "Pierce Hahn",
    description: "My Web Portfolio",
    siteName: "Pierce Hahn",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/96740762?v=4",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>{children}</body>
    </html>
  );
}
