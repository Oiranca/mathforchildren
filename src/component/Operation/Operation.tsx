import React, {useEffect, useState} from "react";
import './Operation.scss'
import {dataForOperation} from "../../method/DataForOperation/dataForOperation";

type DataForOperation = {
    digit: number
};
export const Operation = ({digit}: DataForOperation) => {
    const [resultOperation, setResultOperation] = useState<string>('');
    const [errorInputChange, setErrorInputChange] = useState<boolean>(false);
    const [data, setData] = useState({
        'firstNumberOperation': 0,
        'secondNumberOperation': 0,
    });

    // const [data, setData] = useState<Record<string, number>>({
    //     'firstNumber': 0,
    //     'secondNumber': 0,
    //     'type': 0
    // });

    // useEffect(() => {
    //     setData({
    //         'firstNumber': firstNumberOperation,
    //         'secondNumber': secondNumberOperation,
    //         'type': typeOperation
    //     })
    // }, [firstNumberOperation,
    //     secondNumberOperation,
    //     typeOperation])
    useEffect(() => {
        if (digit !== 0) {
            setData({
                'firstNumberOperation': dataForOperation(digit).firstNumber,
                'secondNumberOperation': dataForOperation(digit).secondNumber
            })
        }
    }, [digit])
    const getChange = (eventValue: React.ChangeEvent<HTMLInputElement>) => {
        const valueResult = eventValue.currentTarget.value;
        setResultOperation(valueResult);

    };


    useEffect(() => {
        if (isNaN(parseInt(resultOperation)) && resultOperation !== '') {
            setErrorInputChange(true);
        } else {
            setErrorInputChange(false);

        }
    }, [resultOperation])
    return (
        <>
            <div className={'operation-box'}>
                <div className="symbol">+</div>
                <div className="firstNumber">{data.firstNumberOperation}</div>
                <div className="secondNumber">{data.secondNumberOperation}</div>
                <div className="result">
                    <input type={'text'}
                           id={errorInputChange ? 'input-error' : 'input-result'}
                           value={resultOperation}
                           onChange={getChange}/>
                </div>
            </div>

        </>
    )
}