import React from "react";
import ReactDOM from "react-dom";

const heading ={
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'xx-large',
    textShadow:'0px 5px 4px red'
}

ReactDOM.render(
  <>
    <h1 style={heading}>HELLO WORLD!! (RAJA USMAN)</h1>
    <p style={{
        color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'xx-large',
    textShadow:'0px 5px 4px red'
    }}>HOW ARE YOU?</p>
  </>,
  document.getElementById("root")
);

///RULES
//1.FOR INLINE CSS THE STRUCTURE IS SIMILAR LIKE OBJECT IN JS.
//2.FOR INTERNAL CSS MAKE OBJECT AND THEN DECLARE IN THE HTML ELEMENT.
