import './ProfilePage.css'
import ProfilePageCarousel from './ProfilePageCarousel';
import {useParams} from 'react-router-dom'
import users from '../../../data.json'
const OtherPeopleProfile = () => {
    const userslist = users.users;
    console.log(userslist, "data");
    let { id } = useParams();
    const currentuser = userslist.find((obj) => obj.id == id);
    const badges = [];
    let level;
    if (currentuser.level<20 && currentuser.level>0){
        level=currentuser.achievments[0];
        badges[0]=true;
    }
    else if(currentuser.level>20){
        level=currentuser.achievments[1];
        badges[1]=true;
    }
    else if(currentuser.level>40){
        level=currentuser.achievments[2];
        badges[2]=true;
    }
    else if(currentuser.level>60){
        level=currentuser.achievments[3];
        badges[3]=true;
    }
    else if(currentuser.level>80){
        level=currentuser.achievments[4];
        badges[4]=true;
    }
    console.log(currentuser.level);
  return (
    <div>
            <div className="profile">
                <div className="profile-header">
                    <div className="avatar">
                        <img id='profle-pic' src={`${currentuser.imgprofile}`} alt="Avatar"/>
                    </div>
                    <h1>{`${currentuser.firstname} ${currentuser.lastname}`}</h1>
                    <p className="description"></p>
                </div>
                <div className="profile-achievments-div">
                    <h1>{`Achievments`}</h1>
                    <div className='achievments-row-1'>
                        <div><img className={badges[0] ? 'profile-achievment-img' : 'hidden-profile-achievment-img'} src="https://i.ibb.co/cbBr79d/badge1.png" alt="" /></div>
                        <div><img className={badges[1] ? 'profile-achievment-img' : 'hidden-profile-achievment-img'} src="https://i.ibb.co/TcVVrpw/badge2.png" alt="" /></div>
                        <div><img className={badges[2] ? 'profile-achievment-img' : 'hidden-profile-achievment-img'} src="https://i.ibb.co/QfRJ4bT/badge3.png" alt="" /></div>
                    </div>
                    <div className='achievments-row-2'>
                        <div><img className={badges[3] ? 'profile-achievment-img' : 'hidden-profile-achievment-img'} src="https://i.ibb.co/YpsvqY8/badge4.png" alt="" /></div>
                        <div><img className={badges[4] ? 'profile-achievment-img' : 'hidden-profile-achievment-img'} src="https://i.ibb.co/qy9TKgc/badge5.png" alt="" /></div>
                    </div>
                </div>
                <hr className='profilepage-line'/>
                <div className="photos">
                    <ProfilePageCarousel loginname={`${currentuser.firstname}`}/>
                </div>
            </div>
    </div>
  )
}

export default OtherPeopleProfile