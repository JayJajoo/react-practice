import React, { useEffect, useState } from "react";
import "./app.css"
import Items from "./components/Items";
import Clock from "./components/Clock";
import Person_info from "./components/Person_info";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div class="container">
      <Clock></Clock>
      <Person_info></Person_info>
      <ExpenseTracker></ExpenseTracker>
    </div>
  )
}
export default App;
