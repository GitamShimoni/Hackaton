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
                    <div className='achievments-row-1'>first line of achievments
                        <div>achievment1</div>
                        <div>achievment1</div>
                        <div>achievment1</div>
                    </div>
                    <div className='achievments-row-2'>second line of achievments
                        <div>achievment1</div>
                        <div>achievment1</div>
                        <div>achievment1</div>
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