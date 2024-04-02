'use client'
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
         </ThemeProvider>
       </body>
       
    </html>
  );
}
