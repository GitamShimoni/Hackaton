import './ProfilePage.css'
import ProfilePageCarousel from './ProfilePageCarousel';

const ProfilePage = () => {
    let loginname;
    if(localStorage.getItem("login")){
        loginname = localStorage.getItem("login");
    }


  return (
    <div>
            <div className="profile">
                <div className="profile-header">
                    <div className="avatar">
                        <img id='profle-pic' src="https://i.ibb.co/CHDc3Dm/agent2.jpg" alt="Avatar"/>
                    </div>
                    <h1>{`${loginname}`}</h1>
                    <p className="description"></p>
                </div>
                <div className="profile-achievments-div">
                    <h1>{`Achievments`}</h1>
                    <div className='achievments-row-1'>
                        <div><img className='profile-achievment-img' src="src\pic\badge1.png" alt="" /></div>
                        <div><img className='profile-achievment-img' src="src\pic\badge2.png" alt="" /></div>
                        <div><img className='profile-achievment-img' src="src\pic\badge3.png" alt="" /></div>
                    </div>
                    <div className='achievments-row-2'>
                        <div><img className='profile-achievment-img' src="src\pic\badge4.png" alt="" /></div>
                        <div><img className='profile-achievment-img' src="src\pic\badge5.png" alt="" /></div>
                    </div>
                </div>
                <hr className='profilepage-line'/>
                <div className="photos">
                    <ProfilePageCarousel loginname={loginname}/>
                </div>
            </div>
    </div>
  )
}

export default ProfilePage