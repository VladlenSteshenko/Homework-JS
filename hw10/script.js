// Functions 2

// 1 Arrow to Functions
{
    // 1.1 Temperature
    {
        function convertTemperature(celsius) {
            return ((celsius * 9/5) + 32).toFixed(2);
        }
          
        let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
        let temperatureFahrenheit = convertTemperature(temperatureCelsius);
          
        alert("Температура в градусах Фаренгейта: " + temperatureFahrenheit);  
    }


    // 1.2 RGB
    {
        function convertToHex(r, g, b) {
            return (
              '#' +
              r.toString(16).padStart(2, '0') +
              g.toString(16).padStart(2, '0') +
              b.toString(16).padStart(2, '0')
            );
        }
          
        let red = parseInt(prompt("Введіть значення для red (0-255):"));
        let green = parseInt(prompt("Введіть значення для green (0-255):"));
        let blue = parseInt(prompt("Введіть значення для blue (0-255):"));
          
        let hexColor = convertToHex(red, green, blue);
          
        alert("CSS-колір у форматі #RRGGBB: " + hexColor);
    }


    // 1.3 Prompt OR
    {
        function getAgeMessage(userAge, defValue) {
            return !userAge || isNaN(userAge) ? defValue : "Ваш вік: " + userAge;
          }
          
        let userAge = prompt("Введіть свій вік:");
        let message = getAgeMessage(userAge, "Введено некоректний вік. Будь ласка, введіть коректний вік.");
        alert(message);
    }


    // 1.4 Credentials
    {
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
          
        function stringCredentials() {
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
        }
          
        const credentialsObject = stringCredentials();
        console.log("Credentials Object:", credentialsObject);    
    }


    // 1.5 Filter Lexics
    {
        function filterLexics(inputString, forbiddenWords) {
            const wordsArray = inputString.split(' ');
          
            const filteredWords = wordsArray.filter(function(word) {
              return !forbiddenWords.includes(word.toLowerCase());
            });
          
            const resultString = filteredWords.join(' ');
            return resultString;
        }
          
        const userInput = prompt("Введіть рядок:");
        const forbiddenWords = ["бляха", "муха", "пляшка", "шабля"];
        const result = filterLexics(userInput, forbiddenWords);
        console.log(result);
    }
}


// 2 createPerson
{
    function createPerson(name, surname) {
        return {
            name: name,
            surname: surname,
            getFullName: function() {
            if (this.fatherName) {
                return this.name + ' ' + this.fatherName + ' ' + this.surname;
            } else {
                return this.name + ' ' + this.surname;
            }
            }
        };
    }

    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")
    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'
    console.log(a.getFullName()) //Вася Іванович Пу
    console.log(b.getFullName()) //Ганна Іванова
}


// 3 createPersonClosure
{
    function createPersonClosure(initialName, initialSurname) {
        let name = initialName;
        let surname = initialSurname;
        let fatherName;
        let age;

        function capitalizeString(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }

        function isValidName(value) {
            return typeof value === 'string' && /^[A-Za-z]+$/.test(value);
        }

        function isValidAge(value) {
            return typeof value === 'number' && value >= 0 && value <= 100;
        }

        return {
            getName: () => name,
            getSurname: () => surname,
            getFatherName: () => fatherName,
            getAge: () => age,
            getFullName: () => `${surname} ${name} ${fatherName || ''}`.trim(),

            setName: (newName) => {
                if (isValidName(newName)) {
                    name = capitalizeString(newName);
                }
                return name;
            },

            setSurname: (newSurname) => {
                if (isValidName(newSurname)) {
                    surname = capitalizeString(newSurname);
                }
                return surname;
            },

            setFatherName: (newFatherName) => {
                if (isValidName(newFatherName)) {
                    fatherName = capitalizeString(newFatherName);
                }
                return fatherName;
            },

            setAge: (newAge) => {
                if (isValidAge(newAge)) {
                    age = newAge;
                }
                return age;
            },

            setFullName: (newFullName) => {
                const parts = newFullName.split(' ');
                if (parts.length === 3) {
                    surname = capitalizeString(parts[0]);
                    name = capitalizeString(parts[1]);
                    fatherName = capitalizeString(parts[2]);
                }
                return `${surname} ${name} ${fatherName || ''}`.trim();
            },
        };
    }

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    console.log(a.setAge(15))
    console.log(a.setAge(150)) //не працює
    
    console.log(b.setFullName("Петрова Ганна Миколаївна"))
    console.log(b.getFatherName()) //Миколаївна
}


