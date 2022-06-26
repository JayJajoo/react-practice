import React, { useEffect, useState } from "react";
import "./app.css"
import Items from "./Items";

function App() {

  const [nalla, setNalla] = useState("true")
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(30);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([])
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [expenditure, setExpenditure] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [expenseList, setExpenseList] = useState([])

  let aft = "";
  let block = "block";

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

  const changes_item = (event) => {
    setItem(event.target.value)
  }
  const changes_cost = (event) => {
    setCost(parseInt(event.target.value))
  }
  const changes_date = (event) => {
    setDate(parseInt(event.target.value.split("-")[1]))
  }


  const generateExpense = (event) => {
    event.preventDefault();
    if (nalla.match("true")) {
      document.getElementById("jan").children[1].style.height = "20vh";
      document.getElementById("feb").children[1].style.height = "50vh";
      document.getElementById("mar").children[1].style.height = "20vh";
      document.getElementById("apr").children[1].style.height = "10vh";
      document.getElementById("may").children[1].style.height = "35vh";
      document.getElementById("jun").children[1].style.height = "5vh";
      document.getElementById("jul").children[1].style.height = "17vh";
      document.getElementById("aug").children[1].style.height = "20vh";
      document.getElementById("sep").children[1].style.height = "41vh";
      document.getElementById("oct").children[1].style.height = "20vh";
      document.getElementById("nov").children[1].style.height = "25vh";
      document.getElementById("dec").children[1].style.height = "30vh";
      setNalla("false")
    }
    else {
      document.getElementById("jan").children[1].style.height = "30vh";
      document.getElementById("feb").children[1].style.height = "20vh";
      document.getElementById("mar").children[1].style.height = "39vh";
      document.getElementById("apr").children[1].style.height = "29vh";
      document.getElementById("may").children[1].style.height = "60vh";
      document.getElementById("jun").children[1].style.height = "30vh";
      document.getElementById("jul").children[1].style.height = "32vh";
      document.getElementById("aug").children[1].style.height = "45vh";
      document.getElementById("sep").children[1].style.height = "26vh";
      document.getElementById("oct").children[1].style.height = "47vh";
      document.getElementById("nov").children[1].style.height = "36vh";
      document.getElementById("dec").children[1].style.height = "20vh";
      setNalla("true")
    }
    setExpenditure({
      a: item,
      b: cost,
      c: date,
    })
    setExpenseList([...expenseList, {
      item: expenditure.a,
      cost: expenditure.b,
      date: expenditure.c
    }])
    console.log(expenseList)
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

      {info.length > 0 && info.map((item) => { return (<Items name={item.name} email={item.email}></Items>) })}

      <div class="expenditure">
        <form onSubmit={generateExpense}>
          <div class="add_exp flex justify">
            <input onChange={changes_item} type="text" placeholder="item"></input>
            <input onChange={changes_cost} type="number" placeholder="cost"></input>
            <input onChange={changes_date} type="month"></input>
            <button type="submit" class="sub_exp">Add Expense</button>
          </div>
          <div class="graph flex">
            <div class="bars" id="jan"><p class="graph_text">Jan</p><div id="changing_bars"></div></div>
            <div class="bars" id="feb"><p class="graph_text">Feb</p><div id="changing_bars"></div></div>
            <div class="bars" id="mar"><p class="graph_text">Mar</p><div id="changing_bars"></div></div>
            <div class="bars" id="apr"><p class="graph_text">Apr</p><div id="changing_bars"></div></div>
            <div class="bars" id="dec"><p class="graph_text">May</p><div id="changing_bars"></div></div>
            <div class="bars" id="may"><p class="graph_text">Jun</p><div id="changing_bars"></div></div>
            <div class="bars" id="jun"><p class="graph_text">Jul</p><div id="changing_bars"></div></div>
            <div class="bars" id="jul"><p class="graph_text">Aug</p><div id="changing_bars"></div></div>
            <div class="bars" id="aug"><p class="graph_text">Sep</p><div id="changing_bars"></div></div>
            <div class="bars" id="sep"><p class="graph_text">Oct</p><div id="changing_bars"></div></div>
            <div class="bars" id="oct"><p class="graph_text">Nov</p><div id="changing_bars"></div></div>
            <div class="bars" id="nov"><p class="graph_text">Dec</p><div id="changing_bars"></div></div>
          </div>
          <button type="submit" class="sub_exp">Generate Graph</button>
          <div class="exp_cards">
            {expenseList.length > 0 && expenseList.map((itm) => { return (<div class="exp_info_card">{itm.item}<br />{itm.cost}<br />{itm.date}</div>) })}
          </div>
        </form>
      </div>
    </div>
  )
}
export default App;
