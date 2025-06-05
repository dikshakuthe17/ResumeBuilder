import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {

    const {user ,clearUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUser();
        navigate('/');
    }

  return (
    user && (
    <div className="flex items-center ">
        <img src={user.profileImageUrl} 
        alt="profile" 
        className="w-11 h-11 rounded-full bg-gray-300 mr-3" />
        <div>
            <div className = "tet-[15px] font-bold leading-3">{user.username || ""}</div>
            <button 
            className="text-purple-500 text-sm font-semibold cursor-pointer hover:underline"
            onClick={handleLogout}>Logout</button>
        </div>
    </div>
    )
  );
};

export default ProfileInfoCard;