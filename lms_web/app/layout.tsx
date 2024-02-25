"use client"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { ClerkProvider} from "@clerk/nextjs";
import { trTR } from "@clerk/localizations";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="tr">
        {}
        <head />
        <ClerkProvider
          // frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
          // navigate={(to) => window.location.href = to}
          localization={trTR}
         >
        <body className="dark:bg-slate-700">
         <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider> 
        </body>
       </ClerkProvider>
      </html>
    
  )
}
