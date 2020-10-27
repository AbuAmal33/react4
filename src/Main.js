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
                {/*<Number />*/}
                {/*<Buttons />*/}
                <div className="number">
                    {counter}
                </div>
                <div className="button">
                    <div className="button_1" onClick={plus}>
                        <a href="#">Увеличить</a>
                    </div>
                    <div className="button_2" onClick={minus}>
                        <a href="#">Уменьшить</a>
                    </div>
                    <div className="button_3" onClick={reset}>
                        <a href="#">Сбросить</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;