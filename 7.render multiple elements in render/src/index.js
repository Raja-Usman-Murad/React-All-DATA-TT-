import React from 'react';
import ReactDOM from 'react-dom';

/* (1 method) ReactDOM.render() it take only one element not more than 
one so we can put all elements in the one div tag*/
ReactDOM.render(
<div>
<h1>HELLO WORLD!! (RAJA USMAN)</h1>
<p>My name is raja usman and i am a student of Software Engineering in Hazara University Mansehra</p>
</div>,
document.getElementById('root'));

/* (2 method) ReactDOM.render() it take only one element not more than 
one so we can put all elements in Array like structure but your react version is more than 16.something*/
ReactDOM.render(
    [
    <h1>HELLO WORLD!! (RAJA USMAN)</h1>,
    <p>My name is raja usman and i am a student of Software Engineering in Hazara University Mansehra</p>,
    <h3>THIS IS ARRAY STRUCTURE</h3>
    ],
    document.getElementById('root'));

