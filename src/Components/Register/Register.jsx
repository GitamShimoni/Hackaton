import './register.css'
const Register = () => {
  return (
    <>
        <div id="register-container">
        <div id="register-inner-div">
            <div>
            <img id="Logo-img-register" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F403403779%2F1236023771243%2F1%2Foriginal.20221201-213944?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C92%2C1151%2C1151&s=540d5ceecc29cde765e9a8efde1e0989" alt="Logo"/>
        </div>
            <h1 id='register-tittle'>Register</h1>
          <form>
                <div className="qwerty">
                <div className="input-group">
                    <input required="" type="number" name="number" autoComplete="off" className="input"/>
                    <label className="user-label">Your Id</label>
                </div>
                <div className="input-group">
                    <input required="" type="password" name="password" autoComplete="off" className="input"/>
                    <label className="user-label">Password</label>
                </div>
                <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"/>
                    <label className="user-label">Email</label>
                </div>
                <div className="coolinput">
                    <label htmlFor="input" className="text">Date of Birth:</label>
                    <input type="date" placeholder="Write here..." name="input" className="input"/>
                </div>
                <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"/>
                    <label className="user-label">Bio</label>
                </div>
            </div>
            <div>
              <div className="input-group">
                <input required="" type="text" name="text" autoComplete="off" className="input"/>
                <label className="user-label">First Name</label>
              </div>
              <div className="input-group">
                <input required="" type="text" name="text" autoComplete="off" className="input"/>
                <label className="user-label">Last Name</label>
              </div>
              <div className="input-group">
                <input required="" type="text" name="text" autoComplete="off" className="input"/>
                <label className="user-label">User Name</label>
              </div>
              <div className="input-group">
                <input required="" type="text" name="text" autoComplete="off" className="input"/>
                <label className="user-label">Profile IMG Src</label>
              </div>
              <div>
              </div>
            <div id="radio-sign-up">
                <label className="radio-button">
                    <input value="option1" name="example-radio" type="radio"/>
                    <span className="radio"></span>
                     Male
                  </label>
                  
                  <label className="radio-button">
                    <input value="option2" name="example-radio" type="radio"/>
                    <span className="radio"></span>
                    Female
                  </label>

                  <label className="radio-button">
                    <input value="option2" name="example-radio" type="radio"/>
                    <span className="radio"></span>
                     Other 
                  </label>
        <div id="sign-up-button">
            <button>
                Sign Up
              </button>
         </div>
          </div>
        </div>
        
          </form>
          </div>
    </div>
    </>
  )
}

export default Register