import type { Metadata } from "next";

import "../globals.css";
import { geistMono, geistSans } from "../_fonts/font";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

import { notFound } from "next/navigation";

import { ThemeProvider } from "../_components/theme-provider";

import Navbar from "../_components/ui/navbar/navbar";
import Footer from "../_components/ui/footer/footer";

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: "%s - Marco De Falco",
    default: "Marco De Falco",
  },
  metadataBase: new URL("https://marcodefalco.dev"),
  alternates: {
    canonical: "/",
    languages: {
      it: "/it",
      en: "/en",
    },
  },
  applicationName: "Marco De Falco",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Marco De Falco",
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Supabase",
    "web development",
    "responsive design",
    "portfolio developer",
    "sviluppatore web",
    "programmatore front-end",
    "developer portfolio",
    "sviluppatore React",
  ],
  creator: "Marco De Falco",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      nositelinkssearchbox: true,
      notranslate: true,
    },
  },
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
        className={`${geistSans.variable} ${geistMono.variable} highlight antialiased`}
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

            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
