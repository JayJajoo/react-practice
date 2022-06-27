import React from 'react'
import { useState,useEffect } from 'react';

function Clock() {
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(30);
    useEffect(() => {
        if (min >= 0) {
            if (sec > 0) {
                setTimeout(() => { setSec(sec - 1); }, 1000);
            }
            if (sec === 0 && min > 0) {
                setMin(min - 1);
                setSec(2);
            }
            if (min === 0 && sec === 0) {
                setSec(0);
                return;
            }
        }
    }, [min, sec]);
    return (
        <div>
            <div class="clock">
                <div class="flex  justify">
                    <div class="clock_box">{min}</div>
                    <div class="clock_box">{sec}</div>
                </div>
                <button class="start_timer" type="submit">Start</button>
            </div>
        </div>
    )
}

export default Clock