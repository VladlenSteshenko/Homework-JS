// Массиви

// 1 Confirms
{
    const answers = [
        confirm("Вам подобається цей продукт?"),
        confirm("Ви впевнені, що хочете видалити цей файл?"),
        confirm("Чи хочете включити сповіщення?"),
    ];  
    console.log(answers);
}


// 2 Prompts
{
    const questions = [
        "Як вас звати?",
        "Скільки вам років?",
        "Якого кольору ваша улюблена футболка?",
    ];
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i]);
    }
    console.log(answers);  
}


// 3 Item access
{
    const myArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];
    const userInput = prompt("Введіть індекс у масиві:");
    const index = parseInt(userInput);
    if (!isNaN(index) && index >= 0 && index < myArray.length) {
        const value = myArray[index];
        console.log(`Значення за індексом ${index}: ${value}`);
    } else {
        console.log("Некоректний індекс або значення за вказаним індексом відсутнє.");
    }
}


// 4 Item change
{
    const myArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];
    const indexInput = prompt("Введіть індекс у масиві:");
    const valueInput = prompt("Введіть нове значення:");
    const index = parseInt(indexInput);

    // Перевірте, чи отримані дані є числами та чи індекс знаходиться в межах діапазону масиву
    if (!isNaN(index) && index >= 0 && index < myArray.length) {
        // Присвойте нове значення введеному індексу
        myArray[index] = valueInput;
        console.log(`Значення за індексом ${index} змінено на: ${valueInput}`);
    } else {
        console.log("Некоректний індекс або індекс вийшов за межі масиву.");
    }
    console.log("Оновлений масив:", myArray);
}