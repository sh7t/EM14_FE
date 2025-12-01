import promptSync from 'prompt-sync';
const prompt = promptSync();


// 1.

/*
function checkEmptyString(str: string): void {
    if (str.length === 0) {
        throw new Error("Empty text inputted.");
    }
}

// ----------------------------------------

try {
    let name: string = prompt("Your name: ").trim().toLowerCase();
    checkEmptyString(name)

    name = name[0].toUpperCase() + name.substring(1); // Не робив цього для прізвища тому, що є шотландсько-ірландські, які починаються на Мак...

    let lastName: string = prompt("Your family name: ").trim();
    checkEmptyString(lastName)

    const user = {
        name: name,
        lastName: lastName,
        fullName: name + " " + lastName
    }
    console.log("\nName - " + user.name);
    console.log("Family name - " + user.lastName);
    console.log("Name and Family name - " + user.fullName);
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/


// 2.

/*
function compareConstantWithInput(constant: string, userInput: string): void {
    if (userInput !== constant) {
        throw new Error("Access denied.");
    }
}

// ----------------------------------------

try {
    let login: string = prompt("Login: ");
    let password: string = prompt("Password: ");

    compareConstantWithInput("admin", login);
    compareConstantWithInput("12345", password);

    console.log("Successfully logged in");
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 3.

/*
function checkStringSuitability(str: string): void {
    if (str.length <= 5) {
        throw new Error("Inappropriate text for product information");
    }
}
function checkPriceSuitability(num: number): void {
    if (num <= 0) {
        throw new Error("Inappropriate value for product price");
    }
}

// ----------------------------------------

try {
    let productName: string = prompt("Product name: ").trim();
    checkStringSuitability(productName)

    let productDescription: string = prompt("Product description: ").trim();
    checkStringSuitability(productDescription)

    let productPrice: number = Number(prompt("Product price: "));
    checkPriceSuitability(productPrice)

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        showProduct: function(): void {
            console.log(`\n${this.name}: ${this.description}.\nPrice: ${this.price}`);
        }
    }
    product.showProduct()
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 4.

/*
function checkHeightSuitability(height: number): void {
    if (height <= 60 && height >= 280) { // зріст найменшої і найвищої людей з похибкою
        throw new Error("Inappropriate human height");
    }
}
function checkWeightSuitability(weight: number): void {
    if (weight <= 0 && weight >= 730) { // вага найлегшої і найващої людей з похибкою
        throw new Error("Inappropriate human weight");
    }
}
function analyseBodyMassIndexAppropriability(bmi: number): void {
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Norm");
    } else {
        bmi < 18.5 ? console.log("Insufficient weight") : console.log("Excessive weight");
    }
}

// ----------------------------------------

try {
    let height: number = Number(prompt("Your height in centimeters: "))
    checkHeightSuitability(height)

    let weight: number = Number(prompt("Your weight in kilograms: "))
    checkWeightSuitability(weight)

    analyseBodyMassIndexAppropriability(Math.round(weight / Math.pow((height/100), 2)))
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 5.

/*
function checkEmailSuitability(email: string): void {
    if (!(email.length > 8 && email.includes('@') && email.includes('.'))) {
        throw new Error("Invalid email. Expected real email address.");
    }
}
function checkPasswordSuitability(password: string): void {
    let repeatedChars: number = 0;
    for (let char of password) {
        if (char === password[0]) {
            repeatedChars++;
        }
    }
    if (!(password.length > 8 && password.length < 16 && (password.length != repeatedChars))) {
        throw new Error("Expected password has to be from 8 up to 16 characters and unrepeatable.");
    }
}
function checkAgeSuitability(birthDate: string): void {
    let birthday: Date = new Date(
        Number(birthDate.slice(6)),
        Number(birthDate.slice(3, 5)),
        Number(birthDate.slice(0, 2)));

    let age: number = new Date().getFullYear() - birthday.getFullYear();

    if (age < 18 && age >= 100) {
        throw new Error("Inappropriate age.");
    }
}

// ----------------------------------------

interface User {
    email: string;
    password: string;
    birthday: string;
    showUser: () => void
}

// ----------------------------------------

try {
    let email: string = prompt("Your email: ").trim();
    checkEmailSuitability(email)

    let password: string = prompt("Your password: ").trim();
    checkPasswordSuitability(password)

    let birthday: string = prompt("Birthday(dd.mm.yyyy): ").trim();
    checkAgeSuitability(birthday)

    let currentUser: User = {
        email: email,
        password: password,
        birthday: birthday,
        showUser: function(): void {
            console.log(`\nRegistered user:\nEmail: ${this.email}\nPassword: ${this.password}\nBirthday: ${this.birthday}`);
        }
    }
    currentUser.showUser();
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 6.

/*
function convertTemperature(temperature: number, unit: string): Temperature {
    if (unit === "C") {
        return {
            temperatureValue: (temperature * 9 / 5) + 32,
            unit: "F"
        }
    } else if (unit === "F") {
        return {
            temperatureValue: (temperature - 32) / 5 * 9,
            unit: "C"
        }
    } else {
        throw new Error("Invalid temperature unit \"" + unit + "\" of measurement.");
    }


}
function analyzeConvertTemperature(temperature: string): void {
    let temperatureValue: number = Number(temperature.slice(0, temperature.length-2));
    if (isNaN(temperatureValue) || temperatureValue === 0) {
        throw new Error("Invalid temperature value");
    }
    let unit: string = temperature[temperature.length-1];

    let convertedTemperature: Temperature = convertTemperature(temperatureValue, unit);

    console.log(`Temperature in ${convertedTemperature.unit}: ${convertedTemperature.temperatureValue}`);
}

// ----------------------------------------

interface Temperature {
    temperatureValue: number;
    unit: string;
}

// ----------------------------------------

try {
    let temperature: string = prompt("Temperature(e.g. 100 C, 32 F): ").trim()
    analyzeConvertTemperature(temperature);
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/
