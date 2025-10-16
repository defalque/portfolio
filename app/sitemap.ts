import { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";

const host = "https://marcodefalco.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: host,
      lastModified: new Date(),
      alternates: {
        languages: {
          it: host + getPathname({ locale: "it", href: "/" }),
          en: host + getPathname({ locale: "en", href: "/" }),
        },
      },
    },
    {
      url: host,
      lastModified: new Date(),
      alternates: {
        languages: {
          it: host + getPathname({ locale: "it", href: "/my-projects" }),
          en: host + getPathname({ locale: "en", href: "/my-projects" }),
        },
      },
    },
    {
      url: host,
      lastModified: new Date(),
      alternates: {
        languages: {
          it: host + getPathname({ locale: "it", href: "/contacts" }),
          en: host + getPathname({ locale: "en", href: "/contacts" }),
        },
      },
    },
  ];
}
