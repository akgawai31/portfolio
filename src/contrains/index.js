import html from './../assets/html.png'
import css from './../assets/css.png'
import python from './../assets/python.jpg'
import dj from './../assets/dj.png'
import javascript from './../assets/javascript.png'
import reactImage from './../assets/react.png'
import github from './../assets/github.png'
import tailwind from './../assets/tailwind.png'
import cpp from './../assets/cpp.png'
import flask from './../assets/flask.jpg'
import mdb from './../assets/mdb.png'
import sql from './../assets/sql.jpg'
import mysql from './../assets/mysql.png'
import njs from './../assets/node.png'


import project1 from './../assets/portfolio/rentify.png'
import project2 from './../assets/portfolio/homeprice.png'
import project3 from './../assets/portfolio/portfolioImage.png'
import project4 from './../assets/portfolio/passGen.png'




export const HERO_CONTENT = `Eager to contribute to a dynamic team and apply problem-solving skills in a collaborative environment.`;

export const ABOUT_TEXT = `Enthusiastic recent Post-graduate with a Master degree in Computer Applications and a passion for software development.
Proficient in Python, C++ and Backed Developement, with a strong foundation in Data Structures & Algorithms. worked with a variety of technologies, including Django, Node.js, React, MySQL, 
and MongoDB. Eager to contribute to a dynamic team and apply problem-solving skills in a collaborative environment.`;

export const EXPERIENCES = [
  {
    year: "JUN 2023- JAN-2024",
    role: "Trainee Engineer",
    company: "Amantya Technologies",
    description: `Contributed to the evolution of a Python-Django based 5G-simulator by supporting the enhancement of functionalities
                under the guidance of senior engineers. Implemented APIs and integrated with 5G core server. optimize operational efficiency by enabling critical functionalities such as simulator reset
                and ngsetup between RAN and AMF, resulting in a 40% reduction in setup time and enhanced productivity.`,
    technologies: ["Python","Django", "Linux", "SQLite", "Docker", "JIRA",  "TTCN"],
  },
];

export const Education = [
    {
      year: "2020 - 2023",
      Degree: "Master of Computer Applications (MCA)",
      collage: "National Intitute of Technology, Tiruchirappalli",
      cgpa: "CGPA - 8.0"
    },
    {
      year: "2016 - 2019",
      Degree: "Bachelors of Science (Computer Science and Mathematics)",
      collage: "Govt. Vidarbha Institute of Science and Humanities, Amravati",
      cgpa: "Percentage - 68.31%",
    },
  ];


export const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: python,
      title: "Python",  
    },
    {
      id: 7,
      src: dj,
      title: "Django",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
    },
    {
        id: 9,
        src: cpp,
        title: "C++",
      },
      {
        id: 10,
        src: flask,
        title: "Flask",
      },
      {
        id: 11,
        src: njs,
        title: "NodeJs",
      },
      {
        id: 12,
        src: mdb,
        title: "MongoDB",
      },
      {
        id: 13,
        src: mysql,
        title: "MySql",
      },
      {
        id: 14,
        src: sql,
        title: "SQL",
      },
  ];

export const CONTACT = {
  address: "At. Post Bhimnagar, Daryapur, Maharashtra 444803",
  phoneNo: "+91 7796 5451 09 ",
  email: "akgawai21@gmail.com",
};

export const resume = {
    href: "/Akshay_Gawai.pdf",
    download: true,
}



//projects
export const PROJECTS = [
    {
      title: "Rentify",
      image: project1,
      description:
        "Real-Estate website with features like property selling, listing, add like to property, get Information of the seller, and user authentication.",
      technologies: ["Node.js", "ExpressJS","CSS", "EJS", "MongoDB"],
    },
    {
      title: "House Price Predication",
      image: project2,
      description:
        "An application for predecting the home price in bangalore location, on basic of certain attributes like area sq. feet, bathrooms, bedrooms, location etc.",
      technologies: ["Python", "NumPy", "scikit-learn", "pandas", "matplotlib", "seaborn"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React", "Tailwind-CSS", "JavaScript"],
    },
    {
      title: "Password Generator",
      image: project4,
      description:
        "An application, which will help to generate passwords as per your need. support inclusion and exclusion of number and character.",
      technologies: ["React", "Tailwind"],
    },
  ];


 