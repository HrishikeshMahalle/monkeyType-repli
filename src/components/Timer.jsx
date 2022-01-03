import React,{useEffect,useState} from 'react'

export default function Timer({complete,setComplete}) {

    const[time,setTime] = useState(60)
    //const date = new Date("Jan 5, 2030 15:37:25").getTime();
    //let now = new Date().getTime();

   // let distance = Math.floor(((date - now)%(1000 * 60))/1000);
    useEffect(() => {
        const Timer = setTimeout(()=>{
            if(time > 0 )
                setTime(time - 1)
        },1000);
        return(()=> clearInterval(Timer))
    })

    if(time === 0)
    {
        setComplete(complete = true)
    }

    // if(time == 0)
    // {
    // completed(true);
    //  }

    return (
        <div className='timer'>
            {time}
        </div>
    )
}
