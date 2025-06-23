import React from 'react';
import ProfilePhotoSelector
  from './../../../components/Inputs/ProfilePhotoSelector';
import Input from '../../../components/Inputs/Input';

const ProfileInfoForm = ({profileInfo, updateSection}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900 pb-5">
        Personal Information
      </h2>

      <div className="border border-gray-200/80 p-4 rounded-lg relative ">
        <div>
          <ProfilePhotoSelector
            image={profileInfo?.profileImg || profileInfo?.profilePreviewUrl}
            setImage={value => updateSection ('profileImg', value)}
            preview={profileInfo?.profilePreviewUrl}
            setPreview={value => updateSection ('profilePreviewUrl', value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            <Input
              value={profileInfo.fullName || ''}
              onChange={({target}) => updateSection ('fullName', target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />

            <Input
              value={profileInfo.designation || ''}
              onChange={({target}) =>
                updateSection ('designation', target.value)}
              label="Designation"
              placeholder="UI Designer"
              type="text"
            />

            <div className="col-span-2 mt-3">
              <label className="text-sm font-medium text-slate-600">
                Summary
              </label>

              <textarea
                placeholder="Short Introduction"
                className="form-input"
                rows={4}
                value={profileInfo.summary || ''}
                onChange={({target}) => updateSection ('summary', target.value)}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileInfoForm;
