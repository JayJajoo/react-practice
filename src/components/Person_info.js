import React from 'react'
import { useState } from 'react'
import "../app.css"
import Items from './Items';

function Person_info() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState([])
    let aft = "";
    let block = "block";
    const changes_email = (event) => {
        let eml = event.target.value;
        if (eml.includes("@") && eml.includes(".com") && eml.indexOf("@") > 0) {
            setEmail(eml);
            document.getElementById("item").classList.add("aft");
            document.getElementById("addexp").classList.remove("block");
        }
        else {
            document.getElementById("item").classList.remove("aft");
            document.getElementById("addexp").classList.add("block");
        }
    }

    const changes_name = (event) => {
        setName(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        setInfo([...info, { name: name, email: email }])
        console.log(info);
    }
    return (
        <div>
            <div class="add_drop">
                <form onSubmit={submit}>
                    <div class="flex justify">
                        <input onChange={changes_name} class="date" type="text" placeholder="Name"></input>
                        <input onChange={changes_email} id="item" className={aft} type="text" placeholder="Email"></input>
                    </div>
                    <button id="addexp" className={block}>Add</button>
                </form>
            </div>

            {info.length > 0 && info.map((item) => { return (<Items name={item.name} email={item.email}></Items>) })}
        </div>
    )
}

export default Person_info