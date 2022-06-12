import React from "react";
import ReactDOM from "react-dom";

// for adding style sheet in js file
import './index.css'

const img1 ="https://picsum.photos/290/300"; 
const img2 ="https://picsum.photos/300/300"; 
const img3 ="https://picsum.photos/310/300"; 

ReactDOM.render(
<>
<h1 className="heading">RAJA'S RANDOM IMAGES</h1>
<div className='imgDiv'>
<img src= {img1} alt="random images" />
<img src= {img2} alt="random images" />
<img src= {img3} alt="random images" />
</div>

<p>Here are the list of my 5 favourite series:</p>
<ol>
    <li>VIKINGS</li>
    <li>GAME OF THRONE</li>
    <li>SPARTACUS</li>
    <li>BANSHEE</li>
    <li>BLACK SPOT</li>
</ol>
</>
,document.getElementById('root')

);
//RULES:
//1. give the class by using className="";