import './meetnewfriends.css'
import users from "../../../data.json"
import { Link } from "react-router-dom";
const MeetNewFriends = () => {
    const data = users.users;
    let shuffledArray = data.sort(() => Math.random() - 0.5);
    shuffledArray = shuffledArray.slice(0, 3);
    
  return (
    <div id="Meetnewfriends-container">
        <div id='meetnewfriends-header'>
            <h1>Meet New Friends!</h1>
        </div>
        <div id='meetnewfriends-people-container'>
            <div className='meetuser-div'>
                <Link to={`/profile/${shuffledArray[0].id}`}>
                    <img className='meetuser-img' src={`${shuffledArray[0].imgprofile}`} alt="" />
                </Link>
                <h1 className='meetuser-header'>{`${shuffledArray[0].firstname} ${shuffledArray[0].lastname}`}</h1>
            </div>
            <div className='meetuser-div'>
            <Link to={`/profile/${shuffledArray[1].id}`}>
                    <img className='meetuser-img' src={`${shuffledArray[1].imgprofile}`} alt="" />
                </Link>
                <h1 className='meetuser-header'>{`${shuffledArray[1].firstname} ${shuffledArray[1].lastname}`}</h1>
            </div>
            <div className='meetuser-div'>
            <Link to={`/profile/${shuffledArray[2].id}`}>
                    <img className='meetuser-img' src={`${shuffledArray[2].imgprofile}`} alt="" />
                </Link>
                <h1 className='meetuser-header'>{`${shuffledArray[2].firstname} ${shuffledArray[2].lastname}`}</h1>
            </div>
        </div>
    </div>
  )
}

export default MeetNewFriends