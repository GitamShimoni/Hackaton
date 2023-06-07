import  { useEffect, useRef } from 'react';
import './ProfilePageCarousel.css'

const ProfilePageCarousel = (loginname) => {
  const containerRef = useRef(null);
  console.log(loginname.loginname);

  useEffect(() => {
    const loadCloudinaryCarousel = async () => {
      if (window.cloudinary && containerRef.current) {
        const cloudinary = window.cloudinary;
        const gallery = await cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: "seaface",
          aspectRatio: "16:9",
          mediaAssets: [{ tag: `${loginname.loginname}` }],
        });
        
        gallery.render();
      }
    };
  
    loadCloudinaryCarousel();
  }, [loginname]);
  

  return (
    <div id='profilephotocarousel-component-container'>
      <div id='photocarousel-div' ref={containerRef}></div>
    </div>
  );
};

export default ProfilePageCarousel;

