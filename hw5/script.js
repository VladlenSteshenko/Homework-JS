// Массиви

// 1 Confirms
{
    let answers = [
        confirm("Вам подобається цей продукт?"),
        confirm("Ви впевнені, що хочете видалити цей файл?"),
        confirm("Чи хочете включити сповіщення?"),
    ];  
    console.log(answers);
}


// 2 Prompts
{
    let questions = [
        "Як вас звати?",
        "Скільки вам років?",
        "Якого кольору ваша улюблена футболка?",
    ];
    let answers = [];
    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i]);
    }
    console.log(answers);  
}


// 3 Item access
{
    let myArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];
    let userInput = prompt("Введіть індекс у масиві:");
    let index = parseInt(userInput);
    if (!isNaN(index) && index >= 0 && index < myArray.length) {
        let value = myArray[index];
        console.log(`Значення за індексом ${index}: ${value}`);
    } else {
        console.log("Некоректний індекс або значення за вказаним індексом відсутнє.");
    }
}


// 4 Item change
{
    let myArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];
    let indexInput = prompt("Введіть індекс у масиві:");
    let valueInput = prompt("Введіть нове значення:");
    let index = parseInt(indexInput);

    if (!isNaN(index) && index >= 0 && index < myArray.length) {
        myArray[index] = valueInput;
        console.log(`Значення за індексом ${index} змінено на: ${valueInput}`);
    } else {
        console.log("Некоректний індекс або індекс вийшов за межі масиву.");
    }
    console.log("Оновлений масив:", myArray);
}


// 5 Multiply table 
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
        Array.from({ length: 5 }, (_, innerIndex) => (outerIndex) * (innerIndex))
    );
    console.log(multiplicationTable);
}


// 6 Multiply table slice
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
        Array.from({ length: 5 }, (_, innerIndex) => (outerIndex) * (innerIndex))
    );

    // Використовуємо slice, щоб отримати масив без нулів
    const tableWithoutZeros = multiplicationTable.map(row => row.slice());

    // Видаляємо нулі з нового масиву масивів
    for (let i = 0; i < tableWithoutZeros.length; i++) {
        for (let j = 0; j < tableWithoutZeros[i].length; j++) {
            if (tableWithoutZeros[i][j] === 0) {
                tableWithoutZeros[i].splice(j, 1);
                j--; // Зменшуємо індекс, оскільки масив скорочується
            }
        }
    }

    console.log(tableWithoutZeros);
}


// 7 IndexOf Word
{
    let inputString = prompt("Введіть рядок із кількох слів:");
    let targetWord = prompt("Введіть слово, яке ви шукаєте:");
    let wordsArray = inputString.split(' ');
    let wordIndex = wordsArray.indexOf(targetWord);

    if (wordIndex !== -1) {
        console.log(`Слово "${targetWord}" знаходиться на позиції ${wordIndex} у рядку.`);
    } else {
        console.log(`Слово "${targetWord}" не знайдено у введеному рядку.`);
    }
}


// 8 Reverse
{
    const originalArray = [];

    for (let i = 0; i < 5; i++) {
        const userInput = prompt(`Введіть елемент №${i + 1}:`);
        originalArray.push(userInput);
    }

    const reversedArray = [];
    while (originalArray.length > 0) {
        reversedArray.push(originalArray.pop());
    }

    console.log("Оригінальний масив:", originalArray);
    console.log("Масив в зворотньому напрямку:", reversedArray);
}

// 9 Reverse 2
{
    const reversedArray2 = [];
    while (reversedArray.length > 0) {
        reversedArray2.unshift(reversedArray.shift());
    }

    console.log("Масив в зворотньому напрямку (перший раз):", reversedArray);
    console.log("Масив в зворотньому напрямку (другий раз):", reversedArray2);
}


// 10 Copy
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
        Array.from({ length: 5 }, (_, innerIndex) => (outerIndex) * (innerIndex))
    );
    console.log("Оригінальний масив:", multiplicationTable);

    // Неглибоке копіювання масиву
    const copiedTable = multiplicationTable;
    multiplicationTable[0][0] = 1000000000000;
    console.log("Скопійований масив:", copiedTable);
}


// 11 Deep Copy
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
        Array.from({ length: 5 }, (_, innerIndex) => (outerIndex) * (innerIndex))
    );
    console.log("Оригінальний масив:", multiplicationTable);

    // Глибоке копіювання масиву
    const copiedTable = multiplicationTable.map(row => row.slice());
    multiplicationTable[0][0] = 1000000000000;
    console.log("Скопійований масив:", copiedTable);
}


// 12 Array Equals
{
    const arr1 = [1, 2, 3];
    const arr2 = arr1;
    
    if (arr1 === arr2) {
        console.log("Масиви рівні один одному.");
    } else {
        console.log("Масиви не рівні.");
    }
}


