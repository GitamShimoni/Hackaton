import './ProfilePage.css'
import ProfilePageCarousel from './ProfilePageCarousel';

const ProfilePage = () => {
    let loginname;
    if(localStorage.getItem("login")){
        loginname = localStorage.getItem("login");
    }
    let users;
    if (localStorage.getItem("users")){
        users = JSON.parse(localStorage.getItem("users"));
    }
    console.log(users, "this is the users");
    const currentuser = users.find((obj) => {
        return obj.userName==loginname;
    })
    console.log(currentuser);
    const badges = [];
    let level;
    let currentlevel = [];
    for (let i=0; i<currentuser.level/10; i++){
        currentlevel[i]=i;
    }
    if (currentuser.level>0){
        
        badges[0]=true;
    }
    if(currentuser.level>20){
        badges[1]=true;
    }
    if(currentuser.level>40){
      
        badges[2]=true;
    }
    if(currentuser.level>60){
      
        badges[3]=true;
    }
    if(currentuser.level>80){
      
        badges[4]=true;
    }

    function capitalizeFirstLetter(word) {
        if (typeof word !== 'string') {
          throw new Error('Input must be a string');
        }
      
        if (word.length === 0) {
          return word;
        }
      
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalized;
      }
      
      function formatDate(dateString) {
        const dateParts = dateString.split("-");
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
      
        return `${day}-${month}-${year}`;
      }
      console.log(currentuser.city);
  return (
    <div>
            <div className="profile">
                <div className="profile-header">
                    <div className="avatar">
                        <img id='profle-pic' src={`${currentuser.profileImg}`} alt="Avatar"/>
                    </div>
                    <h1>{`${capitalizeFirstLetter(currentuser.firstName)} ${capitalizeFirstLetter(currentuser.lastName)}`}</h1>
                    <div className='properties-paragraph-div'>
                        <p className='user-properties-paragraph'>{`Birthdate: ${formatDate(currentuser.dobInput)}   , ${currentuser.gender} from ${currentuser.city}.`}</p>
                        <h1>{`Level: ${currentuser.level}`}</h1>
                        <div>
                             {currentlevel.map((index) => {
                                    return (
                                        <img key={index} className='garbagecansicon' src="https://img.freepik.com/premium-vector/garbage-trash-can-bin-icon-eco-bio-concept-recycling_601298-2019.jpg?w=2000" alt="garbage-cans" />
                                    )
                                })}
                        </div>
                    </div>
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
                    <ProfilePageCarousel loginname={currentuser.firstName}/>
                </div>
            </div>
    </div>
  )
}

export default ProfilePage