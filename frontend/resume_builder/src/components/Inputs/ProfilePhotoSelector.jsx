import React, {useState, useRef} from 'react';
import {LuUser, LuUpload, LuTrash} from 'react-icons/lu';

const ProfilePhotoSelector = ({image, setImage, preview, setPreview}) => {
  const inputRef = useRef (null);
  const [previewUrl, setPreviwUrl] = useState (null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      // Update the image state
      setImage (file);

      // Generate preview

      const preview = URL.createObjectURL (file);
      if (setPreview) {
        setPreview (preview);
      }
      setPreviwUrl (preview);
    }
  };

  const handleRemoveImage = () => {
    setImage (null);
    setPreviwUrl (null);

    if (setPreview) {
      setPreview (null);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click ();
  };

  return (
    <div className=" flex justify-center  mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image
        ? <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative cursor-pointer">
            <LuUser className="text-4xl text-purple-500" />

            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-400/85 to-purple-700 text-white rounded-full absolute -bottom-1 -right-1 hover:bg-purple-600 transition-colors duration-300"
              onClick={onChooseFile}
            >
              <LuUpload />
            </button>

          </div>
        : <div className="relative">
            <img
              src={preview || previewUrl}
              alt="profile photo"
              className="w-20 h-20 object-cover rounded-full"
            />
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-full text-white absolute -bottom-1 -right-1 cursor-pointer"
              onClick={handleRemoveImage}
            >
              <LuTrash />
            </button>
          </div>}

    </div>
  );
};

export default ProfilePhotoSelector;
