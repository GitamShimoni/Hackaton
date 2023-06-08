import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();
  let users;
  if (localStorage.getItem("users")){
   users  = JSON.parse(localStorage.getItem("users"));
  }
  else{
    localStorage.setItem("users", JSON.stringify([]))
  }

  const onSubmit = (data) => {
    data.achievements = [false, false, false, false, false];
    data.level = 0;
    localStorage.setItem("users", JSON.stringify([...users, data]));
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-inner-div">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="column">
            <div className="input-group">
              <input
                required
                type="text"
                autoComplete="off"
                className="input"
                placeholder="First Name"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && (
                <span className="error-message">First Name is required</span>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                autoComplete="off"
                className="input"
                placeholder="Last Name"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <span className="error-message">Last Name is required</span>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                autoComplete="off"
                className="input"
                placeholder="User Name"
                {...register('userName', { required: true })}
              />
              {errors.userName && (
                <span className="error-message">User Name is required</span>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="password"
                autoComplete="off"
                className="input"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="error-message">Password is required</span>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                autoComplete="off"
                className="input"
                placeholder="Profile IMG Src"
                {...register('profileImg', { required: true })}
              />
              {errors.profileImg && (
                <span className="error-message">Profile IMG Src is required</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="dobInput" className="text">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dobInput"
                className="input"
                {...register('dobInput', { required: true })}
              />
              {errors.dobInput && (
                <span className="error-message">Date of Birth is required</span>
              )}
            </div>
            <div className="input-group">
              <textarea
                required
                autoComplete="off"
                className="textarea"
                placeholder="Bio"
                {...register('bio', { required: true })}
              ></textarea>
              {errors.bio && (
                <span className="error-message">Bio is required</span>
              )}
            </div>
            <div className="input-group">
              <div className="radio-button">
                <input
                  type="radio"
                  id="maleRadio"
                  name="gender"
                  value="Male"
                  {...register('gender', { required: true })}
                />
                <label htmlFor="maleRadio">Male</label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="femaleRadio"
                  name="gender"
                  value="Female"
                  {...register('gender', { required: true })}
                />
                <label htmlFor="femaleRadio">Female</label>
              </div>
              {errors.gender && (
                <span className="error-message">Gender is required</span>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                autoComplete="off"
                className="input"
                placeholder="City"
                {...register('city', { required: true })}
              />
              {errors.city && (
                <span className="error-message">City is required</span>
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="register-button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
