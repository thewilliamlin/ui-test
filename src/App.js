import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import BasicDateCalendar from './Calendar';
// import NavBar from './NavBar';
import EducationSection from "./ProfileSections/EducationSection";
import SkillsSection from "./ProfileSections/SkillsSection";
import ExperienceSection from "./ProfileSections/ExperienceSection"
import NavBar from "./ProfileSections/NavBar";


function App() {
  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C++", "C#"],
    "Machine Learning & Data Analysis": [
      "Data Analysis",
      "PyTorch",
      "Scikit-learn (SkLearn)",
    ],
    "Software Tools": ["Git", "Docker", "MySQL", "Linux", "Figma"],
    "Robotics & Engineering": [
      "Robotics",
      "Electrical Engineering",
      "Network Systems",
      "Computer Systems",
    ],
    "Additional Skills": ["React", "Node.js", "TypeScript", "HTML/CSS"],
  };
  return (
    // <body>
    //   <NavBar/>
    //   <BasicDateCalendar/>
    // </body>

    <body>
    <NavBar/>
    <div className="main-panel">
      <div className="main-personal">
        <div className="circle" />
        <p className="name">Justin Ellis</p>
        <p>Computer Science Student at the University of Utah</p>
        <p className="section-element-subtitle">
          Salt Lake City, UT
          <br /> United States
        </p>
      </div>

      <div className="main-professional">
        {/* <h1 className="text-3xl font-bold text-blue-500"> */
          /* Hello, Tailwind CSS with Vite + React!
        </h1> */}
        <EducationSection />
        <SkillsSection skillsDict={skills}/>
        <ExperienceSection />
      </div>
    </div>
  </body>

);
}

export default App;
