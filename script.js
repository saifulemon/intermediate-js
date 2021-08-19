// true false condition

// falsy
/*
1. 0
2. ""
3. undefined
4. null
5. NaN
6. false
*/


// truthy
/*
1. ' '
2. '0'
3. []
4. {}
*/

const age = 0;
const employee = 'Mofiz vai';
let person;
if(person){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}





// null vs undefined
let bird;
function add(num1, num2) {
    console.log(num1 + num2);  
}
function sum(x, y) {
    console.log(x, y);
}

const student = {
    name: 'Dipjol Kaga',
    phone: 014751,
    address: 'Dhaka'
}
const result = sum(25);
console.log(student.job);


let age = 20;
age = null;
age = '';
console.log(age);





// double vs triple equal
const first = 5;
const second = 7;
const third = 9;
const fourth = '9';
const fifth = 1;
const sixth = true;
const seventh = 0;
const eighth = false;
if (seventh == eighth) {
    console.log('condition is true');
}
else{
    console.log('condition is false');
}





// map & filter
const numbers = [22, 58, 45, 66, 17, 36];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

const result = numbers.map(function (element) {
    return element * element;
})

const result2 = numbers.map(x => x * x);

console.log(output);
console.log(result2);


const ages = [2, 5, 6, 7, 8, 9];

const bigger = ages.filter(x => x > 5);

const isThere = ages.find(x => x > 5);
console.log(isThere);





// object property
const friends = [
    {
        name: 'omar sunny',
        id: 22,
    },
    {
        name: 'salman khan',
        id: 17,
    },
    {
        name: 'Dipjol sunny',
        id: 75,
    },
    {
        name: 'riaj khan',
        id: 43,
    }
];

const output = [];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    const result = element.name;
    output.push(result);
}
console.log(output);

const names = friends.map(s => s.name);
const ids = friends.map(s => s.id);
const bigger = friends.filter(s => s.id > 40);
const biggerOne = friends.find(s => s.id > 40);
console.log(biggerOne);







// scope js
let bonus = 20;

function sum(num1, num2) {
    let result = num1 + num2 + bonus;
    // console.log(bonus);
    if (result > 9) {
        var mood = 'Happy';
        mood = 'fishy';
        mood = 'funky';
        // console.log(mood);
    }
    return result;
    // console.log(mood);
}
const output = sum(22, 15);
// console.log(bonus);
console.log(output);

// console.log(day);
let day = 'friday';





// closure 
function stopWatch() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock2());






// array split
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const part = nums.slice(2, 5);
const removed = nums.splice(2, 5, 10, 41);
const together = nums.join(' ');

console.log(removed);
console.log(together);





// break and continue
const numbers = [1, -2, 3, -4, -5, 6, -7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element); 
    if (element > 5) {
        break;
    } 
    console.log(element); 
}


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
        continue;
    } 
    console.log(element); 
}