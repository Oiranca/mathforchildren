import React from "react";
import "./SubMenu.scss";

export const SubMenu = () => {
  return (
    <main className="operation-menu-box">
      <h3>¿Cuántos dígitos quieres sumar?</h3>
      <ul className="menu-option">
        <li>
          <button className="item-menu-option">Un dígito</button>
        </li>
        <li>
          <button className="item-menu-option">Dos dígitos</button>
        </li>
        <li>
          <button className="item-menu-option">Tres dígitos</button>
        </li>
        <li>
          <button className="item-menu-option">Más dígitos</button>
        </li>
      </ul>
    </main>
  );
};
