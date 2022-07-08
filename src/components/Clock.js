import React from 'react'
import { useState,useEffect } from 'react';

function Clock() {
    const [on,setOn] = useState(false)
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(30);
    useEffect(() => {
        if(on==true){
            const timer=setTimeout(()=>{
                if(sec>0){
                    setSec(sec-1);
                }
                if(sec==0 && min>0){
                    setSec(59);
                    setMin(min-1);
                }
                if(sec==0 && min==0){
                    setSec(1);
                    setMin(30);
                    clearTimeout(timer);
                    setOn(false);
                    alert("time over")
                }
            },1000)
        }
    },[on,sec,min]);
    return (
        <div>
            <div class="clock">
                <div class="flex  justify">
                    <div class="clock_box">{min}</div>
                    <div class="clock_box">{sec}</div>
                </div>
                <button onClick={()=>setOn(true)} class="start_timer" type="submit">Start</button>
            </div>
        </div>
    )
}

export default Clock