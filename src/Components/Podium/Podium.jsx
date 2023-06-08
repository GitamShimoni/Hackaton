import './Podium.css'
import users from '../../../data.json'
import 'animate.css';
const Podium = () => {
    let userslist = users.users;
    let localUserList = JSON.parse(localStorage.getItem("users"));
    userslist = [...userslist, localUserList]
    const sortedObjects = userslist.sort((a, b) => b.level - a.level);
    const topSorted = sortedObjects.slice(0, 3);
    console.log(topSorted[0]);
  return (
    <div id="Podiumsection-container">
        <h1 id='biggest-influencers-header'>Biggest Influencers Of Our Community!</h1>
        <div id='podiums-div'>
            <div className='podium2container animate__animated animate__fadeInUp'>
                <div className='Podium2'><h1 className='podium-number-header'>#2</h1> <p className='podium-name-text'>{`${topSorted[1].firstname}, Level ${topSorted[1].level}`}</p></div>
                <img className='podiumpicture' src={`${topSorted[1].imgprofile}`} alt="" />
            </div>
            <div className='podium1container animate__animated animate__fadeInUp'>
                <div className='Podium1'><h1 className='podium-number-header'>#1</h1> <p className='podium-name-text'>{`${topSorted[0].firstname}, Level ${topSorted[0].level}`}</p></div>
                <img className='podiumpicture' src={`${topSorted[0].imgprofile}`} alt="" />
            </div>
            <div className='podium3container animate__animated animate__fadeInUp'>
                <div className='Podium3'><h1 className='podium-number-header'>#3</h1> <p className='podium-name-text'>{`${topSorted[2].firstname}, Level ${topSorted[2].level}`}</p></div>
                <img className='podiumpicture' src={`${topSorted[2].imgprofile}`} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Podium