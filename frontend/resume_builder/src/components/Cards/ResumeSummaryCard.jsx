import React ,{useState , useEffect} from 'react';
import {getLightColorFromImage} from '../../utils/helper';


const ResumeSummaryCard = ({imgUrl, title, lastUpdate, onSelect}) => {

  const [bgColor, setBgColor] = useState('#ffffff'); // Default gray background

  useEffect(() => {
    if (imgUrl) {
      getLightColorFromImage(imgUrl)
      .then((color) => {
        setBgColor(color);
      })
      .catch(() => {
        setBgColor('#ffffff'); // Fallback to white if color extraction fails
      });
    }
  }, [imgUrl]);

  return (
    <div className="h-[300px] flex flex-col items-center justify-between bg-white border border-purple-200 hover:border-purple-400 rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden" 
    style={{backgroundColor :bgColor}}
      onClick={onSelect}>
        <div className="p-4">
      {imgUrl ? (
        <img
            src={imgUrl}
            alt="Resume Thumbnail"
            className="w-[100%] h-[200px] rounded"
          />
       ) : (
       <div className="">
           
        </div>
      )}
      </div>

      <div className="w-full bg-white px-4 py-3">
      <h4 className=" font-medium truncate overflow-hidden whitespace-nowrap">{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">Last updated: {lastUpdate}</p>
      </div>
    </div>
  );
};

export default ResumeSummaryCard;
