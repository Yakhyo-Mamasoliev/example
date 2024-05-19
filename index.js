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

// First one, synchronous 
// Latter one, asynchronous 



// // File Packages
// // biz o`zimiz yaratgan packagelar
// // o`zimizni komputerda yangi file ochib yaratamiz. 
// // ./ meni local folderimdan izla
// // bu yuqorida izlashni eng kopi bila node modulesgacha izlaydi
// // module.exports = Account; deb yozamiz har bir file p. kod oxiriga


// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log('natija', natija);

// //////////////////////
// console.log(require("module").wrapper);




const Account = require("./account");
// //  quyidagi usulda faqat static methodlar ishlaydi
// Account.tellMeAboutClass();
// Account.tellMeAboutTime();

////////////////////////////
// after we entered details about us 
const myAccount = new Account('Martin', 200000, 746298746578423);
myAccount.giveMeDetails();

// // bugatti chiron 2,4mln usd
// myAccount.withdrawMoney(2400000);

// // cheaper car 150k
// myAccount.withdrawMoney(150000);

myAccount.makeDeposit(30000);
