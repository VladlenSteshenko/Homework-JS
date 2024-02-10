// Recursion

// 3 Deep Copy
{
    function deepCopy(obj) {
        
        if (Array.isArray(obj)) {
           
            return obj.map(element => deepCopy(element));

        } else if (typeof obj === 'object' && obj !== null) {
            
            const newObj = {};
            for (const key in obj) {
                newObj[key] = deepCopy(obj[key]);
            }
            return newObj;

        } else {
            
            return obj;

        }
    }
    
    const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true}, true, false];
    const arr2 = deepCopy(arr);
    console.log(arr2);
}

// 4 My Stringify
{
    function stringify(obj) {
        if (typeof obj !== 'object' || obj === null) {

            if (typeof obj === 'string') {
                return `"${obj}"`; 
            } else {
                return String(obj); 
            }
        } else if (Array.isArray(obj)) {

            const elements = obj.map(element => stringify(element));
            return `[${elements.join(',')}]`; 
        } else {

            const properties = Object.entries(obj)
                .map(([key, value]) => `"${key}":${stringify(value)}`);
            return `{${properties.join(',')}}`; 
        }
    }
    
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
    
    const jsonString = stringify(htmlTree);
    console.log(JSON.parse(jsonString));
}