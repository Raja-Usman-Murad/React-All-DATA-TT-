import React from 'react';
import ReactDOM from 'react-dom';

/* (1 method)when we use div tag it includes another div in the dom which is not good practise so we use <React.Fragment>*/

ReactDOM.render(
    <div>
    <h1>HELLO WORLD!! (RAJA USMAN)</h1>
    <p>My name is raja usman and i am a student of Software Engineering in Hazara University Mansehra</p>
    <h3>THIS IS ARRAY STRUCTURE</h3>
    </div>,
    document.getElementById('root'));

ReactDOM.render(
<React.Fragment>
<h1>HELLO WORLD!! (RAJA USMAN)</h1>
<p>My name is raja usman and i am a student of Software Engineering in Hazara University Mansehra</p>
<h3>THIS IS ARRAY STRUCTURE</h3>
</React.Fragment>,
document.getElementById('root'));

/* (2 method)this is another method to write React.Fragment which is only syntax like <> </>*/
ReactDOM.render(
    <>
    <h1>HELLO WORLD!! (RAJA USMAN)</h1>
    <p>My name is raja usman and i am a student of Software Engineering in Hazara University Mansehra</p>
    <h3>THIS IS ARRAY STRUCTURE</h3>
    </>,
    document.getElementById('root'));

