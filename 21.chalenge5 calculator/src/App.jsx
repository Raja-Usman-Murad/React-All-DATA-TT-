import React from 'react';
import {add,sub,mul,div} from './Calculator';

function App() {
    return(
        <>
        <ol>
            <li>sum={add(2,2)}</li>
            <li>sub={sub(2,2)}</li>
            <li>mul={mul(2,2)}</li>
            <li>div={div(2,2)}</li>
        </ol>
        </>
    )

}
export default App;