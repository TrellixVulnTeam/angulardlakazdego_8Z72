var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = 'Hello Thomas';
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var example = new ClassInterface('Hi TypeScript');
example.printMsg();
var dog = ({
    name: 'Reksio',
    age: 12,
    colour: 'black'
});
var json = '{"name":"max", "age":"13", "colour": "red", "date": "2022-04-10"}';
var myDog = JSON.parse(json);
console.log(dog);
console.log(myDog);
