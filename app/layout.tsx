import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

export const metadata: Metadata = {
  title: "Thilawa Shipyard Corporate Portal",
  description:
    "Corporate portal for Thilawa Shipyard: 40,000 DWT dry dock, ship repair, new construction, QHSE, projects, and RFQ contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
