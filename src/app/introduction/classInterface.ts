class ClassInterface{
    msg: string = 'Hello Thomas';

    constructor(msg?: string){

    }

    printMsg(){
        console.log(this.msg);
    }
}

let example = new ClassInterface('Hi TypeScript');
example.printMsg();


interface Dog{
    name: string;
    age: number;
    colour: string;
    date?: Date;
}

let dog: Dog = ({
    name: 'Reksio',
    age: 12,
    colour: 'black'
});

let json = '{"name":"max", "age":"13", "colour": "red", "date": "2022-04-10"}';
let myDog: Dog = JSON.parse(json);

console.log(dog);
console.log(myDog);
