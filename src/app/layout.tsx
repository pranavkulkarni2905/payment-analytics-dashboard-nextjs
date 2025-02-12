import type { Metadata } from "next";
import Sidebar from "../app/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analytical Dashboard",
  description: "A professional analytics dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
