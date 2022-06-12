import React from "react";
import ReactDOM from "react-dom";
import youtuber,{channel,language,myName} from './App';

ReactDOM.render(
    <>
  <ol>
      <li>my favourite youtuber is {youtuber}</li>
      <li>my favourite youtube channel is {channel}</li>
      <li>my favourite languge is {language()}</li>
      <li>my name is {myName()}</li>
      
  </ol> 
</>
  ,document.getElementById("root")

);
