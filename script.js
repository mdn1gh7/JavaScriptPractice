
// Use (var.length) to determine number of characters
let subject = `English`;
console.log(`length = ${subject.length}`);

// Use [var.charAt(n)] to determine what character is at (n)th index;
console.log(`charAt = ${subject.charAt(0)}`);

// Use [var.indexOf(x)] to detemine what index is a particular character ; The inverse of charAt function.
// [var.indexOf(x)] picks up the first instance; [var.lastIndexOf], the last.

console.log(`indexOf = ${subject.indexOf(`s`)}`);

// Use [var.slice(x, y)] to crop from start(x) up to (y) number of characters.

console.log(`slice = ${subject.slice(1, 4)}`);
console.log(`slice = ${subject.slice(1)}`);
console.log(`slice = ${subject.slice()}`);


// Use [var.concat] to add characters

let favSubject = `${subject.concat(` `, `the`, `  `, `best`)}`;
console.log(favSubject);

//Use [var.replace(x, y)] to replace item (x) with item (y); You can also use [var.replaceAll(x,y)];

console.log(`${favSubject.replace(`English`, `Math`)}`);

// Use [var.toLowerCase] to make every character lowercase;
// Use [var.UpperCase] to make every character uppercase;

// ARRAYS //

const colors = ["Green", "Blue", "Red", "Purple", "Pink"];

console.log(colors);

// Use this to determine if something is an array
console.log(`${Array.isArray(colors)}`);

// Use to determine what element is at (n)th index:
console.log(`${colors[2]}`);

// Use to determine what index is an element
console.log(`${colors.indexOf(`Pink`)}`);
console.log(`${colors.indexOf(`Orange`)}`);

//To add items
colors.push(`Orange`);
console.log(colors);

//To remove item
colors.pop();
console.log(colors);

colors.splice(1, 2);
console.log(colors);

const greetings = [`Good`, `morning`, `po`, `guys`]

greetings.splice(1, 4);
let newGreetings = `${greetings.concat(`evening`, `po`, `^_^`)}`;

console.log(`${newGreetings.replaceAll(`,`, ` `)}`);
let pvalue = 10

function passByValue(value) {
    value = 11
}

passByValue(pvalue);

let pReference = {
    x: 10
}

function passByReference(object) {
    object.x = 11
}

passByReference(pReference);
console.log(`pReference equals ${pReference.x}`);

let numbers = 10
console.log(numbers);
