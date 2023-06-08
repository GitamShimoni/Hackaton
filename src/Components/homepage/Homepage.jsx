import './homepage.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import MeetNewFriends from '../Meetnewfriends/MeetNewFriends';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Podium from '../Podium/Podium';

const Homepage = () => {
  const navigate = useNavigate();
  const [renderer] = useState(false);
  useEffect(()=> {
    if (!localStorage.getItem("login")){
      navigate('/login');
    }
  }, [renderer])
  
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <img id='background-seaface-img' src="src\pic\background.png" alt="" />
      </div>
      <MeetNewFriends/>
      <Podium/>
      <PhotoCarousel/>
    </div>
  );
};

export default Homepage;
