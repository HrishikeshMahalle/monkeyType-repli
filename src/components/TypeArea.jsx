import React,{useState, useEffect} from 'react'



export default function TypeArea() {

    const CmpText = "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English."

    const [text,setText] = useState("")

    useEffect(() => {
        if(text[text.length - 1] === CmpText[text.length - 1]){
            console.log("correct")
        }else{
            console.log("uncorrect")
        }
       
    }, [text])

    function handleChange(e){
       setText(e.target.value)
    }
    return (
        <>
        <div style={{height:'49%',border:'1px solid green',margin:'1px',padding:'2px'}} className="show-text">
            {CmpText}
        </div>

        <div style={{height:'49%',border:'1px solid green',marginTop:'2px',padding:'2px'}} className="typeArea-main">
        <textarea
            type="text"
            style={styleInput}
            onChange={(e)=>handleChange(e)}
        />
        </div>
        {/* <button onClick={handleCheck} >Check Ans</button> */}
        </>
    )
}


const styleInput = {
    height:'100%',
    width:'100%',
    background: 'transparent',
    color: 'white',
}