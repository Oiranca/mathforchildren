import React, {useEffect, useState} from "react";
import {MainMenu} from "../MainMenu/MainMenu";
import {SubMenu} from "../SubMenu/SubMenu";
import {Operation} from "../Operation/Operation";
import correct from '../../img/correct.png'
import "./Container.scss";

// interface range {
//     [key: number]: number[];
// }

export const Container = () => {

    const [qualify, setQualify] = useState<number>(0);
    const [revise, setRevise] = useState<boolean>(true);
    const [resultView, setResultView] = useState<string>('');
    const [digitSelected, setDigitSelected] = useState<number>(0);
    const [dataForExercise, setDataForExercise] = useState<Record<string, string | number>>({
        'firstNumberOperation': 0,
        'secondNumberOperation': 0,
        'typeOperation': ''
    });

    useEffect(() => {
        setResultView(qualify > 5 ? 'result-pass' : 'result-fail')
    }, [qualify]);

    const calculateResult = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('resultado')
    };
    const typeOperation = (type: string) => {
        setDataForExercise({...dataForExercise, typeOperation: type});
    }

    const numberOfDigit = (quantitySelected: number) => {
        setDigitSelected(quantitySelected);
    }

    return (
        <div className={"container-box"}>
            <header id={"title"}>
                <h1> Math for Children</h1>
            </header>
            <main>
                <section>
                    <MainMenu operation={typeOperation}/>
                </section>
                <section>
                    <SubMenu digit={numberOfDigit}/>
                </section>
            </main>

            <form className={"operation"} onSubmit={calculateResult}>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <Operation digit={digitSelected}/>
                <input type={"image"} className={'image-result'} alt={'type result'} src={correct}/>
                <div className={'submit-result'}>

                    <p id={resultView}>{revise ? 'Sin Corregir' : `${qualify}/10`}</p>
                    <button className={'button-result'} type={"submit"}>Corregir</button>

                </div>
            </form>
        </div>
    );
};
