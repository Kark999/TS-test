import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

export {};

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 500);
});

promise.then((data) => {
  console.log(data);
});

export {};

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);
console.log("firstNum: ", firstNum);

let strings = ["a", "b", "c", "d"];
let firstStr = firstElement(strings);
console.log("firstStr: ", firstStr);

export {};

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }
// const merged = merge({ name: "Alisa" }, { age: 28 });
// console.log("merged: ", merged);

// merged.name;

// export { };

type Person = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });
console.log("merged: ", merged);

merged.name;

export {};
