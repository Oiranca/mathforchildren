import {randomNumber} from "./randomNumber";

describe('Return random number', () => {
    interface range {
        [key: number]: number[];
    }

    test('should returned random number into range', () => {
        const numberDigitSelected = 2;
        const minAndMax: range = {
            1: [1, 9],
            2: [10, 99],
            3: [100, 999],
            4: [1000, 9999]
        }
        let toBeInRange: boolean;
        const numberCreated = randomNumber(numberDigitSelected);

        toBeInRange = !!(numberCreated >= minAndMax[numberDigitSelected][0] && minAndMax[numberDigitSelected][1]);


        expect(toBeInRange).toBeTruthy();
        expect(!toBeInRange).toBeFalsy();
    })
})