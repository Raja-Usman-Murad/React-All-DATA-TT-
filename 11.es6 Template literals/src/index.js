import React from 'react';
import ReactDOM from 'react-dom';

const fname = "USMAN";
const lname = "MURAD";

// 1 method) write js in curley braces
ReactDOM.render(
<>
<h1>HELLO WORLD!! (RAJA USMAN)</h1>
<h2>my first name is {fname} {lname}</h2>
</>
,document.getElementById('root'));

// 2 method) write js in curley braces using concatenation
ReactDOM.render(
<>
<h1>HELLO WORLD!! (RAJA USMAN)</h1>
<h2>my first name is {fname+" "+lname}</h2>
</>
,document.getElementById('root'));

// 2 method) write js using template literals
ReactDOM.render(
<>
<h1>HELLO WORLD!! (RAJA USMAN)</h1>
<h2>{`MY NAME IS ${fname + ' ' + lname}`}</h2>
</>
,document.getElementById('root'));