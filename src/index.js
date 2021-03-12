module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const secondDecade = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decades = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number <= 9) {
        return numbers[number];
    }
    if (number >= 11 && number <= 19) {
        return secondDecade[(number % 10) - 1];
    }
    if (number === 10) {
        return decades[0];
    }
    if (number >= 20 && number < 100) {
        let num = "";
        if (number % 10 !== 0) {
            num = ` ${numbers[number % 10]}`;
        }
        return `${decades[Math.floor(number / 10) - 1]}` + `${num}`;
    }

    if (number >= 100 && number < 1000) {
        let hund = "";
        hund = `${numbers[Math.floor(number / 100)]} hundred`;
        let secDec = "";
        if (number % 100 === 10) {
            return hund + ` ten`;
        }
        if (number % 100 >= 11 && number % 100 <= 19) {
            return hund + ` ${secondDecade[(number % 10) - 1]}`;
        }
        if (number % 100 >= 20) {
            secDec = ` ${decades[(Math.floor(number / 10) % 10) - 1]}`;
        }
        let num = "";
        if (number % 10 !== 0 || (number > 11 && number <= 19)) {
            num = ` ${numbers[number % 10]}`;
        }
        return (hund + secDec + num).trim();
    }
};
