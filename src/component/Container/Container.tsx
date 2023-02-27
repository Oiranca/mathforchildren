import React, {useEffect, useState} from "react";
import {MainMenu} from "../MainMenu/MainMenu";
import {SubMenu} from "../SubMenu/SubMenu";
import {Operation} from "../Operation/Operation";
import correct from '../../img/correct.png'
import "./Container.scss";

export const Container = () => {

    const [qualify, setQualify] = useState<number>(0);
    const [revise, setRevise] = useState<boolean>(true);
    const [resultView, setResultView] = useState<string>('');

    useEffect(() => {
        setResultView(qualify > 5 ? 'result-pass' : 'result-fail')
    }, [qualify])

    const calculateResult = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('resultado')
    };

    return (
        <div className={"container-box"}>
            <header id={"title"}>
                <h1> Math for Children</h1>
            </header>
            <main>
                <section>
                    <MainMenu/>
                </section>
                <section>
                    <SubMenu/>
                </section>
            </main>

            <form className={"operation"} onSubmit={calculateResult}>
                <Operation typeOperation={"+"} keyOperation={0}/>
                <Operation typeOperation={"+"} keyOperation={1}/>
                <Operation typeOperation={"+"} keyOperation={2}/>
                <Operation typeOperation={"+"} keyOperation={3}/>
                <Operation typeOperation={"+"} keyOperation={4}/>
                <Operation typeOperation={"+"} keyOperation={5}/>
                <Operation typeOperation={"+"} keyOperation={6}/>
                <Operation typeOperation={"+"} keyOperation={7}/>
                <Operation typeOperation={"+"} keyOperation={8}/>
                <Operation typeOperation={"+"} keyOperation={9}/>
                <input type={"image"} className={'image-result'} alt={'type result'} src={correct}/>
                <div className={'submit-result'}>

                    <p id={resultView}>{revise ? 'Sin Corregir' : `${qualify}/10`}</p>
                    <button className={'button-result'} type={"submit"}>Corregir</button>

                </div>
            </form>
        </div>
    );
};
