import CustomCarousel from "../custom-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import Image, { StaticImageData } from "next/image";

function LogoLoop({
  logos,
  ariaLabel,
}: {
  logos: { logo: StaticImageData; title: string }[];
  ariaLabel: string;
}) {
  return (
    <CustomCarousel ariaLabel={ariaLabel}>
      {logos.map((logo, index) => (
        <CarouselItem
          key={index}
          className="xs:basis-1/3 basis-1/2 pl-1 sm:basis-1/3"
        >
          <div className="p-1">
            <div>
              <div className="group flex w-max items-center gap-2">
                <div className="relative size-6 lg:size-8">
                  <Image
                    src={logo.logo}
                    role="presentation"
                    alt=""
                    fill
                    sizes={
                      logo.title === "Next.js"
                        ? "(min-width: 1024px) 25vw, (min-width: 768px) 33.33vw, (min-width: 640px) 25vw, 33.33vw"
                        : undefined
                    }
                    className="object-contain opacity-70 transition-transform transition-discrete duration-300 group-hover:scale-105 group-hover:opacity-100 group-active:scale-105 group-active:opacity-100"
                  />
                </div>
                <span className="cursor-default font-semibold text-black/70 font-stretch-semi-expanded transition-discrete duration-300 group-hover:text-black group-active:text-black sm:text-base md:text-sm lg:text-base dark:text-white/60 dark:group-hover:text-white dark:group-active:text-white">
                  {logo.title}
                </span>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CustomCarousel>
  );
}

export default LogoLoop;