// 4 createPersonClosureDestruct
{
    function createPerson(name, surname) {
        return {
            name: name,
            surname: surname,
            getFullName: function() {
            if (this.fatherName) {
                return this.name + ' ' + this.fatherName + ' ' + this.surname;
            } else {
                return this.name + ' ' + this.surname;
            }
            }
        };
    }
    
    function createPersonClosureDestruct({
    name: initialName = '',
    surname: initialSurname = '',
    fatherName: initialFatherName,
    age: initialAge
    } = {}) {
        let name = initialName;
        let surname = initialSurname;
        let fatherName = initialFatherName;
        let age = initialAge;

        function capitalizeString(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }

        function isValidName(value) {
            return typeof value === 'string' && /^[A-Za-z]+$/.test(value);
        }

        function isValidAge(value) {
            return typeof value === 'number' && value >= 0 && value <= 100;
        }

        return {
            getName: () => name,
            getSurname: () => surname,
            getFatherName: () => fatherName,
            getAge: () => age,
            getFullName: () => `${surname} ${name} ${fatherName || ''}`.trim(),

            setName: (newName) => {
            if (isValidName(newName)) {
                name = capitalizeString(newName);
            }
            return name;
            },

            setSurname: (newSurname) => {
            if (isValidName(newSurname)) {
                surname = capitalizeString(newSurname);
            }
            return surname;
            },

            setFatherName: (newFatherName) => {
            if (isValidName(newFatherName)) {
                fatherName = capitalizeString(newFatherName);
            }
            return fatherName;
            },

            setAge: (newAge) => {
            if (isValidAge(newAge)) {
                age = newAge;
            }
            return age;
            },

            setFullName: (newFullName) => {
            const parts = newFullName.split(' ');
            if (parts.length === 3) {
                surname = capitalizeString(parts[0]);
                name = capitalizeString(parts[1]);
                fatherName = capitalizeString(parts[2]);
            }
            return `${surname} ${name} ${fatherName || ''}`.trim();
            },
        };
    }

    // Example usage:
    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"))
    const b = createPersonClosureDestruct({name: 'Миколай', age: 75})

    console.log(a.getFullName() + " |age:" + a.getAge());
    console.log(b.getFullName() + " |age:" + b.getAge());
}


// 5 isSorted
{
    function isSorted() {
        if (arguments.length < 2) {
          // Якщо передано менше двох аргументів, то вони не можуть бути відсортовані.
          return false;
        }
      
        for (let i = 1; i < arguments.length; i++) {
          if (typeof arguments[i] !== 'number') {
            // Якщо хоча б один параметр не є числом, повертаємо false.
            return false;
          }
      
          if (arguments[i] <= arguments[i - 1]) {
            // Якщо хоча б один параметр менший або рівний попередньому, повертаємо false.
            return false;
          }
        }
        // Якщо всі перевірки пройдені, повертаємо true.
        return true;
    }
      
    // Приклад використання:
    console.log(isSorted(1, 2, 3, 4)); // true
    console.log(isSorted(1, 3, 2, 4)); // false
    console.log(isSorted(5, 8, 12, 20)); // true
    console.log(isSorted(5, 'abc', 12, 20)); // false (один параметр не є числом)
}


// 6 Test isSorted
{
    function isSorted() {
        if (arguments.length < 2) {
          return false;
        }
      
        for (let i = 1; i < arguments.length; i++) {
          if (typeof arguments[i] !== 'number') {
            return false;
          }
      
          if (arguments[i] <= arguments[i - 1]) {
            return false;
          }
        }
      
        return true;
    }
      
    // Заповнення масиву з введенням користувача
    let myArray = [];
      
    while (true) {
        const userInput = prompt("Введіть елемент для масиву (натисніть 'Скасувати', щоб завершити):");
      
        if (userInput === null) {
            break;
        }
      
        // Перетворення введених даних в числа та додавання їх до масиву
        const parsedInput = isNaN(userInput) ? userInput : parseFloat(userInput);
        myArray.push(parsedInput);
    }
      
    console.log("Отриманий масив:", myArray);
      
    // Виклик функції isSorted та виведення результату
    const result = isSorted(...myArray);
    console.log("Результат перевірки isSorted:", result);    
}
