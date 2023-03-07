import {randomKeyValue} from "./randomKeyValue";

describe('create random key string',()=>{

    test('return a key string with 10 characters',()=>{
        const keyString=randomKeyValue();

        expect(keyString.length).toBe(10);
    })
});