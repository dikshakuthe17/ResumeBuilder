import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosInstance from './../../utils/axiosInstance';
import {API_PATHS} from '../../utils/apiPaths';
import DashboardLayout from '../../components/layouts/DashboardLayout'; // <-- Add this line


const Dashboard = () => {
  const navigate = useNavigate ();

  const [openCreateModal, setOpenCreateModal] = useState (false);
  const [allResumes, setAllResumes] = useState ([]);

  const fetchAllResumes = async () => {
    try {
      const response = await axiosInstance.get (API_PATHS.RESUME.GET_ALL);
      setAllResumes (response.data);
    } catch (error) {
      console.error ('Error fetching resumes:', error);
    }
  };

  useEffect (() => {
    fetchAllResumes ();
  }, []);

  return (
    <DashboardLayout>
      it is dashboard
    </DashboardLayout>
   
  );
};
export default Dashboard;
