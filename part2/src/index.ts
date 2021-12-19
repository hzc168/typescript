import {hi} from './m'

function sum(a: number, b: number): number {
    return a + b;
}

const obj = { name: "猪八戒", age: 33 };

console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(12, 23));
console.log(hi);

const fn = (a: number, b: number) => a + b;

fn(123, 23);


