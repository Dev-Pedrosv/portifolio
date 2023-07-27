import ToastProvider from "@/providers/toast";
import "./globals.css";
import "./swipper.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pedro Silva Portfolio",
  description: "Create by Pedro Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
