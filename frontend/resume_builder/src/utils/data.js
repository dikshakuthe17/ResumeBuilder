import TEMPLATE_ONE_IMG from '../assets/template-one.jpg';
import TEMPLATE_TWO_IMG from '../assets/template-two.jpg';
import TEMPLATE_THREE_IMG from '../assets/template-three.jpg';

export const resumeTemplates = [
  {
    id: '01',
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: 'themeOne',
  },
  {
    id: '02',
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: 'themeTwo',
  },
  {
    id: '03',
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: 'themeThree',
  },
];

export const themeColorPalette = {
  themeOne: [
    ['#EBFDFF', '#CEFAFE', '#A1F4FD', '#00B8DB', '#4A5565'],

    ['#E9FBF8', '#B4EFE7', '#93E2DA', '#2AC9A0', '#3D4C5A'],
    ['#F5F4FF', '#E0DBFF', '#C9C2F8', '#8579D1', '#4B4B5C'],
    ['#F0FAFF', '#D6F0FF', '#AFDEFF', '#3399FF', '#445361'],
    ['#FFF5F7', '#FFE0EC', '#FAC6D4', '#F6729C', '#5A5A5A'],
    ['#F9FAFB', '#E4E7EB', '#CBD5E0', '#7F9CF5', '#2D3748'],

    ['#F4FFFD', '#D3FDF2', '#B0E9D4', '#34C79D', '#384C48'],
    ['#FFF7F0', '#FFE6D9', '#FFD2BA', '#FF9561', '#4C4743'],
    ['#F9FCFF', '#E3F0F9', '#C0DDEE', '#6CA6CF', '#46545E'],
    ['#FFFDF6', '#FFF4D7', '#FFE7A0', '#FFD000', '#57534E'],
    ['#EFFCFF', '#C8F0FF', '#99E0FF', '#007BA7', '#2B3A42'],

    ['#F7F7F7', '#E4E4E4', '#CFCFCF', '#4A4A4A', '#222222'],
    ['#E3F2FD', '#a8D2F4', '#90CAF9', '#1E88E5', '#0D47A1'],
  ],
};

export const DUMMY_RESUME_DATA = {
  "profileInfo": {
    "profileImg": null,
    "profilePreviewUrl": "",
    "fullName": "Diksha kuthe",
    "designation": "Software Engineer",
    "summary": "Highly motivated and detail-oriented Software Engineer with over 4 years of hands-on experience in designing, developing, and deploying robust and scalable applications. Proficient in full-stack development, with a strong emphasis on Java, Spring Boot, and React. Committed to writing clean, efficient, and well-documented code."
    },

  "contactInfo": {
    "email": "priya.sharma@email.com",
    "phone": "+919876543210",
    "location": "Bangalore, India",
    "linkedin": "linkedin.com/in/priyasharma",
    "github": "github.com/priyasharma",
    "website": "https://priyasharma.dev"
    },
  "workExperience": [
        {
      "company": "Infosys",
      "role": "Software Engineer",
      "startDate": "2020-01",
      "endDate": "2024-04",
      "description": "Designed, developed, and maintained scalable microservices using Java and Spring Boot for critical backend operations. Collaborated with the frontend team to integrate RESTful APIs and enhance user interfaces using React. Implemented comprehensive unit and integration tests to ensure code quality and system reliability, reducing production bugs by 15%."
        },
        {
      "company": "TechStart",
      "role": "Intern",
      "startDate": "2019-06",
      "endDate": "2019-12",
      "description": "Assisted senior engineers in developing and maintaining internal tools to streamline development workflows. Created automated testing scripts using Selenium, significantly improving efficiency in quality assurance."
        }
    ],
  "education": [
        {
      "degree": "B.Tech Computer Science",
      "institution": "IIT Delhi",
      "startDate": "2015-08",
      "endDate": "2019-05"
        }
    ],
  "skills": [
        { "name": "Java", "progress": 90
        },
        { "name": "Spring Boot", "progress": 85
        },
        { "name": "React", "progress": 80
        },
        { "name": "SQL", "progress": 75
        }
    ],
  "projects": [
        {
      "title": "E-commerce Platform",
      "description": "Built a full-stack e-commerce platform with robust payment gateway integration, user authentication, product catalog management, and order processing functionalities. Utilized Spring Boot for the backend and React for a dynamic, responsive user interface. ",
      "github": "https://github.com/priyasharma/ecommerce",
      "liveDemo": "https://ecommerce.priyasharma.dev"
        }
    ],
  "certifications": [
        {
      "title": "Oracle Certified Java Programmer",
      "issuer": "Oracle",
      "year": "2021"
        }
    ],
  "languages": [
        { "name": "English", "progress": 100
        },
        { "name": "Hindi", "progress": 100
        }
    ],
  "interests": [
        "Reading",
        "Yoga",
        "Traveling"
    ]

};
