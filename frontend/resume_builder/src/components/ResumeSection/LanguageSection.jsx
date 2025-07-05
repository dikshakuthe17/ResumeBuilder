import Progress from "../Progress";

const LanguageInfo = ({language, accentColor, bgColor, progress}) => {
  return (

    <div className='flex items-center justify-between'>
        <p className={`text-[12px] font-semibold text-gray-900`}>{language}</p>
        { progress > 0 && (
            <Progress
            progress={(progress / 100 ) * 5}
            color= {accentColor}
            bgColor = {bgColor} 
        />
        )} 
    </div>

  );
};

const LanguageSection = ({languages, accentColor, bgColor}) => {
  return (
    <div>
        {languages?.map((language , index) => (
            <LanguageInfo
            key={`$ language_${index}`}
            language={language.name}
            progress={language.progress}
            accentColor={accentColor}
            bgColor={bgColor}
            />
        ))}
    </div>
  )
};

export default LanguageSection;
