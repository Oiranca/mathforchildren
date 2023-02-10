import React from "react";
import "./SubMenu.scss";

export const SubMenu = () => {
    const valueOption = (eventValue: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const value = eventValue.currentTarget.value;
        console.log(value)
    }
    return (
        <main className="menu-option">
            <h3 id={'title-range'}>Seleciona cuantos dígitos quieres</h3>

            <div className="option-box">
                <button className={'button-range'} type={"button"}
                        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => valueOption(event)}
                        value={1}>Uno
                </button>
                <button className={'button-range'} type={"button"}
                        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => valueOption(event)}
                        value={2}>Dos
                </button>
                <button className={'button-range'} type={"button"}
                        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => valueOption(event)}
                        value={3}>Tres
                </button>
                <button className={'button-range'} type={"button"}
                        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => valueOption(event)}
                        value={4}>Cuatro
                </button>
            </div>
        </main>


    );
};
