"use client";

import { ReactNode, useRef } from "react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export default function CustomCarousel({
  ariaLabel,
  children,
}: {
  ariaLabel: string;
  children: ReactNode;
}) {
  const plugin = useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  );

  return (
    <div className="order-1 w-full overflow-hidden mask-x-from-96% mask-x-to-100% md:order-2">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        aria-label={ariaLabel}
      >
        <CarouselContent className="-ml-1">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}
