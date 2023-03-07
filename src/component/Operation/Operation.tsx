import React, {useEffect, useState} from "react";
import {dataForOperation} from "../../method/DataForOperation/dataForOperation";
import incorrect from '../../img/incorrect.png';
import './Operation.scss'
import {randomKeyValue} from "../../method/RandomKeyValue/randomKeyValue";

type DataForOperation = {
    digit: number
    typeOfOperation: string
    result: (result: number) => void;
};
export const Operation = ({digit, typeOfOperation, result}: DataForOperation) => {
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
    const resultChange = (eventValue: React.ChangeEvent<HTMLInputElement>) => {
        const isNumber = RegExp(/^\d+$/);
        const valueResult = eventValue.currentTarget.value;

        if (isNumber.test(valueResult)) {

            setResultOperation(valueResult);
            setErrorInputChange(false);
            result(parseInt(valueResult));

        } else {
            setErrorInputChange(true);

        }
    };


    return (
        <>
            {typeOfOperation !== '/' ? <div className={'operation-box'}>
                <div className="symbol">{typeOperation}</div>
                <div className="firstNumber">{data.firstNumberOperation}</div>
                <div className="secondNumber">{data.secondNumberOperation}</div>
                <div className="result">
                    <input type={'text'}
                           id={errorInputChange ? 'input-error' : 'input-result'}
                           value={resultOperation}
                           onChange={resultChange} name={randomKeyValue()}/>
                </div>
            </div> : <div className={'information-box'}>
                <h4>En Construcción</h4>
                <input type={"image"} className={'image-information'} alt={'type result'} src={incorrect}/>

            </div>}


        </>
    )
};