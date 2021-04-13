

interface Personz {
    firstName: string,
    lastName: string,
    job?: job
    isVisitor?: boolean
}

type job = 'Engineer' | 'Programmer'


function generateEmail(input: Personz, force?: boolean): string | undefined {
    if (input.isVisitor && !force) {
        return undefined
    } else {
        return `${input.firstName}.${input.lastName}@email.com`
    }
}

function isPerson(potentialPerson: any): boolean {
    if ('firstName' in potentialPerson &&
        'lastName' in potentialPerson) {
        return true
    } else {
        return false
    }
}

function printEmailIfPerson(potentialPerson: any): void {
    if (isPerson(potentialPerson)) {
        console.log(generateEmail(potentialPerson))
    } else {
        console.log('Input is not a person')
    }
}

printEmailIfPerson({
    firstName: 'John',
    lastNames: 'Doe'
})

async function someAsyn() {
    return 'async'
}