import React, {createContext, useState, useEffect} from 'react';
import axiosInstance from '../utils/axiosInstance';
import {API_PATHS} from '../utils/apiPaths';

const UserContext = createContext ();

const UserProvider = ({children}) => {
  const [user, setUser] = useState (null);
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    if (user) return; // If user is already set, skip fetching

    const accessToken = localStorage.getItem ('token');
    if (!accessToken) {
      setLoading (false);
      return; // No token, skip fetching user
    }

    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get (API_PATHS.AUTH.GET_PROFILE);
        setUser (response.data);
      } catch (error) {
        console.error ('user not authenticated', error);
        clearUser ();
      } finally {
        setLoading (false);
      }
    };

    fetchUser ();
    // eslint-disable-next-line
  }, []);

  const updateUser = (userData) => {
    setUser (userData);
    localStorage.setItem ('token', userData.token);
    setLoading (false);
  };

  const clearUser = () => {
    setUser (null);
    localStorage.removeItem ('token');
    setLoading (false);
  };

  return (
    <UserContext.Provider value={{user, loading, updateUser, clearUser}}>
      {children}
    </UserContext.Provider>
  );
};

// export default UserProvider;
export {UserContext, UserProvider};
