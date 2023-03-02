import {rangerSelect} from './rangeSelect';

describe('Should returned range selected', () => {
    test('should be include into range', () => {
        const rangeNumber = {
            1: [1, 9],
            2: [10, 99],
            3: [100, 999],
            4: [1000, 9999]
        }
        const numbers = rangerSelect(2);
        expect(numbers).toMatchObject(rangeNumber[2]);
    })

})