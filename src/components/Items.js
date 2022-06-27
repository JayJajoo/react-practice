import React from 'react'
import "../app.css"

function Items(props) {
    const del_event=(event)=>{
        document.getElementById("del_button").classList.add("del_effect");
        document.getElementById("info").remove();
    }

  return (
    <div id="info"className="flex">
        <div class="image">
            <img src='./bird.png'></img>
        </div>
        <div class="person_info">
            <div class="person_name">{props.name}</div>
            <div class="person_email">{props.email}</div>
        </div>
        <button onClick={del_event} className="" id="del_button"><img src="./delete.png"></img></button>
    </div>
  )
}

export default Items