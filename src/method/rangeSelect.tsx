interface range {
    [key: number]: number[];
}

export const rangerSelect = (rangeSelected: number): number[] => {
    const minAndMax: range = {
        1: [1, 9],
        2: [10, 99],
        3: [100, 999],
        4: [1000, 9999]
    }
    return minAndMax[rangeSelected];
}