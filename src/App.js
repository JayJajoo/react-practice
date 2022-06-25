import React, { useEffect, useState } from "react";
import "./app.css"
import Items from "./Items";

function App() {
 

  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(30);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [info,setInfo]=useState([])

  let aft="";
  let block="block";

  const submit=(event)=>{
    event.preventDefault();
    setInfo([...info,{name:name,email:email}])
  }


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

  const changes_email=(event)=>{
    let eml=event.target.value;
    if(eml.includes("@") && eml.includes(".com") && eml.indexOf("@")>0){
      setEmail(eml);
      document.getElementById("item").classList.add("aft");
      document.getElementById("addexp").classList.remove("block");
    }
    else{
      document.getElementById("item").classList.remove("aft");
      document.getElementById("addexp").classList.add("block");
    }
  }

  const changes_name=(event)=>{
    setName(event.target.value)
  }

  return (
    <div class="container">
      <div class="clock">
        <div class="flex  justify">
          <div class="clock_box">{min}</div>
          <div class="clock_box">{sec}</div>
        </div>
        <button class="start_timer" type="submit">Start</button>
      </div>
      <div class="add_drop">
        <form onSubmit={submit}>
          <div class="flex justify">
          <input onChange={changes_name} class="date" type="text" placeholder="Name"></input>
            <input onChange={changes_email} id="item" className={aft} type="text" placeholder="Email"></input>
          </div>
          <button id="addexp" className={block}>Add</button>
        </form>
      </div>
      {info.length>0 && info.map((item)=>{return(<Items name={item.name} email={item.email}></Items>)})}
    </div>
  )
}
export default App;
