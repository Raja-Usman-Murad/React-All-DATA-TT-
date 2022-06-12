import React from "react";
import ReactDOM from "react-dom";

const img1 ="https://picsum.photos/290/300"; 
const img2 ="https://picsum.photos/300/300"; 
const img3 ="https://picsum.photos/310/300"; 

ReactDOM.render(
<>
<h1 contentEditable="true">RAJA'S RANDOM IMAGES</h1>
<img src= {img1} alt="random images" />
<img src= {img2} alt="random images" />
<img src= {img3} alt="random images" />
<p>Here are the list of my 5 favourite series:</p>
<ol contentEditable="true" style={{marginLeft: 45 + 'px'}}>
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
//1. when more than one words combine together then second word first alphabet will be capital.
//2. those tags which have no child elements then we close thats tags in opening tag.