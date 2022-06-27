import React from 'react'
import "../app.css"

function ExpCards(props) {

  const month={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}
  return (
    <div>
        <div class="card">
            <p style={{fontSize:"4vh"}}>{props.value.item}</p>
            <p style={{fontSize:"3vh"}}>{props.value.cost}$</p>
            <p style={{fontSize:"3vh"}}>{month[props.value.month]}</p>
        </div>
    </div>
  )
}

export default ExpCards