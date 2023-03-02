import {randomNumber} from "../RandomNumber/randomNumber";


export const dataForOperation = (digitSelected: number) => {


    const numberForOperation = {
        'firstNumber': 0, 'secondNumber': 0
    };
    for (let numberSelected = 0; numberSelected < 2; numberSelected++) {
        if (numberSelected === 0) {
            numberForOperation.firstNumber = randomNumber(digitSelected);
        } else {
            numberForOperation.secondNumber = randomNumber(digitSelected);
        }

    }
    return numberForOperation;
}