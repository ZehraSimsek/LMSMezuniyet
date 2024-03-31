// "use client"
// import "../styles/globals.css"
// import { ThemeProvider } from "next-themes"
// import { ClerkProvider} from "@clerk/nextjs";
// import { trTR } from "@clerk/localizations";


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (

//       <html lang="tr">
//         {}
//         <head />
//         <ClerkProvider
//           localization={trTR}
//          >
//         <body className="dark:bg-slate-700">
//          <ThemeProvider enableSystem={true} attribute="class">
//             {children}
//           </ThemeProvider> 
//         </body>
//        </ClerkProvider>
//       </html>

//   )
// }

"use client"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs";
import { trTR } from "@clerk/localizations";
import { UserRoleProvider } from './context/UserRoleContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head />
      <ClerkProvider localization={trTR}>
        <UserRoleProvider>
          {children}
        </UserRoleProvider>
      </ClerkProvider>
    </html>
  )
}