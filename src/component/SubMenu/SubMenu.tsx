import React from "react";
import "./SubMenu.scss";

export const SubMenu = () => {
    return (
            <main className="menu-option">
                <div className="item-menu-option">
                    <input type={'radio'} value={'Un dígito'}/>
                    <label htmlFor="Un dígito">Un dígito</label>
                </div>
                <div className="item-menu-option">
                    <input type={'radio'} value={'Dos dígitos'}/>
                    <label htmlFor="Dos dígitos">Dos dígitos</label>

                </div>
                <div className="item-menu-option">
                    <input type={'radio'} value={'Tres dígitos'}></input>
                    <label htmlFor="Tres dígitos">Tres dígitos</label>

                </div>
                <div className="item-menu-option">
                    <input type={'radio'} value={'Más dígitos'}/>
                    <label htmlFor="Más dígitos">Más dígitos</label>

                </div>
            </main>
    );
};
