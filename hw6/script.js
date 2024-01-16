//Objects

// 1 Literals
{
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'white',
        fuelType: 'gasoline',
    };
      
    const smartphone = {
        brand: 'Samsung',
        model: 'Galaxy S23 Ultra',
        screenSize: 6.8,
        operatingSystem: 'Android',
    };
      
    const book = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        pageCount: 180,
    };
}


// 2 Literals expand
{
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'white',
        fuelType: 'gasoline',
    };

    const carPropertyKey = prompt('Введіть назву властивості для автомобіля:');
    const carPropertyValue = prompt('Введіть значення для властивості:');
      
    car[carPropertyKey] = carPropertyValue;

    const anotherCarPropertyKey = prompt('Введіть назву другої властивості для автомобіля:');
    const anotherCarPropertyValue = prompt('Введіть значення для другої властивості:');

    car[anotherCarPropertyKey] = anotherCarPropertyValue;
    
    console.log('Об\'єкт car з новими властивостями:', car);

    const smartphone = {
        brand: 'Samsung',
        model: 'Galaxy S23 Ultra',
        screenSize: 6.8,
        operatingSystem: 'Android',
    };

    const smartphonePropertyKey = prompt('Введіть назву властивості для смартфона:');
    const smartphonePropertyValue = prompt('Введіть значення для властивості:');

    smartphone[smartphonePropertyKey] = smartphonePropertyValue;

    const anotherSmartphonePropertyKey = prompt('Введіть назву другої властивості для смартфона:');
    const anotherSmartphonePropertyValue = prompt('Введіть значення для другої властивості:');

    smartphone[anotherSmartphonePropertyKey] = anotherSmartphonePropertyValue;

    console.log('Об\'єкт smartphone з новими властивостями:', smartphone);

    const book = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        pageCount: 180,
    };

    const bookPropertyKey = prompt('Введіть назву властивості для книжки:');
    const bookPropertyValue = prompt('Введіть значення для властивості:');

    book[bookPropertyKey] = bookPropertyValue;

    const anotherBookPropertyKey = prompt('Введіть назву другої властивості для книжки:');
    const anotherBookPropertyValue = prompt('Введіть значення для другої властивості:');

    book[anotherBookPropertyKey] = anotherBookPropertyValue;

    console.log('Об\'єкт book з новими властивостями:', book);
}


// 3 Literals copy
{
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'white',
        fuelType: 'gasoline',
    };

    // Введення ще однієї властивості та створення копії об'єкта car
    const additionalCarPropertyKey = prompt('Введіть ще одну назву властивості:');
    const additionalCarPropertyValue = prompt('Введіть ще одне значення для властивості:');

    const newCar = { ...car, [additionalCarPropertyKey]: additionalCarPropertyValue };

    console.log('Об\'єкт car:', car);
    console.log('Копія об\'єкта car (newCar):', newCar);
}


// 4 Html tree
{
    const htmlTree = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        },
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    },
                ],
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok',
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel',
                        },
                        children: ['Cancel'],
                    },
                ],
            },
        ],
    };
    console.log(htmlTree.children[1].children[1].children[0]);
    console.log(htmlTree.children[0].children[3].attrs.id);
}


// 5 Parent
{
    var htmlTree = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                parent: null, // Батьківський елемент встановлюється на null для кореневого елемента
                children: [
                    {
                        tagName: 'span',
                        parent: null,
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: 'br',
                        parent: null,
                    },
                    {
                        tagName: 'input',
                        parent: null,
                        attrs: {
                            type: 'text',
                            id: 'name',
                        },
                    },
                    {
                        tagName: 'input',
                        parent: null,
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    },
                ],
            },
            {
                tagName: 'div',
                parent: null,
                children: [
                    {
                        tagName: 'button',
                        parent: null,
                        attrs: {
                            id: 'ok',
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        parent: null,
                        attrs: {
                            id: 'cancel',
                        },
                        children: ['Cancel'],
                    },
                ],
            },
        ],
    };
    
    // Встановлюємо властивість parent для кожного об'єкту
    function setParent(node, parent) {
        node.parent = parent;
        if (node.children) {
            for (let child of node.children) {
                setParent(child, node);
            }
        }
    }
    
    // Встановлюємо батьківський елемент для кожного елемента у структурі
    setParent(htmlTree, null);
    
    // Перевіряємо результат
    console.log(htmlTree);    
}


