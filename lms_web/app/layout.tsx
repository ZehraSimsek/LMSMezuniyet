"use client"
import "../styles/globals.css"
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