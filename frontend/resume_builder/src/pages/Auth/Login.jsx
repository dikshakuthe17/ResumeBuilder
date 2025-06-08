import React, {useState, useContext} from 'react';
import Input from '../../components/Inputs/Input';
import {useNavigate} from 'react-router-dom';
import {validateEmail} from '../../utils/helper';
import {UserContext} from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import {API_PATHS} from '../../utils/apiPaths';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');
  // Add this above your component or import from a utils file

  const {updateUser} = useContext (UserContext);
  const navigate = useNavigate ();

  // Handle Login Form submit
  const handleLogin = async e => {
    e.preventDefault ();

    if (!validateEmail (email)) {
      setError ('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError ('Please enter your password.');
      return;
    }

    setError ('');

    // Login API Call

    try {
      const response = await axiosInstance.post (API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const {token} = response.data;

      
      if (token) {
        localStorage.setItem ('token', token);
        updateUser (response.data);
        navigate ('/dashboard'); // Redirect to dashboard after successful login
      }
    } catch (error) {
      console.error ( error);
      if (error.response && error.response.data.message) {
        setError (error.response.data.message);

      } else {
        setError ('something went wrong, please try again.');
      }
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black text-center ">
        Welcome Back
      </h3>
      <p className="text-sm text-slate-700 mt-[5px] mb-6 text-center">
        Please enter your details to log in
      </p>

      <form onSubmit={handleLogin}>

        <Input
          value={email}
          onChange={({target}) => setEmail (target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />

        {error && <p className="text-red-500 text-sm pb-2.5">{error}</p>}

        <Input
          value={password}
          onChange={({target}) => setPassword (target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        <button type="submit" className="btn-primary">
          LOGIN
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{''}
          <button
            className="font-medium text-primary underline cursor-pointer text-purple-700"
            onClick={() => setCurrentPage ('signup')}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
