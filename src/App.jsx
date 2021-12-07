import TypeArea from './components/TypeArea';
import './style.css'


function App() {
  return (
   <div className="container-grid">
     <div className="left">
       Left
     </div>
     <div className="center">
       <div className="header">
          <strong>MonkeyType Repilca</strong> 
       </div>
       <div className="typeArea">
          <TypeArea/>
       </div>
       <div className="footer">
         Footer
       </div>
     </div>
     <div className="right">
       Right
     </div>
   </div>
  );
}

export default App;
