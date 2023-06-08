import { useForm } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="login-container">
      <div id="login-inner-div">
        <h1 id='login-title'>Log in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='username-login-container'> 
            <div className="login-div">
              <span className="user">Username</span>
              <input {...register('username')} />
            </div>
          </div>
          <div className='username-login-container'>
            <div className="login-div">
              <span className="user">Password</span>
              <input {...register('password')} />
            </div>
          </div>
          <div id="div-of-submit-btn">
            <button id="login-btn" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;