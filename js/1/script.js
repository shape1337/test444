//Задание 1
//let a = prompt('Введите число a')
// function more(a) {
//     if (a > 18) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// more(a)

//Задание 2
//function isEven(number) {
//    return number % 2 === 0;
//}
//console.log(isEven(4));
//console.log(isEven(5));


//Задание 3
//function reverseString(str) {
//    return str.split('').reverse().join('');
//}
//console.log(reverseString("hello"));

//Задание 4
//function isPalindrome(str) {
//    const reversed = str.split('').reverse().join('');
//    return str === reversed;
//}
//console.log(isPalindrome("hello"));
//console.log(isPalindrome("level"));

//Задание 5
//function sumFirstAndLastDigit(number) {
//    const numStr = number.toString();
//    const firstDigit = parseInt(numStr[0]);
//    const lastDigit = parseInt(numStr[numStr.length - 1]);
//    return firstDigit + lastDigit;
//}
//console.log(sumFirstAndLastDigit(325)); // 8

//Задание 6
//function sumPositiveNumbers(array) {
//    return array.reduce((sum, num) => {
//        if (num > 0 && num < 10) {
//            return sum + num;
//        }
//        return sum;
//    }, 0);
//}
//console.log(sumPositiveNumbers([1, 5, -3, 12, 7])); // 8

//Задание 7
//function uniqueNumbers(array) {
//    return Array.from(new Set(array));
//}
//console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//Задание 8
//function countVowels(str) {
//    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
//    return Array.from(str).filter(char => vowels.includes(char)).length;
//}
//console.log(countVowels("Привет")); // 2

//Задание 9
//function bubbleSort(array) {
//    let sortedArray = array.slice(); // Копируем массив для сортировки
//    const n = sortedArray.length;    
//    for (let i = 0; i < n; i++) {
//        for (let j = 0; j < n - i - 1; j++) {
//            if (sortedArray[j] > sortedArray[j + 1]) {
//                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
//            }
//        }
//    }
//    return sortedArray;
//}
//console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

//Задание 10
