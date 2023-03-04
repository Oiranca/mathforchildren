import React, {useEffect, useState} from "react";
import './Operation.scss'
import {dataForOperation} from "../../method/DataForOperation/dataForOperation";

type DataForOperation = {
    digit: number,
    typeOfOperation: string
};
export const Operation = ({digit, typeOfOperation}: DataForOperation) => {
    const [resultOperation, setResultOperation] = useState<string>('');
    const [typeOperation, setTypeOperation] = useState<string>('');
    const [errorInputChange, setErrorInputChange] = useState<boolean>(false);
    const [data, setData] = useState({
        'firstNumberOperation': 0,
        'secondNumberOperation': 0,
    });

    useEffect(() => {
        if (digit !== 0) {
            setData({
                'firstNumberOperation': dataForOperation(digit).firstNumber,
                'secondNumberOperation': dataForOperation(digit).secondNumber
            })
        }
    }, [digit]);

    useEffect(() => {
        if (typeOfOperation !== '') {
            setTypeOperation(typeOfOperation);
        }
    }, [typeOfOperation]);
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
                <div className="symbol">{typeOperation}</div>
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