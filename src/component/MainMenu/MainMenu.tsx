import React from "react";
import "./MainMenu.scss";

enum TypeOperation {
    sum = '+',
    multiply = 'x',
    subtraction = '-',
    divide = '/'
}
type Props={
    operation:(data:string)=>void;
}
export const MainMenu = ({operation}: Props) => {

    const handlerOperation = (event: React.MouseEvent<HTMLButtonElement>) => {
        operation(event.currentTarget.value);
    };

    return (
        <main className="main-tab">
            <ul className="main-menu">
                <li>
                    <button className="item-menu" value={TypeOperation.sum} onClick={handlerOperation}>Suma</button>
                </li>
                <li>
                    <button className="item-menu" value={TypeOperation.subtraction} onClick={handlerOperation}>Resta
                    </button>
                </li>
                <li>
                    <button className="item-menu" value={TypeOperation.multiply}
                            onClick={handlerOperation}>Multiplicación
                    </button>
                </li>
                <li>
                    <button className="item-menu" value={TypeOperation.divide} onClick={handlerOperation}>División
                    </button>
                </li>
            </ul>
        </main>
    );
};
