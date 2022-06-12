import React from 'react';


function Heading() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    let greetingStyle = {};
    
    if (curDate >= 1 && curDate < 12) {
      greeting = "GOOD MORNING";
      greetingStyle.color = "green";
      greetingStyle.textShadow = "0px 5px 5px black";
    } else if (curDate >= 12 && curDate < 19) {
      greeting = "AFTER NOON";
      greetingStyle.color = "orange";
      greetingStyle.textShadow = "0px 5px 5px black";
    } else {
      greeting = "GOOD NIGHT";
      greetingStyle.color = "black";
      greetingStyle.textShadow = "0px 5px 5px black";
    }

    return(
        <>
        <div>
    <h1>
      Hello Sir, <span style={greetingStyle}>{greeting} </span>
    </h1>
    </div>
    </>
    )
}
export default Heading;