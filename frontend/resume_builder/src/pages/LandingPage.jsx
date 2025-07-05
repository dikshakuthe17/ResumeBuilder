import {useState} from 'react';
import Login from './Auth/Login';
import Modal from '../components/Modal';
import SignUp from './Auth/SignUp';
import HERO_IMG from '../assets/hero.jpg';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

const LandingPage = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate ();
  

  const [openAuthModal, setOpenAuthModal] = useState (false);
  // State to manage the current page in the modal (login or signup)
  const [currentPage, setCurrentPage] = useState ('login');

  const handleCTA = () => {
    if(!user){
      setOpenAuthModal(true)
    }else{
      navigate('/dashboard')
    }
  };

  return (
    <div className="w-full min-h-full bg-blue-50 px-10">
      <div className="container mx-auto px-4 py-10">

        {/* Header */}
        <header className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold text-gray-900">Resume Builder</div>
          {user ? <ProfileInfoCard /> : <button
            className="bg-teal-500 text-sm font-semibold text-white px-7 py-2.5 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer"
            onClick={() => setOpenAuthModal (true)}
          >Login / Sign Up
          </button>}
        </header>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
              Craft Your Future.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-500 to-cyan-600"> Build a Resume That Opens Doors.</span>
            </h1>
            <p className=" text-xl text-gray-700 mb-8">
              Leverage our intelligent platform to create professional, interview-winning resumes with unparalleled ease and speed.
            </p>
            <button
              className="bg-teal-500 text-base font-semibold text-white px-10 py-4 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer"
              onClick={handleCTA}
            >
              Start Building for Free
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={HERO_IMG} alt="Hero" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-gray-900">
            Features That Make You Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Easy Editing
              </h3>
              <p className="text-gray-700">
                Update your resume sections with a live preview and instant formatting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Beautiful Templates
              </h3>
              <p className="text-gray-700">
                Choose from modern, professional templates that are easy to customize.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                One-Click Export
              </h3>
              <p className="text-gray-700">
                Download your resume instantly as a high-quality PDF with one click.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-24 text-center text-gray-600">
          <p>
            &copy;{' '}
            {new Date ().getFullYear ()}{' '}
            Resume Builder. All rights reserved.
          </p>
          <p className="text-sm">Made with ❤️ by dikshakuthe</p>
        </div>

      </div>

      {/* Auth Modal  */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal (false);
          setCurrentPage ('login');
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' &&
            <SignUp setCurrentPage={setCurrentPage} />}
        </div>

      </Modal>

    </div>
  );
};

export default LandingPage;
