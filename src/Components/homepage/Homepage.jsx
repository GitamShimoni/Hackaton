import './homepage.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import MeetNewFriends from '../Meetnewfriends/MeetNewFriends';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <img id='background-seaface-img' src="src\pic\background.png" alt="" />
      </div>
      <MeetNewFriends></MeetNewFriends>
      <PhotoCarousel></PhotoCarousel>
    </div>
  );
};

export default Homepage;
