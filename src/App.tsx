import './App.css';
import { useRef, useState } from 'react';
import Navbar from './components/navbar';
import HomeComponent from "./components/home";
import SkillsComponent from "./components/skills";
import ProjectComponent from "./components/project";
import ResumeComponent from "./components/resume";
import ContactMeComponent from "./components/contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  const componentRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !componentRefs.current.includes(el)) {
      componentRefs.current.push(el);
    }
  };

  const scrollToComponent = (index: number) => {
    if (componentRefs.current[index]) {
      componentRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} scrollToComponent={scrollToComponent} />
      <div className={`flex pt-16 ${ theme === 'dark' ? 'bg-gradient-to-black' : 'bg-gradient-to-white' }`}>
        <main className="flex-1 p-6">
          <HomeComponent theme={theme} ref={addToRefs} />
          <SkillsComponent theme={theme} ref={addToRefs} />
          <ProjectComponent theme={theme} ref={addToRefs} />
          <ResumeComponent ref={addToRefs} />
          <ContactMeComponent theme={theme} ref={addToRefs} />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
