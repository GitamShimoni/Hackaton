import  { useEffect, useRef } from 'react';
import './ProfilePageCarousel.css'

const ProfilePageCarousel = (loginname) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadCloudinaryCarousel = async () => {
      if (window.cloudinary && containerRef.current) {
        const cloudinary = window.cloudinary;
        const gallery = await cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: "seaface",
          aspectRatio: "16:9",
          mediaAssets: [{ tag: `${loginname}` }],
        });
        
        gallery.render();
      }
    };

    loadCloudinaryCarousel();
  }, []);

  return (
    <div id='profilephotocarousel-component-container'>
      <div id='photocarousel-div' ref={containerRef}></div>
    </div>
  );
};

export default ProfilePageCarousel;
