// // Nodul emas Package deymiz

// // npm init (requires to fill for the new package )
// // npm init --yes (creates the new package default)
// // npm i uuip
// // try to learn most common modules
// // to see preinstalled core modules type "node" and press tab twice in terminal

// // npmjs.com is good website for doc reading

// // Modules Packages (3ta)

// // // 1. Core Packages (preinstalled already: MAth, JSON, Timer)
// // setTimeout(function () {
// //     console.log("IShga tushdi");
// // }, 5000); // after 5 sec, the function gets executed


// // // har sekunda ishga tushirib beradi
// // let x = 0;
// // setInterval(function () {
// //     console.log("hisob:", x);
// //     x++;
// // }, 1000); // after 1 sec, the function gets executed

// // preinstalled module(same object)larni chaqirib olish
// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);
// console.log("*********************");

// fs.writeFileSync('./input.txt', `${data} \n\t\t by BekzodALi`);
// // \n\t\t Regular Expression (new, tab, tab) 
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data); 



// // External Packages
// // foydalanishdan oldin install qilish kerak
// // nvm install moment --save // save => into my folder

// // moment package
// const moment = require('moment');
// const time = moment().format("YYYY-MM-DD");
// console.log(time);

// // setTimeout(() => {
// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 2000);


// // Inquirer P.

// error code 
// const inquirer = require("inquirer");
// inquirer.prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
//     .then((answer) => {
//         console.log("men kiritingan raqam qiymati: ", answer.raqam);
//     })
//     .catch((err) => console.log(err));


// // correct code
// import('inquirer').then(module => {
//     const inquirer = module.default;
//     inquirer.prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
//         .then((answer) => {
//             console.log("men kiritingan raqam qiymati: ", answer.raqam);
//         })
//         .catch((err) => console.log(err));
// });



// // Validator P.
// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// // emailmi email emasmi shuni aniqlab beradi.
// // @ belgisi qolib ketsa false qaytaradi.
// console.log("test:", test);

// const test1 = validator.isInt('10');
// // checks is it an integer
// console.log("test:", test1);




// // // uuid P.   
// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);


// // nodemon P.
// // it is the best. 
// // change to  "start": "nodemon index.js", on package.json



// // // Chalk P.
// // // install Common JS version for chalk chalk@4.1.2
// // // Cos, chalk is ESMAScript module
// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require("chalk");
// const log = console.log;

// log(chalk.blue("Hello") + chalk.yellow(random) + chalk.red("!"));






// // CommonJS (CJS) and ECMAScript Modules (ESM)

/*
CommonJS (CJS) and ECMAScript Modules (ESM) are two different module systems used in JavaScript.

CommonJS (CJS):
CommonJS is the module system used in Node.js by default.
It uses require() to import modules and module.exports or exports to export values.
Modules are loaded synchronously.

Example:
// Import module
const fs = require('fs');

// Export values
module.exports = {
    greet: function() {
        console.log('Hello!');
    }
};


ECMAScript Modules (ESM):
ESM is the standardized module system introduced in ECMAScript 6 (ES6).
It uses import and export statements for importing and exporting modules.
Modules are loaded asynchronously.
Example:
javascript
Copy code
// Import module
import fs from 'fs';

// Export values
export function greet() {
    console.log('Hello!');
}
In a Node.js environment, you can use both CommonJS and ESM syntax, but there are some considerations:

Node.js supports CommonJS modules natively, so you can use require() and module.exports without any additional configuration.
Node.js also supports ESM syntax, but you need to use the .mjs file extension for ESM files, or specify "type": "module" in your package.json file to enable ESM syntax in .js files. When using ESM syntax in Node.js, you must use import and export statements instead of require() and module.exports.
When working in a browser environment or using tools like webpack or Babel for bundling/transpiling JavaScript code, ESM syntax is often used because it's more standardized and allows for tree-shaking and other optimizations. However, these tools can also handle CommonJS syntax if needed.
In summary, while CommonJS is the traditional module system used in Node.js, ESM offers some advantages and is becoming increasingly popular, especially in modern JavaScript development.
*/ 



// // File Packages
// // biz o`zimiz yaratgan packagelar
// // o`zimizni komputerda yangi file ochib yaratamiz. 
// // 
// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log('natija', natija);

// //////////////////////
// console.log(require("module").wrapper);
