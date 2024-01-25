import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import StoreProvider from "@/components/extras/storeProvider";
import AuthProvider from "@/components/common/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "real-state project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/6c472e59d1.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}