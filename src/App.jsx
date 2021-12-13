import Footer from './components/Footer';
import Header from './components/Header';
import TypeArea from './components/TypeArea';
import './style.css'


function App() {
  return (
   <div className="container-grid">
     <div className="left">
       Left
     </div>
     <div className="center">
       <Header/>
       <TypeArea/>
       <Footer/>
     </div>
     <div className="right">
       Right
     </div>
   </div>
  );
}

export default App;
