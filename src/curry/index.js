
// function curry(fn) {
//     return function(a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

function sum(a, b, c) {
    console.log([...arguments]);
    return a * b + 5 + c;
};

const curriedFunction = curry(sum);
const result = curriedFunction(5)(2, 3);

console.log(result);

function curry(callback) {
    const fnArgs = callback.length;

    console.log(fnArgs);
};