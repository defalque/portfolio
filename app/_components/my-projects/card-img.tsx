import Image, { StaticImageData } from "next/image";

function CardImg({ index, src }: { index: number; src: StaticImageData }) {
  return (
    <Image
      role="presentation"
      src={src}
      alt=""
      fill
      quality={50}
      priority={index < 5}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      placeholder="blur"
      className="overflow-hidden object-fill"
    />
  );
}

export default CardImg;
