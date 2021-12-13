import React,{useState, useEffect} from 'react'
import axios from 'axios'


let count = 1

let correct = true;

export default function TypeArea() {

    const CmpText = "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English."

    //const [text,setText] = useState("")
    // const [count,setCount] = useState(0)
    const [color,setColor] = useState("green")
    const [cmptxt,setCmptxt] = useState("loading...")
    console.log(cmptxt)
    
    window.onload= async ()=>{
        await renderDat()
    }
   
    const renderDat = () =>{
          axios.get('http://api.quotable.io/random')
        .then(data => setCmptxt(data.data.content))
        document.getElementById('quoteDisp').value = null
    }

    

    useEffect(() => {
        createSpan()
    }, [cmptxt])
  
    function createSpan(){
        const quoteDisplay = document.getElementById('quoteDisp')
        quoteDisplay.innerHTML = ''
        cmptxt.split('').forEach(char =>{
            const charSpan = document.createElement('span')
            charSpan.classList.add('correct')
            charSpan.innerText = char
            quoteDisplay.appendChild(charSpan)
            console.log(char)
        })
    }

    function finalFunct(text){
        const quoteDisplay = document.getElementById('quoteDisp')
        const arrayQuote = quoteDisplay.querySelectorAll('span');
        const arrayValue = text.split('')
        arrayQuote.forEach((char,index) =>{
            const character = arrayValue[index]
            if(char == null){
                char.classList.remove('correct')
                char.classList.remove('incorrect')
                correct = false
            }
            else if(character === char.innerText){
                char.classList.add('correct')
                char.classList.remove('incorrect')
            }
            else{
                char.classList.remove('correct')
                char.classList.add('incorrect')
                correct = false
            }
        })
        
    }

    function handleChange(e){
        finalFunct(e.target.value)
    }
    return (
        <div className='typeArea'>
        <div id="quoteDisp" style={{height:'49%',border:`3px solid ${color}`,margin:'1px',padding:'2px'}} className="show-text">
           
        </div>

        <div style={textBlock} className="typeArea-main">
        <textarea
            type="text"
            id = "quoteDisp"
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

