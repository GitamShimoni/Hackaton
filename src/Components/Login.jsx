import './Login.css';
const Login = () => {
  return (
    <div id="login-container">
    <div id="login-inner">
      <h1 id='login-tittle'>Log in</h1>
      <form>
      <div className='username-login-container'> 
        <div className="login-div">
          <span className="user">Username</span>
          <input></input>
        </div>
      </div>
      <div className='username-login-container'>
        <div className="login-div">
          <span className="user">Password</span>
          <input></input>
        </div>
      </div>
      <div id="divofsubmit-btn"><button id="login-btn" type="submit">Sign In</button></div>
      </form>
      </div>
      </div>
  )
}

export default Login