import React from 'react';

const RenderResume = ({
  templateId,
  resumeData,
  colorpalette,
  containerWidth,
}) => {
  switch (templateId){
    case "01":
        return(
            <TemplateOne
            resumeData = {resumeData}
            colorpalette = {colorpalette}
            containerWidth = {containerWidth}
            />
        );
        default:
            return(
                <TemplateOne
                resumeData = {resumeData}
                colorpalette= {colorpalette}
                containerWidth = {containerWidth}
                />
            )
  }
};

export default RenderResume;
