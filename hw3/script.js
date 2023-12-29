// 1 String: greeting
{
    let greeting = prompt('Введіть ваше ім\'я:');
    alert(`Привіт, ${greeting}!`);
}

// 2 String: gopni4ek
{
    let gopni4ek = prompt('Введіть рядок:');
    let resultGopni4ek = gopni4ek.split(',').join(' блін, ');
    console.log(resultGopni4ek);
}

// 3 String: capitalize
{
    let str = "cANBerRa";
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);
}

// 4 String: word count 
{
    let wordCount = prompt('Введіть рядок:');
    let count = wordCount.split(' ').length;
    console.log(count);
}

// 5 String: credentials 
{
    let firstName = prompt("Введіть ім'я:");
    let lastName = prompt("Введіть прізвище:");
    let middleName = prompt("Введіть по батькові:");
    
    firstName = firstName.trim();
    lastName = lastName.trim();
    middleName = middleName.trim();
    
    let nameParts = `${firstName} ${lastName} ${middleName}`.split(" ");
    
    for (let i = 0; i < nameParts.length; i++) {
        nameParts[i] = nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1).toLowerCase();
    }
    
    let capitalizedFullName = nameParts.join(" ");
    
    console.log("ПІБ з великої літери:", capitalizedFullName);
}

// 6 String: beer
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result = str.split('пиво').join('чай');
    console.log(result);
}

// 7 String: no tag
{
    let str = "якийсь текст, в якому є один тег <br/> і всяке інше";
    let tagStartIndex = str.indexOf('<');
    let tagEndIndex = str.indexOf('>');
    let result = str.slice(0, tagStartIndex) + str.slice(tagEndIndex + 1);
    console.log(result);
}

// 8 String: big tag
{
    let str = "якийсь текст у якому є один тег <br/> і всяке інше";
    let tagStartIndex = str.indexOf('<');
    let tagEndIndex = str.indexOf('>');
    let tagUpperCase = str.slice(tagStartIndex, tagEndIndex + 1).toUpperCase();
    let result = str.slice(0, tagStartIndex) + tagUpperCase + str.slice(tagEndIndex + 1);
    console.log(result);
}

// 9 String: new line
{
    let multiLineString = prompt('Введіть рядок з використанням \\n:');
    let resultMultiLine = multiLineString.split('\\n').join('\n');
    console.log(resultMultiLine);
}

// 10 String: youtube 
{
    // Оголосіть константу з регулярним виразом для визначення ідентифікатора відео на YouTube
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Запитайте у користувача текст із посиланням на YouTube
    let userInput = prompt('Введіть текст із посиланням на YouTube:');

    // Використовуйте метод match для отримання масиву ідентифікаторів відео
    let matchResult = userInput.match(youtubeRegex);

    // Перевірка, чи є збіг та чи є ідентифікатор відео в масиві
    if (matchResult && matchResult[1]) {
        // Вийміть ідентифікатор відео з масиву
        let videoId = matchResult[1];

        // Створіть HTML-код для вбудовування відео на сторінку YouTube
        let embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

        // Використовуючи document.write, виведіть отриманий рядок на сторінку
        document.write(embedCode);
    } else {
        document.write("Введений текст не містить посилання на YouTube відео.");
    }
}