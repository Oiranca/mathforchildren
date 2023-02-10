import React from "react";
import "./MainMenu.scss";

export const MainMenu = () => {
  return (
    <main className="main-tab">
      <ul className="main-menu">
        <li>
          <button className="item-menu">Suma</button>
        </li>
        <li>
          <button className="item-menu">Resta</button>
        </li>
        <li>
          <button className="item-menu">Multiplicación</button>
        </li>
        <li>
          <button className="item-menu">División</button>
        </li>
      </ul>
    </main>
  );
};
