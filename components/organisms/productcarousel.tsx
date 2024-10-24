"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Image {
  src: string;
}

export default function ProductCarousel() {
  const images: Image[] = [
    { src: "/images/20.jpg" },
    { src: "/images/21.jpg" },
    { src: "/images/22.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg shadow-lg">
      <CarouselImages images={images} currentIndex={currentIndex} />
      <CarouselNavigation onNext={nextImage} onPrev={prevImage} />
      <CarouselIndicators
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

function CarouselImages({
  images,
  currentIndex,
}: {
  images: Image[];
  currentIndex: number;
}) {
  return (
    <div
      className="relative flex w-full transition-transform duration-700 ease-in-out"
      style={{ height: "100vh" }}
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              width={80}
              height={90}
              src={image.src}
              alt={`Produk ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: "cover" }} // Pastikan gambar tidak terdistorsi
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselNavigation({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 border border-gray-400 text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 focus:outline-none"
        onClick={onPrev}
        aria-label="Gambar Sebelumnya"
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 border border-gray-400 text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 focus:outline-none"
        onClick={onNext}
        aria-label="Gambar Berikutnya"
      >
        &#10095;
      </button>
    </>
  );
}

function CarouselIndicators({
  images,
  currentIndex,
  setCurrentIndex,
}: {
  images: Image[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ml-[-28px]">
      {" "}
      {/* Menambahkan margin kiri negatif */}
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-4 h-4 rounded-full transition duration-300 transform hover:scale-110 ${
            index === currentIndex ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => setCurrentIndex(index)}
          aria-label={`Ke gambar ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}
