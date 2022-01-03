import React,{useState, useEffect} from 'react'
import Confitte from 'react-confetti'
import axios from 'axios'

export default function TypeArea({complete,setComplete}) {

    // const CmpText = "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English."

    //const [text,setText] = useState("")
    const [countWord,setCountWord] = useState(0)
    const [color,setColor] = useState("green")
    const [cmptxt,setCmptxt] = useState("loading...")
    const [effect,setEffect] = useState(false)
 
    window.onload= async ()=>{
        await renderDat() 
    }
   
    const renderDat = () =>{
          axios.get('http://api.quotable.io/random')
        .then(data => setCmptxt(data.data.content))
    }
    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,""); //regex to remove start and end spaces
        str = str.replace(/[ ]{2,}/gi," "); // reduce multiple spaces and single spaces
        str = str.replace(/\n /,"\n"); //to exclude a new line with start spacing
        return str.split(' ').length;
     }

//    function getLength(){
//        //console.log(cmptxt.length);
//        let spaces = countWords(cmptxt); 
//        return spaces;
//    }
//   getLength();

  function wordsTyped(x){
      setCountWord(countWord + x);
      console.log(countWord)
  }

  if(complete)
  {
      console.log("true")
  }else{
      console.log("false")
  }
  
  function showOp(x){
    console.log(`answer ${x}`)
  }

  useEffect(()=>{
      console.log(`total counted words are ${countWord}`)
        const op = setTimeout(showOp(countWord), 0.1);
        return clearInterval(()=> op);
    },[countWord])

   //console.log("typeAre" + completed)    
    function createSpan(x){
        const quoteDisplay = document.getElementById('quoteDisp')
        quoteDisplay.innerHTML = ''
        cmptxt.split('').forEach(char =>{
            const charSpan = document.createElement('span')
         
            charSpan.innerText = char
            quoteDisplay.appendChild(charSpan)
        })
    }
    useEffect(() => {
        createSpan()
    }, [cmptxt])

    let correct = true;
  
    const finalFunct = (text) => {
        const quoteDisplay = document.getElementById('quoteDisp')
        const arrayQuote = quoteDisplay.querySelectorAll('span');
      
        const arrayValue = text.split('')
        arrayQuote.forEach((char,index) =>{
            const character = arrayValue[index]
            if(char == null){
                char.classList.remove('correct')
                char.classList.remove('incorrect')
                setColor("green")
                correct = false   
            }
            else if(character === char.innerText){
                char.classList.add('correct')
                char.classList.remove('incorrect')
                setColor("green")
            }
            else{
                char.classList.remove('correct')
                char.classList.add('incorrect')
                setColor('red')
                correct = false
            }
            
        })
        if(correct){
            renderDat();
            wordsTyped(countWords(cmptxt))
            setColor('green');
            setEffect(true)
            // completed(true)
            document.getElementById('quoteDisp1').value = null 
        }else{
            setEffect(false)
            
            //completed(false)
        }
    }

    function handleChange(e){
        finalFunct(e.target.value)
    }
    return (
        <div className='typeArea'>
       
            <div id="quoteDisp" style={{height:'49%',border:`3px solid ${color}`,margin:'1px',padding:'2px'}} className="show-text">
            </div>
            {
                (effect && complete)
                ? <Confitte width={window.innerWidth} height={window.innerHeight}/> 
                : <div/>
                
            }
            
            <div style={textBlock} className="typeArea-main">
                <textarea
                    type="text"
                    id = "quoteDisp1"
                    style={styleInput}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            {/* <button onClick={renderDat()} >Check Ans</button> */}
        </div>
    )
}


const styleInput = {
    height:'100%',
    width:'100%',
    background: 'transparent',
    color: 'white',
    resize:'none',
}

const textBlock = {height:'49%',border:'1px solid green',marginTop:'2px',padding:'2px'}

