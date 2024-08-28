import React, { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  alt: string;
}

interface PhotoSlideshowProps {
  photos: Photo[];
}

const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  if (photos.length === 0) {
    return <div>No photos available</div>;
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].alt}
          className="w-96 h-auto rounded-lg shadow-lg mx-auto"
        />
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlideshow;
