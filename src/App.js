import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skill';
import ParticleBackground from './components/ParticleBackground';
import WorkTimeline from './components/WorkTimeline';
import IconPanel from './components/Iconpanel';


function App() {
 
  

  return (
    <div className="App">
   <ParticleBackground/>
     <Header/>
    <Skills/>
     <Projects/>
     <WorkTimeline/>
     <IconPanel/>
    </div>
  );
}

export default App;
