let username : string = 'Revati';
let hasLoggedIn: boolean = true;

username += 'B';
console.log(username);

const names: string[] = username.split(' ');
const myValues: Array<number> = [1,2,3];

const myPerson: {
    first: string;
    last: string;
} = {
    first: 'Reva',
    last: 'B'
}

//OR

interface Person {
    first: string;
    last: string;
}

const myPersonOne: Person = {
    first: 'Reva',
    last: 'B'
}

//for map 

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}