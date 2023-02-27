import React, {useEffect, useState} from "react";
import './Operation.scss'

type TypeOperation = {
    typeOperation: string
    keyOperation: number
}
export const Operation = ({typeOperation, keyOperation}: TypeOperation) => {
    const [resultOperation, setResultOperation] = useState<string>('');
    const [errorInputChange, setErrorInputChange] = useState<boolean>(false);


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
            <div className={'operation-box'} key={keyOperation}>
                <div className="symbol">{typeOperation}</div>
                <div className="firstNumber">1000</div>
                <div className="secondNumber">2000</div>
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