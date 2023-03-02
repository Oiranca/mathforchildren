import {dataForOperation} from "./dataForOperation";


describe('Should returned random numbers', () => {
    test('returned two random numbers', () => {

        const numbersCreated = dataForOperation(2);

        expect(numbersCreated.firstNumber).toBeTruthy()
        expect(numbersCreated.secondNumber).toBeTruthy()

    })
})