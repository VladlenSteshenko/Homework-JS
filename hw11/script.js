// Closures

// 1 makeProfileTimer
{
    function makeProfileTimer() {
        const startTime = performance.now();
    
        return function () {
            const endTime = performance.now();
            return endTime - startTime;
        };
    }
    
    const timer = makeProfileTimer();
    alert('Вимірюємо час роботи цього alert');
    // якийсь код, час виконання якого ми хочемо виміряти з високою точністю
    alert(timer()); // alert повинен вивести час у мілісекундах від виконання makeProfileTimer до моменту виклику timer()
    
    const timer2 = makeProfileTimer();
    prompt('');
    alert(`Час роботи двох alert та одного prompt ${timer()}`);
    alert(`Час роботи prompt та попереднього alert ${timer2()}`);     
}


// 2 makeSaver
{
    function makeSaver(fn) {
        let result;
    
        return function () {
            if (!result) {
                result = fn();
            }
    
            return result;
        };
    }
    
    let saver = makeSaver(Math.random);
    let value1 = saver();
    let value2 = saver();
    alert(`Random: ${value1} === ${value2}`); // Повинно вивести true
    
    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
    });
    
    let value3 = saver2();
    let value4 = saver2();
    console.log(value3 === value4); // Повинно вивести true
    
    let namePrompt = prompt.bind(window, 'Як тебе звуть?');
    let nameSaver = makeSaver(namePrompt);
    alert(`Привіт! Prompt ще не було!`);
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
}


// 3 myBind
{
    function myBind(func, context, args) {
        return function (...newArgs) {
            const combinedArgs = args.map(arg => (arg === undefined ? newArgs.shift() : arg))
                                    .concat(newArgs);
            return func.apply(context, combinedArgs);
        };
        }

    let pow5 = myBind(Math.pow, Math, [undefined, 5]);
    let cube = myBind(Math.pow, Math, [undefined, 3]);

    console.log(pow5(2)); // Output: 32
    console.log(pow5(4)); // Output: 1024
    console.log(cube(3)); // Output: 27

    let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
    console.log(chessMin(-1, -5, 3, 15)); // Output: -5

    const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
    console.log(bindedJoiner('a', 'c', 'd') === 'abcdef'); // true
    console.log(bindedJoiner('1', '2', '3') === '1b23ef'); // true

    let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    let someNumber = zeroPrompt("Enter number");
    console.log(someNumber);
}


// 4 checkResult
{
    function checkResult(original, validator){
        function wrapper(...params){
            let result;
            do {
                result = original.call(this, ...params);
            } while (!validator(result));
            return result;
        }
        
        return wrapper;
    }
    
    // Приклади використання:
    
    // numberPrompt - функція, яка буде запускати prompt до тих пір, поки користувач не введе число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x));
    let number = +numberPrompt("Введіть число", "0");
    
    // gamePrompt - функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
    const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()));
    const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");
    
    // RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
    function RandomHigh() {
        const randomValue = checkResult(() => Math.random(), x => x >= 0.5 && x <= 1);
        return randomValue();
    }
    
    // AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)
    function AlwaysSayYes() {
        const confirmPrompt = checkResult(confirm, x => x);
        return confirmPrompt("Press OK to continue");
    }
    
    // respectMe. Дістає користувача запуском цієї функції, поки якесь із полів не введено
    function respectMe() {
        const inputPrompt = checkResult(prompt, x => x.trim() !== "");
        return inputPrompt("Please enter something:");
    }
      
    const randomResult = RandomHigh();
    console.log("RandomHigh Result:", randomResult);
    
    const confirmationResult = AlwaysSayYes();
    console.log("AlwaysSayYes Result:", confirmationResult);
    
    const userInput = respectMe();
    console.log("User Input:", userInput);    
}
