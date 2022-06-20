require('dotenv').config();

let greetings = process.env.NAME ||' whitout name' ;
let web = process.env.WEB || " i cannot have web";

/* this course are bad */

console.log("hi" + greetings);
console.log("hi" +web);