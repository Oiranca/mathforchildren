import {dataForOperation} from "../DataForOperation/dataForOperation";

export const randomKeyValue = () => {
    let randomName = '';
    const characterForName = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz'
    for (let lengthName = 0; lengthName < 10; lengthName++) {
        randomName = randomName.concat(characterForName.charAt(dataForOperation(1).firstNumber))
    }
    return randomName;
}