import Image, { ImageProps } from "next/image";

const Banner = ({alt, ...props}: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
      {...props}
      alt={alt}
    />
  )
}

export default Banner;