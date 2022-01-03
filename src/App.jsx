import React,{useState} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Timer from './components/Timer';
import TypeArea from './components/TypeArea';
import './style.css'



function App() {

  
const[complete,setComplete] = useState(false);

  return (
   <div className="container-grid">
     <div className="left">
       
     </div>
     <div className="center">
       <Header/>
       <Timer setComplete = {setComplete} complete = {complete} />
       <TypeArea complete = {complete} setComplete = {setComplete} />
       <Footer/>
     </div>
     <div className="right">
     </div>
   </div>
  );
}

export default App;
