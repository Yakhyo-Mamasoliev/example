const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`);
        return this.#amount;
    }

    withdrawMoney(balance) {
        if (this.#amount > balance) {
            this.#amount -= balance;
            console.log(`Hisobingizdan ${balance}$ yechildi va hisobingizda ${this.#amount}$ qoldi`);
        } else {
            console.log(`Sizning hisobingizdagi pul yetarli emas: ${this.#amount}`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobingiz ${amount}$ga toldirildi, hozirgi hisob: ${this.#amount}$`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name}, siznig hisobingiz: ${this.#amount}$`);
        console.log(`Hisob raqamingiz: ${this.#account_id}`);
    }

    static tellMeAboutClass() {
        console.log(`Bu class accountlarni yasash uchun ximat qiladi`);
    }

    static tellMeAboutTime() {
        console.log(`Hozirgi vaqt ${moment().format('YYYY MM DD HH:mm:ss')}`);
    }

}

module.exports = Account;