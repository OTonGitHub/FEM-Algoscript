console.log('---------------\nMaldives 2.1.3a\n---------------');

const a = new ArrayBuffer(6);
console.log(a);

const a8 = new Uint8Array(a); // 0-255
console.log(a8);

console.log('---------------');

a8[1] = 2;
a8[3] = 4;
a8[5] = 6;

console.log(a);
console.log(a8);

const a16 = new Uint16Array(a);
console.log(a16);

a16[0] = 1;
console.log(a);
console.log(a16);
