'use client';

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  }

  return (
    <div className="flex flex-col">
      <div className="bg-accent h-[380px] w-full items-center flex justify-center">
        <Image 
          src={currentImage} 
          alt={name} 
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain"
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4 px-2">
        {imageUrls.map((imageUrl) => (
          <button 
              key={imageUrl} 
              onClick={() => handleImageClick(imageUrl)}
              className={`bg-accent rounded-lg flex items-center justify-center h-[90px] ${imageUrl === currentImage && 'border-2 border-primary border-solid'}`}
            >
            <Image 
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain"
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImages;