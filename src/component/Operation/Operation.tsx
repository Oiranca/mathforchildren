import React from "react";
import './Operation.scss'

export const Operation = () => {

    return (<div className={'operation-box'}>

        <div className="Symbol">+</div>
        <div className="firstNumber">1000</div>
        <div className="secondNumber">2000</div>
        <div className="result"><input type={'number'}/></div>
    </div>)
}