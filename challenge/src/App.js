import './App.css';
import Navb from './Components/Navb'
import "./Components/style.css";
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Logo from './Components/ChallengeImages/User.jpg'

function App() {
  

  return (  
    <div>
      <Navb name='Jhon Doe' ></Navb>
      <About name='Jhon Doe' Userimg={Logo}></About>
      <Projects/>
      <Contact/>
      <Info  Webname="Gomycode" Year={2022}></Info>
    </div>
    
  );
}

export default App;
