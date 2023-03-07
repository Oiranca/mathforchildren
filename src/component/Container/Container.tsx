import React, {useEffect, useState} from "react";
import {MainMenu} from "../MainMenu/MainMenu";
import {SubMenu} from "../SubMenu/SubMenu";
import {Operation} from "../Operation/Operation";
import "./Container.scss";

// interface range {
//     [key: number]: number[];
// }

export const Container = () => {

    const [qualify, setQualify] = useState<number>(10);
    const [revise, setRevise] = useState<boolean>(true);
    const [resultView, setResultView] = useState<string>('result-pass');
    const [digitSelected, setDigitSelected] = useState<number>(0);
    const [typeOfExercise, setTypeOfExercise] = useState<string>('');

    useEffect(() => {
        setResultView(qualify >= 5 ? 'result-pass' : 'result-fail')
    }, [qualify]);

    const calculateResult = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const typeOperation = (type: string) => {
        setTypeOfExercise(type);
    }

    const numberOfDigit = (quantitySelected: number) => {
        setDigitSelected(quantitySelected);
    }
    const resultInput = (resultIntroduce: number) => {
        console.log(resultIntroduce);
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

            {typeOfExercise !== '' && digitSelected !== 0 &&
                <form className={"operation"} onSubmit={calculateResult}>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <Operation digit={digitSelected} typeOfOperation={typeOfExercise} result={resultInput}/>
                    <div className={'submit-result'}>
                        <p id={resultView}>{revise ? 'Nota :' : `Nota : ${qualify}/10`}</p>
                        <button className={'button-result'} type={"submit"}>Corregir</button>

                    </div>
                </form>}
        </div>
    );
};
