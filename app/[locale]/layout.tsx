import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../_fonts/font";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "../_components/ui/navbar/navbar";
import { ThemeProvider } from "../_components/theme-provider";
import Footer from "../_components/ui/footer/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s - Marco De Falco",
    default: "Marco De Falco",
  },
  applicationName: "Marco De Falco",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Supabase",
    "Web developer",
  ],
  creator: "Marco De Falco",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black antialiased dark:text-white`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            <main className="[--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)]">
              {children}
            </main>

            <Footer />

            <Toaster position="top-right" richColors closeButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
