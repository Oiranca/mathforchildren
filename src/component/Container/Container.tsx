import React from "react";
import {MainMenu} from "../MainMenu/MainMenu";
import {SubMenu} from "../SubMenu/SubMenu";
import {Operation} from "../Operation/Operation";
import "./Container.scss";

export const Container = () => {
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

            <section className={"operation"}><Operation/></section>
        </div>
    );
};
