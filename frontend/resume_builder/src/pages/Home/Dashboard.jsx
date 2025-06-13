import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosInstance from './../../utils/axiosInstance';
import {API_PATHS} from '../../utils/apiPaths';
import {LuCirclePlus} from 'react-icons/lu';
import DashboardLayout from '../../components/layouts/DashboardLayout'; // <-- Add this line
import moment from "moment";
import ResumeSummaryCard from '../../components/Cards/ResumeSummaryCard'; // Import the ResumeSummaryCard component
import Modal from './../../components/Modal';
import CreateResumeForm from './CreateResumeForm';

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
    <DashboardLayout >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-20 ">
        <div className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white border border-purple-200 hover:border-purple-400 rounded-lg shadow-md hover:shadow-lg cursor-pointer" onClick={() => setOpenCreateModal(true)}>
          <div className="w-12 h-12 flex items-center justify-center bg-purple-200/60 rounded-2xl">
            <LuCirclePlus className = "text-xl text-purple-500"/>
          </div>
          <h3 className='font-medium text-gray-800'>Add New Resume</h3>
        </div>

        {allResumes?.map ((resume) => (
          <ResumeSummaryCard
          key={resume?._id}
          imgUrl={resume?.thumbnailLink || null}
          title={resume.title}
          lastUpdate={
            resume?.updatedAt
              ? moment(resume.updatedAt).format('MMM DD, YYYY')
              : ""
          }
          onSelect={() => navigate(`/resume/${resume?._id}`)}
          />
        ))}

      </div>

      <Modal 
      isOpen = {openCreateModal}
      onClose = {() => {
        setOpenCreateModal(false)
      }}
      hideHeader
      >
        <div className=''>
          <CreateResumeForm/>

        </div>

      </Modal>


    </DashboardLayout>
  );
};
export default Dashboard;
