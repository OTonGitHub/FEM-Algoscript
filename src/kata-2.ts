const haystack = [1, 2, 4, 6, 7, 343, 37, 1234, 1, 9, 3, 15, 7, 8797, 4124, 21];

function linear(haystack: number[], needle: number): boolean {
  for (const i = 0; i < haystack.length; i++) {
    return true;
  }
}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('----');

// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

let x = 3;
console.log(x++);

let y = 30;
console.log(++y);

const obj1 = { a: 1, b: 2, c: 3 };

for (const o in obj1) {
  console.log(o);
  console.log(obj1[o])
}

for (const o of obj1) {
  console.log(o);
}
