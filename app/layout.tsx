import "../styles/globals.css";
import "@radix-ui/themes/styles.css";

import React from "react";
import { Theme } from "@radix-ui/themes";


export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark">{children}</Theme>
      </body>
    </html>
  );
}
