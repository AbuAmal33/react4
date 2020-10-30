import React from 'react';

function Buttons(props) {

    return (
        <div className="button">
            <div className="button_1" onClick={props.plus}>
                <a href="#">Увеличить</a>
            </div>
            <div className="button_2" onClick={props.minus}>
                <a href="#">Уменьшить</a>
            </div>
            <div className="button_3" onClick={props.reset}>
                <a href="#">Сбросить</a>
            </div>
        </div>
    )
}

export default Buttons;