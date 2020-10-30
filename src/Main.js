import React, {useState} from 'react';
import Number from "./Number";
import Buttons from "./Buttons";

function Main(props) {
    const [counter, setCounter] = useState(0);

    function plus() {
        setCounter(counter + 3);
    }
    function minus() {
        if(counter > 0) {
            setCounter(counter - 2);
        }
    }
    function reset() {
        if (counter > 0) {
            setCounter(0);
        }
    }
    return (
        <div className="app">
            <div className="main">
                <Number counter={counter}/>
                <Buttons plus={plus} minus={minus} reset={reset}/>
            </div>
        </div>
    );
}

export default Main;