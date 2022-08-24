//Week 2 Task 4
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "15px Cambria";
ctx.fillText("This is an example of Drawing text using Canvas", 10, 50);

//Week 3 Task 1
var helloworld = "Hello World";
console.log(helloworld);
console.log(helloworld.charAt(4));
console.log(helloworld.replace("World", "Everyone"));
console.log(helloworld.length);
console.log(helloworld.toUpperCase());
console.log(helloworld.toLowerCase());

//Week 3 Task 2
let sithLords = ['Revan', 'Malak', 'Bane', 'Malgus'];
console.log(sithLords);
console.log(sithLords.findIndex((sithLords) => sithLords === 'Malgus'));

console.log(sithLords.push('Nihlus'));
console.log(sithLords);

console.log(sithLords.pop());
console.log(sithLords);

let num = [7, 3, 9, 3, 4];
console.log(num);
console.log(num.sort());

console.log(num.concat(sithLords));

//Week 3 Task 3
const currentDate= new Date(Date.now());
console.log(currentDate.getDay());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.toDateString());
console.log(currentDate.toUTCString());