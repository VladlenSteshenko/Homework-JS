// loops

// 1 while confirm
{
    let userClickedOK = true;

    while (userClickedOK) {
        userClickedOK = !confirm("Do you want to continue?");
    }
}


// 2 array fill
{
    let myArray = [];

    while (true) {
        const userInput = prompt("Введіть елемент для масиву (натисніть 'Скасувати', щоб завершити):");
    
        // Перевірка, чи користувач натиснув "Скасувати" або залишив введене поле порожнім
        if (userInput === null) {
            break; 
        }
    
        myArray.push(userInput);
    }
    
    console.log("Отриманий масив:", myArray);    
}


// 3 array fill nopush
{
    let myArray = [];
    let index = 0;

    while (true) {
        const userInput = prompt("Введіть елемент для масиву (натисніть 'Скасувати', щоб завершити):");

        // Перевірка, чи користувач натиснув "Скасувати" або залишив введене поле порожнім
        if (userInput === null) {
            break; 
        }

        myArray[index] = userInput;
        index++;
    }

    // Виведення результату
    console.log("Отриманий масив:", myArray);
}


// 4 infinite probability
{
    let iterations = 0;

    while (true) {
        iterations++;

        if (Math.random() > 0.9) {
            break;
        }
    }

    alert("Кількість ітерацій: " + iterations);
}


// 5 empty loop
{
    while (!confirm("Do you want to continue?"));
}


// 6 progression sum
{
    const N = prompt("Введіть значення N:");
    let sum = 0;

    for (let i = 1; i <= N; i += 3) {
        sum += i;
    }

    console.log("Сума арифметичної прогресії:", sum);
}


// 7 chess one line
{
    const length = prompt("Введіть довжину рядка:");
    const lengthValue = parseInt(length);

    if (isNaN(lengthValue) || lengthValue < 0) {
        alert("Будь ласка, введіть коректне невід'ємне число.");
    } else {
        let resultString = "";
        for (let i = 0; i < lengthValue; i++) {

            resultString += (i % 2 === 0) ? "#" : " ";
        }
        console.log(resultString);
    }
}


// 8 numbers
{
    let resultString = "";

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            resultString += j;
        }

        resultString += "\n";
    }

    console.log(resultString);
}


// 9 chess
{
    let exit = false;
    while(!exit) {
        let rows = prompt("Введіть кількість рядків:");
        let cols = prompt("Введіть кількість стовпців:");

        let rowsNumber = parseInt(rows);
        let colsNumber = parseInt(cols);

        if (isNaN(rowsNumber) || isNaN(colsNumber) || rowsNumber <= 0 || colsNumber <= 0) {
            alert("Будь ласка, введіть коректні, додатні числа.");
        } else {
            let chessboardString = "";

            for (let i = 0; i < rowsNumber; i++) {
                for (let j = 0; j < colsNumber; j++) {
                    chessboardString += (i + j) % 2 === 0 ? "#" : ".";
                }
                chessboardString += "\n";
            }
            console.log(chessboardString);
        }
        exit = parseInt(prompt("Press 0 to continue,1 to exit"));
    }
}


// 10 cubes
{
    const N = prompt("Введіть кількість елементів масиву:");
    const NValue = parseInt(N);

    if (isNaN(NValue) || NValue <= 0) {
        alert("Будь ласка, введіть коректне, додатнє число.");
    } else {
        let cubesArray = [];
        for (let i = 0; i < NValue; i++) {
            cubesArray.push(Math.pow(i, 3));
        }
        console.log(cubesArray);
    }
}


// 11 multiply table
{
    let rows = 10;
    let cols = 10;

    let multiplicationTable = [];

    for (let i = 0; i < rows; i++) {
        multiplicationTable[i] = [];

        for (let j = 0; j < cols; j++) {
            multiplicationTable[i][j] = i * j;
        }
    }
    console.log(multiplicationTable);
}


// 12 read array of objects
{
    function readArrayOfObjects() {
        const arrayOfObjects = [];
    
        do {
            const userObject = {};
            let continueInput = true;
    
            do {
                const key = prompt("Введіть ключ для об'єкта:");
                
                // Виходить з циклу, якщо користувач натиснув "Скасувати"
                if (key === null) {
                    continueInput = false;
                    break;
                }
    
                const value = prompt("Введіть значення для ключа '" + key + "':");
                userObject[key] = value;
    
                continueInput = confirm("Бажаєте ввести ще один ключ?");
            } while (continueInput);
    
            // Додає об'єкт до масиву
            arrayOfObjects.push(userObject);
    
        } while (confirm("Бажаєте ввести ще один об'єкт?"));
    
        return arrayOfObjects;
    }
    
    const resultArray = readArrayOfObjects();
    console.log(resultArray);
}


// 13 Ромбік
{
    const size = 7;
    let rhombusString = "";
    
    for (let i = 0; i < size; i++) {
        // Внутрішній цикл для формування пробілів перед зірочками (зліва)
        for (let j = 0; j < size - i - 1; j++) {
            rhombusString += ".";
        }
        // Внутрішній цикл для формування зірочок
        for (let k = 0; k < 2 * i + 1; k++) {
            rhombusString += "#";
        }
        // Внутрішній цикл для формування пробілів після зірочок (справа)
        for (let j = 0; j < size - i - 1; j++) {
            rhombusString += ".";
        }
    
        rhombusString += "\n";
    }
    
    // Відділення верхньої та нижньої частин ромба
    for (let i = size - 2; i >= 0; i--) {
        // Внутрішній цикл для формування пробілів перед зірочками (зліва)
        for (let j = 0; j < size - i - 1; j++) {
            rhombusString += ".";
        }
        // Внутрішній цикл для формування зірочок
        for (let k = 0; k < 2 * i + 1; k++) {
            rhombusString += "#";
        }
        // Внутрішній цикл для формування пробілів після зірочок (справа)
        for (let j = 0; j < size - i - 1; j++) {
            rhombusString += ".";
        }
        // Додаємо символ нового рядка після кожного рядка, за винятком останнього
        if (i !== 0) {
            rhombusString += "\n";
        }
    }
    
    console.log(rhombusString);    
}