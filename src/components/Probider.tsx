"use client"
import React from "react";
import { SessionProvider } from "next-auth/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";

// type Props = {
//   children: React.ReactNode;
// };

export default function Probider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
