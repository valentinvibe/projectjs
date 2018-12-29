// console.log('winline'+'');
// let persone = {
//     name: "Vasya",
//     age: 25,
//     isMArried: true
// }
// console.log('Etot 4yvak - '+persone.name);

// let arr = ['fgs','sgsfg','egergerg'];
// console.log(arr[1]);
/*let answer = confirm('Are you here?');
console.log(answer);
let vtor = prompt('Есть ли вам 18',"");
console.log(vtor);*/
/*console.log("2" == 2);
console.log(5%2);
let incr = 10,
    decr = 10;
console.log(++incr + ++decr);*/
// let num = 50;
// (num == 50) ? console.log("Verno") : console.log("Neverno");

// switch (num) {
//     case 50:
//         console.log('case 50');
//         break;
//     case 100:
//         console.log('case 100')
//         break;
// }
// if (num == 50) {
//     console.log('exyyyyy');
// }
// alt = 8;
// while (alt < 15) {
//     console.log('1########');
//     alt++;
// }
// for (i=1; i<10; i++) {
//     if (i==5){
//         continue;
//     }
//     console.log(i);
    
// }

// function showfirstmessage(text) {
//     alert(text);
// }
// let alto = 'errtjhdrdrgkj';
// showfirstmessage(alto);

// let calc = (a,b) => a+b;
// function calc (a,b) {
//     return (a+b);
// }
// console.log(calc(10,57));

let str = "12.2pxSgkjhgSgjFKfkFGKgfkGfkgfkfbkGFK";
console.log(parseInt(str));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var scripts = ["a.js","b.js","c.js"];
function callback() {
 console.log('Yo YO YO');
}

function addScripts() {
    var i = 0;
for (i=0; i<3;i++) {
    console.log(scripts[i]);
}
callback();
}

addScripts();