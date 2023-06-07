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
          mediaAssets: [{ tag: "gitam" }],
          carouselStyle: 'indicators',
          carouselLocation: 'bottom',
          autoplay: {
            enabled: true,
            waitForInteraction: false,
            delay: 5000, // Set the desired delay in milliseconds (e.g., 5000 = 5 seconds)
          }
        });
        
        gallery.render();
      }
    };

    loadCloudinaryCarousel();
  }, []);

  return (
    <div id='photocarousel-component-container'>
      <h1>This is the carousel page</h1>
      <div id='photocarousel-div' ref={containerRef}></div>
    </div>
  );
};

export default PhotoCarousel;
