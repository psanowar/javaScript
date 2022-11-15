let userName = 'This is user name';
console.log(typeof userName);

let numType = 20;
console.log(typeof numType);

let upperCase = 'i am shihab. i am shihab. i am shihab. i am shihab.';
console.log(upperCase.toUpperCase());


let rocona = 'I AM SHIHAB. I AM SHIHAB. I AM SHIHAB. I AM SHIHAB.';
rocona.toLowerCase()


let myFren = "shihab shohag tutul zahid";
console.log(myFren.split("shihab"));

let userName = "shihab shohag tutul zahid";
console.log(userName.indexOf('z'));

let a = 50;
let b = 30;
let c = a + b;
console.log(c);


let a = 50;
let b = 30;
let c = a - b;
console.log(c);
let myName = "Md Sanowar Hossain Shihab";
console.log(myName);

let strType = "sanowar hossain";
console.log(strType);

console.log(typeof strType);


var myFrnd = "shihab sanowar sumon shuvo kamrul";
console.log(myFrnd.split('shihab'));


 var myFrnd = "shihab sanowar sumon shuvo kamrul";
 console.log(myFrnd.indexOf('n'));


let number1 = 300;
let number2 = 200;
let total = number1 + number2;
console.log(total);

let number1 = 27;
let number2 = 30;
number1 = '' + number1;
let total = number1 + number2;

console.log(total);


let number1 = "300.58577";
let number2 = 200;
number1 = parseFloat(number1);
let mot = number1 + number2;

console.log(mot);


let num1 = "300.74774";
let num2 = 200;
num1 = parseInt(num1);
let total = num1 + num2;

console.log(total);


let myDate = new Date();
console.log(myDate.toDateString());

let myDate = new Date();
console.log(myDate.toTimeString());

let myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());


let data = ['shihab', 'sanowar', 'akas', 'saon'];

let data1 = data[3];
console.log(data1);

let data = ['shihab', 'sanowar', 'akas', 'saon'];
data[2] = 50;
console.log(data);

let data = ['shihab', 'sanowar', 'akas', 'saon'];
data.push('shovon');
data.pop();
console.log(data);

let data = ['shihab', 'sanowar', 'akas', 'saon'];
data.unshift("shohel");
data.shift();
console.log(data);



let fName = ["shihab", "sanowar", "sanon", "ahmed", "sabit", "sayed", "sobuj"];
fName.splice(1,3, "sabbir");
console.log(fName);


function add(){
    let num1 = 30;
    let num2 = 20;
    let total = num1+num2;
    console.log(total);
}

add();
add();


function add(num1,num2){

    let total = num1+num2;
    console.log(total);
}

add(20,30);
add(50,50);

function sum(num1){
    
    let total = num1*10;
    return total;
}

let x = sum(2);
let y = sum(2);
let z = x+y;
console.log(z);


function MyInfo(MyName, Upozila, MYPhone){
    this.MyName = MyName;
    this.Upozila = Upozila;
    this.MYPhone = MYPhone;
}

var obj = new MyInfo("sanowar","singra","0176784885");
var objj = new MyInfo("shihab","singra2","017650606");
console.log(obj);
console.log(objj);


function MyInfo(MyName, Upozila, MYPhone){
    this.MyName = MyName;
    this.Upozila = Upozila;
    this.MYPhone = MYPhone;
}

var obj1 = new MyInfo("sanowar","singra","0176784885");
var obj2 = new MyInfo("shihab","singra2","017650606");

console.log(obj1.Upozila);
console.log(obj2["Upozila"]);


function MyInfo(MyName, Upozila, MYPhone){
    this.MyName = MyName;
    this.Upozila = Upozila;
    this.MYPhone = MYPhone;
    this.Address = function(){
        console.log(this.MyName);
        console.log(this.Upozila);
        console.log(this.MYPhone);
    }
}

var obj1 = new MyInfo("sanowar","singra","0176784885");
var obj2 = new MyInfo("shihab","durdaspur","017650606");

obj1.Address();
obj2.Address();

let num = 40;
let result = (num>=33) ? "pass": "fail";
console.log(result);


















