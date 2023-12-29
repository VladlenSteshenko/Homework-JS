// 1 assign: evaluation
{
  var a = 5;  
  var b, c;
  
  b = a * 5;  
  b = c = b / 2;  // Обчислюється вираз b / 2, результат цього виразу присвоюється  змінній c та змінній b.
}


// 2 Number: age
{
  // Запитати у користувача вік
  let age = parseFloat(prompt("Введіть ваш вік:"));

  // Підрахунок року народження
  let birthYear = new Date().getFullYear() - age;

  // Вивести рік народження
  alert("Ваш рік народження: " + birthYear);
}


// 3 Number: temperature
{
  // Запитати у користувача температуру в градусах Цельсія
  let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

  // Перевести температуру у Фаренгейти
  let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

  // Вивести результат
  alert("Температура в градусах Фаренгейта: " + temperatureFahrenheit.toFixed(2));
}


// 4 Number: divide
{
  // Запитати у користувача два числа
  let dividend = parseFloat(prompt("Введіть перше число:"));
  let divisor = parseFloat(prompt("Введіть друге число:"));

  // Виконати розрахунок поділу націло
  let result = Math.floor(dividend / divisor);

  // Вивести результат
  alert("Результат поділу націло: " + result);
}


// 5 Number: currency
{
  // Курс валюти
  const rate = 37.5; // курс долара до гривні

  // Запитати у користувача суму в одній валюті
  let amountInDollars = parseFloat(prompt("Введіть суму в доларах:"));

  // Обчислити обмін валюти
  let amountInUAH = amountInDollars * rate;

  // Вивести результат
  alert("Сума в гривнях:" + amountInUAH.toFixed(2));
}


// 6 Number: RGB
{
  // Запитати у користувача значення red, green, blue
  let red = parseInt(prompt("Введіть значення для red (0-255):"));
  let green = parseInt(prompt("Введіть значення для green (0-255):"));
  let blue = parseInt(prompt("Введіть значення для blue (0-255):"));

  // Перевести значення в шістнадцяткову систему та об'єднати
  let hexColor = "#" +
    red.toString(16).padStart(2, '0') +
    green.toString(16).padStart(2, '0') +
    blue.toString(16).padStart(2, '0');

  // Вивести результат
  alert("CSS-колір у форматі #RRGGBB: " + hexColor);
}


// 7 Number: flats
{
  // Запитати у користувача кількість поверхів, кількість квартир на поверсі та номер квартири
  let floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
  let flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
  let flatNumber = parseInt(prompt("Введіть номер квартири:"));

  // Обчислити під'їзд та поверх по номеру квартири
  let entrance = Math.ceil(flatNumber / (floors * flatsPerFloor));
  let floor = Math.ceil((flatNumber % (floors * flatsPerFloor)) / flatsPerFloor);

  // Вивести результат
  alert("Під'їзд: " + entrance + ", Поверх: " + floor);
}

