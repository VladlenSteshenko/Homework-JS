// Введення даних користувача
let spowerConsumed = parseFloat(prompt("Введіть кількість спожитої електроенергії в кВт*год:"));
let tariffPerKWh = parseFloat(prompt("Введіть тариф за 1 кВт*год:"));

// Калькуляція
let totalCost = spowerConsumed * tariffPerKWh; // Загальна вартість за спожиту електроенергію

// Виведення результату користувачу
alert("Загальна вартість за спожиту електроенергію: грн" + totalCost.toFixed(2));
