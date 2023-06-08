import React from 'react';
import { useForm } from 'react-hook-form';
import './register.css';

const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              <div className="radio-button">
                <input
                  type="radio"
                  id="otherRadio"
                  name="gender"
                  value="Other"
                  {...register('gender', { required: true })}
                />
                <label htmlFor="otherRadio">Other</label>
              </div>
              {errors.gender && (
                <span className="error-message">Gender is required</span>
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
