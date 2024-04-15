import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mario Wilk",
  description: "Portfolio of Mario Wilk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
