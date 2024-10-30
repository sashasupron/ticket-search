import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, ReactNode } from "react";

export interface BackgroundImageProps {
  image: string | StaticImport;
  altImage?: string;
  children?: ReactNode;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({
  image,
  altImage,
  children,
}) => {
  return (
    <div className="fullscreen">
      <Image
        src={image}
        className="full-img"
        alt={altImage}
        layout="fill"
        objectFit="cover"
      />
      {children}
    </div>
  );
};
