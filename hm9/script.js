//1
let str = "";
for (let i = 10; i <= 20; i++) {
    str += i;
    if (i != 20) {
        str += ",";
    }
}
console.log(str);

//2
let strK = "";
for (let i = 10; i <= 20; i++) {
    strK += i**2;
    if (i != 20) {
        strK += ",";
    }
}
console.log(strK);

//3 
for (let j = 7; j == 7; j++) { 
    for (let i = 1; i <=9; i++) {
        console.log(i + "*" + j + "=" +(i*j));
    }
}

//4 

let strS = Number();
for (let i = 1; i <= 15; i++) {
    strS += i;
}
console.log(strS);

//5

let strD = Number(1);
for (let i = 15; i <= 35; i++) {
    strD *= i;
}
console.log(strD);

//6

let strC = Number();
for (let i = 1; i <= 500; i++) {
    strC += i;
}
console.log(strC);

let resC = strC/500;
console.log(resC);

//7 
let strP = Number();

for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        strP += i;
    }
}
console.log(strP);
//8

let strT = "";

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        strT += i;
        strT += ",";
    }
}
console.log(strT);

//9 

let number = prompt("Введите число для рачета его делителей");
let strA = [];
for (let n = 1; n <= number; n++){
    let a = number % n
    if(a==0){
    strA.push(n);
    }
}
console.log(strA);

//10

let par = [];
strA.forEach(
    (elem) => {
        if (elem % 2 == 0) {
            if (elem > 0) {par.push(elem)}
        }
    }
);
console.log(par);
console.log(par.length);


//11

let sumP = par.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log(sumP);

//12

for (let j = 7; j <= 10; j++) { 
    for (let i = 1; i <=10; i++) {
        console.log(i + "*" + j + "=" +(i*j));
    }
}