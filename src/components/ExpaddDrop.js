import React, { useEffect } from 'react'
import { useState } from 'react'
import "../app.css"
import ExpGraph from "./ExpGraph"
import ExpCards from './ExpCards'

function ExpaddDrop() {
    const [explist, setExplist] = useState([]);

    const [info, setInfo]=useState({
        item:"",
        cost:null,
        month:null
    })



    const changes_item=(event)=>{
        setInfo({
            ...info,
            item:event.target.value
        })
    }

    const changes_cost = (event) => {
        setInfo({
            ...info,
            cost:parseInt(event.target.value)
        })
    }
    const changes_date = (event) => {
        setInfo({
            ...info,
            month:parseInt(event.target.value.split("-")[1])
        })
    }

    useEffect(()=>{
        console.log(explist);
    },[explist])

    const submits =(event)=> {
        event.preventDefault();
        if(info.item.length>0 && info.cost>0 && info.month>0){
            setExplist([...explist, info]);
        }
    }

    return (
        <div>
            <form onSubmit={submits}>
                <div class="add_exp flex justify">
                    <input onChange={changes_item} type="text" placeholder="item"></input>
                    <input onChange={changes_cost} type="number" placeholder="cost"></input>
                    <input onChange={changes_date} type="month"></input>
                    <button type="submit" class="sub_exp">Add Expense</button>
                </div>
            </form>
            <div class="expcards flex">
                {explist.length==0 && <div style={{color: 'white'}}>No expense added yet</div>}
                {explist.length>0 && explist.map((item)=>{return(<ExpCards value={item}></ExpCards>)})}
            </div>
            <ExpGraph></ExpGraph>
        </div>
    )
}

export default ExpaddDrop