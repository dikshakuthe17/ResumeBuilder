import React , {useContext} from "react";
import Navbar from "./Navbar";
import {UserContext} from '../../context/userContext';

const DashboardLayout = ({children , activeMenu}) => {
    const {user} = useContext(UserContext);
    
    return (
        <div className="dashboard-layout">
        <Navbar activeMenu={activeMenu} />
        {user && <div className="container mx-auto pt-4 pb-4">{children}</div>} 
        </div>
    );
};

export default DashboardLayout;
