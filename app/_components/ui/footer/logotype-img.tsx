import Image, { StaticImageData } from "next/image";

function LogoTypeImg({
  src,
  alt,
  width,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
}) {
  return <Image src={src} alt={alt} className="h-auto" width={width} />;
}

export default LogoTypeImg;