// 6 Change OK
{
    const userInput = prompt('Enter a value for the "id" attribute of the OK button:');
    const htmlTree = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                parent: null,
                children: [
                    {
                        tagName: 'span',
                        parent: null,
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: 'br',
                        parent: null,
                    },
                    {
                        tagName: 'input',
                        parent: null,
                        attrs: {
                            type: 'text',
                            id: 'name',
                        },
                    },
                    {
                        tagName: 'input',
                        parent: null,
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    },
                ],
            },
            {
                tagName: 'div',
                parent: null,
                children: [
                    {
                        tagName: 'button',
                        parent: null,
                        attrs: {
                            id: userInput || 'ok', // Використовуємо введене значення користувача або залишаємо 'ok' як за замовчуванням
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        parent: null,
                        attrs: {
                            id: 'cancel',
                        },
                        children: ['Cancel'],
                    },
                ],
            },
        ],
    };

    // Встановлюємо властивість parent для кожного об'єкту
    function setParent(node, parent) {
        node.parent = parent;
        if (node.children) {
            for (let child of node.children) {
                setParent(child, node);
            }
        }
    }

    // Встановлюємо батьківський елемент для кожного елемента у структурі
    setParent(htmlTree, null);

    // Перевіряємо результат
    console.log(htmlTree);
    console.log(htmlTree.children[1].children[0].attrs.id);
}


// 7 Destructure
{
    const htmlTree = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        },
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    },
                ],
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok',
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel',
                        },
                        children: ['Cancel'],
                    },
                ],
            },
        ],
    };


    const {
        tagName: bodyTagName,
        children: [
        {
            tagName: div1TagName,
            children: [
            {
                tagName: spanTagName,
                children: [spanText],
            },
            brTag,
            {
                tagName: input1TagName,
                attrs: { type: input1Type, id: input1Id },
            },
            {
                tagName: input2TagName,
                attrs: { type: input2Type, id: input2Id },
            },
            ],
        },
        {
            tagName: div2TagName,
            children: [
            {
                tagName: button1TagName,
                attrs: { id: button1Id },
                children: [button1Text],
            },
            {
                tagName: button2TagName,
                attrs: { id: button2Id },
                children: [button2Text],
            },
            ],
        },
        ],
    } = htmlTree;

    console.log("Виведіть значення тексту у тезі span:  " + spanText)
    console.log("Виведіть значення тексту в другій кнопці:  " + button2Text)
    console.log("Виведіть значення атрибуту id у другому input:  " + input2Id)
}


// 8 Destruct array
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

    let [odd1, even1, odd2, even2, odd3, ...letters] = arr;

    // Logging the results
    console.log("Even Numbers:", even1, even2);
    console.log("Odd Numbers:", odd1, odd2, odd3);
    console.log("Letters:", letters);
}


// 9 Destruct string
{
    let arr = [1, "abc"];

    const [number, [s1, s2, s3]] = arr;
    console.log("Число в змінній number:", number);
    console.log("Літера a в змінній s1:", s1);
    console.log("Літера b в змінній s2:", s2);
    console.log("Літера c в змінній s3:", s3);
}


// 10 Destruct 2
{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{name: 'Maria'}, {name: 'Nikolay'}]
    };
    
    const { children: [{ name: name1 }, { name: name2 }] } = obj;
    
    console.log("Ім'я першої дитини (name1):", name1);
    console.log("Ім'я другої дитини (name2):", name2);
}


// 11 Destruct 3
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];

    const [a, b, ...rest] = arr;
    const length = arr.length;

    console.log("Перший елемент (a):", a);
    console.log("Другий елемент (b):", b);
    console.log("Довжина масиву (length):", length);
}


// 12 Copy delete
{
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'white',
        fuelType: 'gasoline',
    };
    
    // Введення ще однієї властивості та створення копії об'єкта car
    const additionalCarPropertyKey = prompt('Введіть ще одну назву властивості:');
    
    // Створення копії об'єкта car без введеного користувачем ключа
    const { [additionalCarPropertyKey]: removedProperty, ...newCar } = car;
    
    console.log('Об\'єкт car:', car);
    console.log('Копія об\'єкта car без введеного користувачем ключа (newCar):', newCar);
}


