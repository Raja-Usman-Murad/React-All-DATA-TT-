import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const todayDate = date.toLocaleDateString();
const todayTime = date.toLocaleTimeString();

ReactDOM.render(
<>    
<h1>HELLO, MY NAME IS  RAJA USMAN</h1>
<h2>TODAY DATE IS: {todayDate}</h2>
<h2>CURRENT TIME IS: {todayTime}</h2>
</>
,document.getElementById('root'));