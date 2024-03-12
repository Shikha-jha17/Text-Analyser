import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

//import About from './components/About';




let name = "Harry";

function App() {
  const [mode, setMode] = useState('light'); //Whther dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(2 33 55)';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
    
    <Navbar title="Shikha's page" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textform heading="Enter the text to analyze below" mode={mode}/>
      {/*<About/>*/}
    </div>
    
    
    


    
    </div>
  );
}

export default App;
