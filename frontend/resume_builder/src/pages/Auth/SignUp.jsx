import React, {useState} from 'react';
import Input from '../../components/Inputs/Input';
import {useNavigate} from 'react-router-dom';
import {validateEmail} from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState (null);
  const [fullName, setFullName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const [error, setError] = useState ('');
  const navigate = useNavigate ();

  // Handle SignUp Form submit
  const handleSignUp = async e => {
    e.preventDefault ();

    let profilePicUrl = '';

    if (!validateEmail (email)) {
      setError ('Please enter a valid email address.');
      return;
    }

    if (!fullName) {
      setError ('Please enter your full name.');
      return;
    }

    if (!password) {
      setError ('Please enter your password.');
      return;
    }

    setError ('');

    // SignUp API Call

    // try{

    // }catch(error){

    // }
  };

  return (
    <div className="flex flex-col justify-center w-[90vw] md:w-[33vw] p-7">
      <h3 className="text-lg font-semibold text-black text-center">
        Create an Account
      </h3>
      <p className="text-sm text-slate-700 mt-[5px] mb-6 text-center">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className="grid gird-cols-1 md:grid-cols-1 gap-2" />
        <Input
          value={fullName}
          onChange={({target}) => setFullName (target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <Input
          value={email}
          onChange={({target}) => setEmail (target.value)}
          label="Email Address"
          placeholder=""
          type="text"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <Input
          value={password}
          onChange={({target}) => setPassword (target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
       
        <button type="submit" className="btn-primary ">
          Sign Up
        </button>
        <p className="text-[13px] text-slate-800 mt-3">
          Already have an account?{' '}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage ('login')}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
