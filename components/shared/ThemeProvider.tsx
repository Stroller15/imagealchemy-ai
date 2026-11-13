"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Light, dark or system, stored per browser. Adds `.dark` to <html>. */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
