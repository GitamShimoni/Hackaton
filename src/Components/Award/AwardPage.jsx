import { useNavigate } from 'react-router-dom';

const AwardPage = () => {
    
    const navigate = useNavigate();
    let loginname;
    if(localStorage.getItem("login")){
        loginname = localStorage.getItem("login");
    }
    let users;
    if (localStorage.getItem("users")){
        users = JSON.parse(localStorage.getItem("users"));
    }
    console.log(users);
    const currentuser = users.find((obj) => {
        return obj.userName==loginname;
    })
    currentuser.level+=10;
    users.filter((obj) => {
        return obj.userName==loginname;
    })
    users.push(currentuser)
    localStorage.setItem("users", JSON.stringify([currentuser]))
    setTimeout(()=>{
        navigate('../profile')
    } , 4000);
  return (
    <div>
        <h1 style={{textAlign: 'center', fontSize: '3vw'}}>Congratulations! you've earned 20 points!</h1>
    </div>
  )
}

export default AwardPage