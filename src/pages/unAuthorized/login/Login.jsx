import React, { useState } from 'react'
import MainLogo from '../../../icons/MainLogo'
import LoginFormLogo from '../../../icons/LoginFormLogo'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../api/authApi'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { LuLoader } from 'react-icons/lu'
import '@styles/_login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading,setLoading] =useState(false);

    const navigate = useNavigate();

    const mutation = useMutation({
      mutationFn: login,
      onSuccess: (response) => {
          setLoading(false);
          toast.success(response.data.message);
          navigate('/dashboard/home');
      },
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      if (!trimmedEmail || !trimmedPassword) {
          toast.error('Email and password are required');
          setLoading(false);
          return;
      }
      mutation.mutate({ email: trimmedEmail, password: trimmedPassword });
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className='login-body'>
      <div className="login-header">
        <h1>
            <MainLogo />
        </h1>
      </div>
      <div className='login-wraper'>
        <div className='login-form-wraper'>
          <div className="login-form-head">
            <div className="login-form-logo">
              <LoginFormLogo />
            </div>
            <h2>Log in to your account</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <div className="login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Email</label>
                  <div className="input-wrap">
                  <input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="input-elm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <div className="input-wrap">
                  <input
                      id="password"
                      placeholder="**********"
                      type={showPassword ? "text" : "password"}
                      className="input-elm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="eye-btn" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="forgot-btn-wrap">
                <button>Forgot password</button>
              </div>
              <div className="login-form-btn">
                <button className="site-btn btn-secondery" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span>Signing...</span>
                      <LuLoader />
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
                <button className="site-btn btn-primeray">Sign in with SSO</button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login