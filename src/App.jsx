import React,{useEffect,useState} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Timer from './components/Timer';
import TypeArea from './components/TypeArea';
import './style.css'



function App() {

  
const[complete,setComplete] = useState(true);

const completed = (e) =>{
  setComplete(e);
}
  return (
   <div className="container-grid">
     <div className="left">
       
     </div>
     <div className="center">
       <Header/>
       <Timer completed = {completed} complete={complete}/>
       <TypeArea completed = {completed }/>
       <Footer/>
     </div>
     <div className="right">
     </div>
   </div>
  );
}

export default App;
