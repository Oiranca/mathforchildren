interface range {
    [key: number]: number[];
}

export const randomNumber = (numberOfDigitSelected: number) => {
    const minAndMax: range = {
        1: [1, 9],
        2: [10, 99],
        3: [100, 999],
        4: [1000, 9999]
    }
    const min = Math.ceil(minAndMax[numberOfDigitSelected][0]);
    const max = Math.floor(minAndMax[numberOfDigitSelected][1]);
    return Math.floor(Math.random() * (max - min + 1) + min);
};