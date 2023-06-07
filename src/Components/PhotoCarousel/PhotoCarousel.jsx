import  { useEffect, useRef } from 'react';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadCloudinaryCarousel = async () => {
      if (window.cloudinary && containerRef.current) {
        const cloudinary = window.cloudinary;
        const gallery = await cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: "seaface",
          aspectRatio: "16:9",
          mediaAssets: [{ tag: "gallery-images" }],

          carouselStyle: 'indicators',
          carouselLocation: 'bottom',
          
        });
        console.log(gallery);
        gallery.render();
      }
    };

    loadCloudinaryCarousel();
  }, []);

  return (
    <div id='photocarousel-component-container'>
      <h1 id='photocarousel-header'>These Are The Last People Who Cleaned OUR Earth!</h1>
      <div id='photocarousel-div' ref={containerRef}></div>
    </div>
  );
};

export default PhotoCarousel;
