import React from 'react'
import { useState } from 'react'
import "../app.css"

function ExpGraph() {
    return (
        
        <div>
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
        </div>
    )
}

export default ExpGraph




/*
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
*/