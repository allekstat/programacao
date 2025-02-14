/*
    tipos var let e const
*/
/*
let a = 1;
//

const b = 2;
//

var c = 3;
//

function z() {
    console.log(a, b, c, d, e, f, g, h);
    {
        let d = 4;
        const e = 5;
        var f = 6;
        console.log(a, b, c);
    }
    console.log(a, b, c);
    return 0;
}
console.log(a, b, c);
z();

*/
//let X = 1;
//let Y = 5;
//!console.log(`X = ${X}, Y = ${Y}`);

// X = X * 10 ** flo(log(Y) + 1) + Y
// 1 = 1 * 10 ** flo(log(5) + 1) + 5
// 1 = 1 * 10 ** flo( 0.7   + 1) + 5
// 1 = 1 * 10 ** flo(    1.7   ) + 5
// 1 = 1 * 10 **         1       + 5
// 1 =                           + 5

/*X = X * 1e3 + Y;
Y = (X - Y) / 1e3;
X = X % 1e3;*/
/*
let X = x = -841, Y = y = 93;


X = (X + Y) - (Y = X);
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;


X = (X + Y) - (Y = X);
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;


X = - (Y = X) + (X + Y);
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;


X += Y - (Y = X);
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;


X = X + Y;
Y = X - Y;
X = X - Y;
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;


X = (Y, Y = X);
console.log(`X = ${X}, Y = ${Y}`);
X = x; Y = y;
*/
// function fibonacci(n) {
//     if (n < 2) return 1;
//     if (valores[i] == undefined) return valores[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }


// método rápido para calcular fibonacci
// let valores = [];
// for (let i = 0; i <= 101; i++) {
//     if (i < 2) valores[i] = 1;
//     else valores[i] = valores[i - 1] + valores[i - 2];
//     console.log(`fibonacci(${i}) = ${valores[i]}`);
// }

// for (let i = 0; i < 100; i++) {
// }

// var x = 1;
// var y = 5;
// console.log(x, y);
// x = y + x - x;
// y = x + y - y;

// console.log(x, y);

// for (; ;) {
//     console.log(1)
// }

for (let de = 0, tabuada = 10, ate = 10; de <= ate; de++) {
    console.log(`${tabuada} * ${de} = ${tabuada * de}`);
}