
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode,setMode]= useState('light') ; // darkmode is enabled or not
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

      setTimeout(()=>{
          setAlert(null)
      },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark');
      document.body.style.backgroundColor='rgb(24 19 69';
      showAlert("Drak mode is enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled" , "success");
    }
  }
  return (
    <Router>
    <> 
    <div className="container my-3">
      <Navbar title="TextUtils" About="About TU" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert= {alert}/>
    <Routes>
    
  
    
  
  
 {/* <TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/> */}
 {/* <About mode={mode} /> */}
 <Route exact path="/Home" element={<TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/> } />

 <Route exact path="/About" element={<About mode={mode} />} />
   
  

        </Routes>
        </div> 
  </>
  
  </Router>
  );
}

export default App;
