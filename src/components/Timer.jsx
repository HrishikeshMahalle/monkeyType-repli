import React,{useEffect,useState} from 'react'

export default function Timer({completed,complete}) {

    const[time,setTime] = useState(60)
    //const date = new Date("Jan 5, 2030 15:37:25").getTime();
    //let now = new Date().getTime();

   // let distance = Math.floor(((date - now)%(1000 * 60))/1000);

 

    useEffect(() => {
        const Timer = setTimeout(()=>{
            if(time > 0 )
                setTime(time - 1)
        },1000);
    })

    return (
        <div className='timer'>
            {time}
        </div>
    )
}
