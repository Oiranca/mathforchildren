import React from "react";
import "./Container.scss";
import { MainMenu } from "../MainMenu/MainMenu";

export const Container = () => {
  return (
    <div className={"container-box"}>
      <header id={"title"}>
        <h1> Math for Children</h1>
      </header>
      <main>
        <section>
          <MainMenu />
        </section>
        <section>Submenu</section>
      </main>

      <section className={"operation"}>Aquí las operaciones</section>
    </div>
  );
};
