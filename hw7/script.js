// Functions

// 1 Temperature
{
    const convertTemperature = celsius => ((celsius * 9/5) + 32).toFixed(2);

    let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
    let temperatureFahrenheit = convertTemperature(temperatureCelsius);

    alert("Температура в градусах Фаренгейта: " + temperatureFahrenheit);
}


// 2 RGB
{
    const convertToHex = (r, g, b) => (
        '#' +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0')
    );
      
    let red = parseInt(prompt("Введіть значення для red (0-255):"));
    let green = parseInt(prompt("Введіть значення для green (0-255):"));
    let blue = parseInt(prompt("Введіть значення для blue (0-255):"));
      
    let hexColor = convertToHex(red, green, blue);

    alert("CSS-колір у форматі #RRGGBB: " + hexColor);
}


// 3 Flats
{
    function calculateFlats(floors, flatsPerFloor, flatNumber) {
        // Обчислити під'їзд та поверх по номеру квартири
        let entrance = Math.ceil(flatNumber / (floors * flatsPerFloor));
        let floor = Math.ceil((flatNumber % (floors * flatsPerFloor)) / flatsPerFloor);
      
        // Повернути об'єкт з номером під'їзду та поверху
        return { entrance, floor };
    }
      
    let floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
    let flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
    let flatNumber = parseInt(prompt("Введіть номер квартири:"));
      
    let result = calculateFlats(floors, flatsPerFloor, flatNumber);
      
    alert("Під'їзд: " + result.entrance + ", Поверх: " + result.floor);  
}


// 4 Credentials
{
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const stringCredentials = () => {
        let firstName = prompt("Введіть ім'я:");
        let lastName = prompt("Введіть прізвище:");
        let middleName = prompt("Введіть по батькові:");

        firstName = firstName.trim();
        lastName = lastName.trim();
        middleName = middleName.trim();

        const capitalizedFirstName = capitalize(firstName);
        const capitalizedLastName = capitalize(lastName);
        const capitalizedMiddleName = capitalize(middleName);

        const fullName = `${capitalizedFirstName} ${capitalizedLastName} ${capitalizedMiddleName}`;

        return {
            name: capitalizedFirstName,
            surname: capitalizedLastName,
            fatherName: capitalizedMiddleName,
            fullName: fullName
        };
    };

    const credentialsObject = stringCredentials();
    console.log("Credentials Object:", credentialsObject);
}


// 5 New line
{
    function convertNewLine(inputString) {
        return inputString.split('\\n').join('\n');
    }
      
    let multiLineString = prompt('Введіть рядок з використанням \\n:');
    let resultMultiLine = convertNewLine(multiLineString);
    console.log(resultMultiLine);
}


// 6 Prompt OR
{
    let userAge = prompt("Введіть свій вік:");
    let getAgeMessage = (userAge, defValue) => !userAge || isNaN(userAge) ? defValue : "Ваш вік: " + userAge;

    let message = getAgeMessage(userAge, "Введено некоректний вік. Будь ласка, введіть коректний вік.");
    alert(message);
}


// 7 Login And Password
{
    function checkLoginAndPassword(correctLogin, correctPassword) {

        let login = prompt("Введіть логін:");
    
        if (login === correctLogin) {

            let password = prompt("Введіть пароль:");
    
            if (password === correctPassword) {

                return true;
            } else {

                alert("Помилковий пароль.");
                return false;
            }
        } else {

            alert("Помилковий логін.");
            return false;
        }
    }
    

    let correctLogin = "admin";
    let correctPassword = "qwerty";
    let isLoggedIn = checkLoginAndPassword(correctLogin, correctPassword);
    
    if (isLoggedIn) {

        alert("Ласкаво просимо, " + correctLogin + "!");
    } else {

        alert("Невірний логін або пароль.");
    }
}


// 9 Filter Lexics
{
    const filterLexics = (inputString, forbiddenWords) => {
        const wordsArray = inputString.split(' ');
    
        const filteredWords = wordsArray.filter(word => !forbiddenWords.includes(word.toLowerCase()));
    
        const resultString = filteredWords.join(' ');
    
        return resultString;
    };
    
    const userInput = prompt("Введіть рядок:");
    const forbiddenWords = ["бляха", "муха", "пляшка", "шабля"]; 
    const result = filterLexics(userInput, forbiddenWords);
    console.log(result);
}


// 12 Array of objects sort
{
    function sortArray(array, key, descending = false) {
        const compareFunction = (a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return descending ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
            }

            if (isNaN(aValue) && isNaN(bValue)) {
                return 0; 
            }

            return descending ? bValue - aValue : aValue - bValue;
        };

        function stableSort(array, compare) {
            return array
                .map((item, index) => ({ item, index }))
                .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
                .map(({ item }) => item);
        }

        return stableSort(array, compareFunction);
    }

    const persons = [
        { name: "Іван", age: 17 },
        { name: "Марія", age: 35 },
        { name: "Олексій", age: 73 },
        { name: "Яків", age: 12 },
    ];

    const sortedByAgeAsc = sortArray(persons, "age");
    console.log("Sorted by age (ascending):", sortedByAgeAsc);

    const sortedByNameDesc = sortArray(persons, "name", true);
    console.log("Sorted by name (descending):", sortedByNameDesc);
    const sortedByNameAsc = sortArray(persons, "name", false);
    console.log("Sorted by name (ascending):", sortedByNameAsc);
}


// 15 Calc Func
{
    function calculateAndDisplay() {
        let spowerConsumed1 = 123;
        let tariffPerKWh1 = 10;
        let spowerConsumed2 = 123;
        let tariffPerKWh2 = 200;

        let result = calculateElectricityCost(spowerConsumed1, tariffPerKWh1, spowerConsumed2, tariffPerKWh2);

        console.log(
        `Solution 1:
        Power Consumed: ${result.solution1.spowerConsumed} kWh
        Tariff: ${result.solution1.tariffPerKWh} грн/kWh
        Total Cost: грн${result.solution1.totalCost} \n\n`);


        console.log(
        `Solution 2:
        Power Consumed: ${result.solution2.spowerConsumed} kWh
        Tariff: ${result.solution2.tariffPerKWh} грн/kWh
        Total Cost: грн${result.solution2.totalCost} \n\n`);
    }

    function calculateElectricityCost(spowerConsumed1, tariffPerKWh1, spowerConsumed2, tariffPerKWh2) {
        let totalCost1 = spowerConsumed1 * tariffPerKWh1;
        let totalCost2 = spowerConsumed2 * tariffPerKWh2;

        return {
            solution1: {
                spowerConsumed: spowerConsumed1,
                tariffPerKWh: tariffPerKWh1,
                totalCost: totalCost1.toFixed(2),
            },
            solution2: {
                spowerConsumed: spowerConsumed2,
                tariffPerKWh: tariffPerKWh2,
                totalCost: totalCost2.toFixed(2),
            },
        };
    }
    calculateAndDisplay();
}