import { generateUtilityClass } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../app.css"

function ExpGraph(props) {


    const [total, setTotal] = useState(null);

    const [exp, setExp] = useState({
        "jan": null,
        "feb": null,
        "mar": null,
        "apr": null,
        "may": null,
        "jun": null,
        "jul": null,
        "aug": null,
        "sep": null,
        "oct": null,
        "nov": null,
        "dec": null,
    })

    const cost=props.value.cost;

    const genExp = (event) => {
        event.preventDefault();
        switch (props.value.month) {
            case 1:
                setExp({
                    ...exp,
                    "jan": exp["jan"] + cost,
                })
                break;
            case 2:
                setExp({
                    ...exp,
                    "feb": exp["feb"] + cost,
                })
                break;
            case 3:
                setExp({
                    ...exp,
                    "mar": exp["mar"] + cost,
                })
                break;
            case 4:
                setExp({
                    ...exp,
                    "apr": exp["apr"] + cost,
                })
                break;
            case 5:
                setExp({
                    ...exp,
                    "may": exp["may"] + cost,
                })
                break;
            case 6:
                setExp({
                    ...exp,
                    "jun": exp["jun"] + cost,
                })
                break;
            case 7:
                setExp({
                    ...exp,
                    "jul": exp["jul"] + cost,
                })
                break;
            case 8:
                setExp({
                    ...exp,
                    "aug": exp["auq"] + cost,
                })
                break;
            case 9:
                setExp({
                    ...exp,
                    "sep": exp["sep"] + cost,
                })
                break;
            case 10:
                setExp({
                    ...exp,
                    "oct": exp["oct"] + cost,
                })
                break;
            case 11:
                setExp({
                    ...exp,
                    "nov": exp["nov"] + cost,
                })
                break;
            case 12:
                setExp({
                    ...exp,
                    "dec": exp["dec"] + cost,
                })
                break;
        }

        setTotal(total+cost)
    }

    const changeGraph=()=>{
        document.getElementById("jan").children[1].style.height = ((exp["jan"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("feb").children[1].style.height = ((exp["feb"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("mar").children[1].style.height = ((exp["mar"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("apr").children[1].style.height = ((exp["apr"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("may").children[1].style.height = ((exp["may"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("jun").children[1].style.height = ((exp["jun"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("jul").children[1].style.height = ((exp["jul"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("aug").children[1].style.height = ((exp["aug"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("sep").children[1].style.height = ((exp["sep"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("oct").children[1].style.height = ((exp["oct"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("nov").children[1].style.height = ((exp["nov"]*100)/(total*2.5)).toString()+"vh"
        document.getElementById("dec").children[1].style.height = ((exp["dec"]*100)/(total*2.5)).toString()+"vh"

    }

    useEffect(()=>{
        console.log("total"+"\t"+total)
        changeGraph();
    },[total])

    useEffect(() => {
    }, [exp])


    return (

        <div>
            <form onSubmit={genExp}>
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
            </form>
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