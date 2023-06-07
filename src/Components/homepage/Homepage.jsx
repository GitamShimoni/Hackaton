import './homepage.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import MeetNewFriends from '../Meetnewfriends/MeetNewFriends';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        {/* <img src="src/pic/new-image.jpg" alt="" className="hero-img" /> */}
        <h2 className="hero-h2">Hello to Seaface</h2>
        {/* <button className="hero-button">Fdfd</button> */}
      </div>
      <MeetNewFriends></MeetNewFriends>
      <PhotoCarousel></PhotoCarousel>
    </div>
  );
};

export default Homepage;
