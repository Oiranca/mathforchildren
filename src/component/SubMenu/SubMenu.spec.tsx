import React from "react";
import {render, screen} from "@testing-library/react";
import {SubMenu} from "./SubMenu";

test("renders submenu", () => {
    render(<SubMenu digit={() => 1}/>);

    const typeButton = {
        sumButton: screen.getByRole("button", {name: "Un dígito"}),
        subtractionButton: screen.getByRole("button", {name: "Dos dígitos"}),
        multiplicationButton: screen.getByRole("button", {
            name: "Tres dígitos",
        }),
        divisionButton: screen.getByRole("button", {name: "Más dígitos"}),
    };

    expect(typeButton.sumButton).toBeInTheDocument();
    expect(typeButton.subtractionButton).toBeInTheDocument();
    expect(typeButton.multiplicationButton).toBeInTheDocument();
    expect(typeButton.divisionButton).toBeInTheDocument();
});
