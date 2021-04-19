

let abc = undefined;
const def = null;

function getData(): string | undefined{
    return '';
}

const data = getData();

if (data) {
    const someOtherData = data;
}

let input: unknown;
input = 'someInput';
let someSensitiveValue: string;



if (typeof input === 'string') {
    someSensitiveValue = input;
}


function doTasks(tasks: number): void | never{
    if (tasks > 3) {
        throw new Error('Too many tasks!');        
    }
}

const stuff = doTasks(2);