// Conditions

// 1 blocks
{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            console.log(a, b, c);
            //a = 10, b = 20, c = 30, d is not defined
            
            b++
            a *= 10
        }
        {
            let c = 50
            console.log(a, b, c);
            //a = 100, b = 21, c = 50, d is not defined
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            console.log(a, b, d);
            //a = 100500, b = 521, c is not defined, d = 'value'
            {
                let a = -50
                b     = 1000
                console.log(a, b, d);
                //a = -50, b = 1000, c is not defined, d = 'value'
            }
            console.log(a, b, d);
            //a = 100500, b = 1000, c is not defined, d = 'value'
        }
        console.log(a, b);
        //a = 100, b = 1000, c is not defined, d is not defined
    }
    console.log(a);
    //a = 100, b is not defined, c is not defined, d is not defined
}


// 2 comparison if
{
    let age = +prompt("Скільки вам років?", "");

    if (age < 0) {
        alert("Введений вік не може бути від'ємним!");
    } else if (age < 18) {
        alert("школяр");
    } else if (age < 30) {
        alert("молодь");
    } else if (age < 45) {
        alert("зрілість");
    } else if (age < 60) {
        alert("захід сонця");
    } else if (age >= 60) {
        alert("як пенсія?");
    } else {
        alert("чи кіборг, чи KERNESS");
    }    
}


// 3 switch: sizes
{
    // Об'єкт, що містить відповідності розмірів
    let sizeMapping = {
        40: 6,
        42: 8,
        44: 10,
        46: 12,
        48: 14,
        50: 16,
        52: 18,
        54: 20
    };

    let ukrainianSize = parseInt(prompt("Введіть свій розмір одягу в українській системі (наприклад, 46, 48, 50):"));

    let americanSize;

    switch (ukrainianSize) {
        case 40:
            americanSize = 6;
            break;
        case 42:
            americanSize = 8;
            break;
        case 44:
            americanSize = 10;
            break;
        case 46:
            americanSize = 12;
            break;
        case 48:
            americanSize = 14;
            break;
        case 50:
            americanSize = 16;
            break;
        case 52:
            americanSize = 18;
            break;
        case 54:
            americanSize = 20;
            break;
        default:
            americanSize = "Невідомий розмір";
    }

    alert("Ваш розмір одягу в американській системі: " + americanSize);
}


// 5 noswitch
{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        // Перевірка наявності key в cases
        if (cases.hasOwnProperty(key) && typeof cases[key] === 'function') {
            // Якщо ключ знайдено і відповідне значення - функція, запустити її
            cases[key]();
        } else if (cases.hasOwnProperty(defaultKey) && typeof cases[defaultKey] === 'function') {
            // Якщо ключ не знайдено, використовувати значення defaultKey як ключ
            cases[defaultKey]();
        }
    };
    
    const drink = prompt("Що ви любите пити?");
    
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай: () => console.log('Смачна та корисна штука. Не перестарайтеся з цукром'),
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: () => console.log('Та ви, батечку, естет! Не забудьте лід і сигару'),
        default: () => console.log('Щось я не зрозумів')
    });    
}