// 13 Flat
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
    Array.from({ length: 5 }, (_, innerIndex) => (outerIndex) * (innerIndex))
    );
    console.log("Multiply table:", multiplicationTable);

    const flattenedArray = [].concat(...multiplicationTable);

    console.log("Flattened Array:", flattenedArray);
    console.log("Довжина масиву:", flattenedArray.length);
}


// 14 Destruct
{
    const userInput = prompt("Введіть рядок:");
    const [firstLetter, , , ,fifthLetter, , , , ninthLetter] = userInput;
    console.log("Перша літера:", firstLetter);
    console.log("П'ята літера:", fifthLetter);
    console.log("Дев'ята літера:", ninthLetter);
}


// 15 Destruct default
{
    const userInput = prompt("Введіть рядок:");
    const [, secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = userInput;
    console.log("Друга літера:", secondLetter);
    console.log("Четверта літера:", fourthLetter);
    console.log("П'ята літера:", fifthLetter);
}


// 16 Multiply table rest
{
    const multiplicationTable = Array.from({ length: 5 }, (_, outerIndex) =>
        Array.from({ length: 5 }, (_, innerIndex) => outerIndex * innerIndex)
    );
    
    const [, ...restOfFirstRow] = multiplicationTable[1];
    const [, ...restOfSecondRow] = multiplicationTable[2];
    const [, ...restOfThirdRow] = multiplicationTable[3];
    const [, ...restOfFourthRow] = multiplicationTable[4];
    
    const tableWithoutZeros = [restOfFirstRow, restOfSecondRow, restOfThirdRow, restOfFourthRow];
    
    console.log(tableWithoutZeros);
}


// 17 For Alert
{
    const names = ["John", "Paul", "George", "Ringo"];

    for (const name of names) {
        alert(name);
    }
}


// 18 та інші зроблено у index.html


// 23 Function Capitalize
{
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    
    console.log(capitalize("cANBerRa")); // Canberra
}


// 24 Map Capitalize
{
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    
    const capitalizeWords = inputString => {
        const wordsArray = inputString.split(' ');
    
        const capitalizedWords = wordsArray.map(word => capitalize(word));
    
        const resultString = capitalizedWords.join(' ');
    
        return resultString;
    };
    
    const userInput = prompt("Введіть рядок:");
    const result = capitalizeWords(userInput);
    console.log(result);
}


// 25 Filter Lexics
{
    const filterLexics = (inputString, forbiddenWords) => {
        const wordsArray = inputString.split(' ');
    
        // Використовуємо filter для відфільтрування слів, які не є неприпустимими
        const filteredWords = wordsArray.filter(word => !forbiddenWords.includes(word.toLowerCase()));
    
        // Збираємо масив слів у рядок
        const resultString = filteredWords.join(' ');
    
        return resultString;
    };
    
    const userInput = prompt("Введіть рядок:");
    const forbiddenWords = ["bad", "inappropriate", "unacceptable"]; 
    const result = filterLexics(userInput, forbiddenWords);
    console.log(result);
}


// 26 Beep Lexics
{
    const beepLexics = (inputString, forbiddenWords) => {
        const wordsArray = inputString.split(' ');
    
        // Використовуємо map та тернарний оператор для заміни слів
        const beepedWords = wordsArray.map(word => forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word);
    
        const resultString = beepedWords.join(' ');
    
        return resultString;
    };
    
    const userInput = prompt("Введіть рядок:");
    const forbiddenWords = ["bad", "inappropriate", "unacceptable"]; // ваш список заборонених слів
    const result = beepLexics(userInput, forbiddenWords);
    console.log(result);
}


// 28 For Brackets Hell Check
{
    const line = prompt();
    const bracketsStack = [];
    let i = 0;
    
    for (const character of line) {
        // Ігноруємо символи, крім трьох видів дужок
        if (character === '(' || character === '[' || character === '{') {
            // Додаємо в стек відкриваючу дужку
            bracketsStack.push({ character, index: i });
        } else if (character === ')' || character === ']' || character === '}') {
            // Перевіряємо відповідність закриваючої дужки вершині стека
            if (bracketsStack.length === 0) {
                console.log(`Помилка: Непарна закриваюча дужка на позиції ${i}`);
                break;
            }
    
            const lastBracket = bracketsStack.pop();
            const openingBracket = character === ')' ? '(' : (character === ']' ? '[' : '{');
    
            if (lastBracket.character !== openingBracket) {
                console.log(`Помилка: Не відповідає закриваюча дужка на позиції ${i}`);
                break;
            }
        }
        
        i++;
    }
    
    // Перевірка, чи всі дужки закрились
    if (bracketsStack.length > 0) {
        const lastBracket = bracketsStack.pop();
        console.log(`Помилка: Непарна відкриваюча дужка на позиції ${lastBracket.index}`);
    } else {
        console.log("Всі дужки вірні!");
    }
}