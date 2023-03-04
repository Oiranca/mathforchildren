import React from "react";
import {render} from "@testing-library/react";
import {Operation} from "./Operation";

test("renders operation box", () => {
    render(<Operation digit={2} typeOfOperation={'-'}/>);


});
