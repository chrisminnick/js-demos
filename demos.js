
let f = function () { 
    this.a = 1; 
    this.b = 2; 
}

let o = new f();

f.prototype.b = 3; 
f.prototype.c = 4;

console.log(o.a);
console.log(o.b); 
console.log(o.c); 
console.log(o.d); 

var obj = { 
a: 2, 
m: function() { 
    return this.a + 1; 
}
}; 

console.log(obj.m()); 

var p = Object.create(obj); 
p.a = 4; 
console.log(p.m()); 
console.log(obj.m())

var author = {
name: 'Chris',
homeTown: 'Detroit',
logName: function() {
    console.log(this.name);
}
};

author.logName();


var logName = function() {
console.log(this.fname);
}

var author = {
fname: 'Chris',
lname: 'Minnick',
homeTown: 'Detroit'
}

logName.call(author);

var logName = function(lang1) {
console.log(this.fname + '  ' + this.lname + ' ' + lang1);
};

var language = ["JavaScript","HTML","CSS"];

logName.call(author,language[0]);

logName = function(food1,food2,food3) {
console.log(this.fname + this.lname);
console.log(food1, food2,
    food3);
};

var favoriteFoods= ['Tacos','Soup','Sushi'];

logName.apply(author, favoriteFoods);

logName = function(food) {
console.log(this.fname +" " + this.lname + 
        "\'s Favorite Food was " + food);
};
var person = {
fname: "George",
lname: "Washington"
};

var logMe = logName.bind(person,"Tacos");

logMe();

var City = function (lat,long,state,pop) {
this.lat = lat;
this.long = long;
this.state = state;
this.pop = pop;
};
var sacramento = new City(38.58,121.49,"CA",480000);
console.log (sacramento.state);

var logName = function() {
console.log(this.name);
}

//logName(author); //undefined(error in 'strict' mode)

//window.author = "Harry";

//logName(author); // "Harry"

var ff = favoriteFoods.map(function(food){
    return (food + " is my favorite");
});

//console.log(ff);

var a = 5;
var b = 10;

if (a===5) {
var a = 4;
var b = 1;
}
//console.log(a);
//console.log(b);

let a2 = 5;
let b2 = 10;

if (a===5) {
let a2 = 4;
let b2 = 1;
}
console.log(a2);
console.log(b2);

const myconst = "test";
//myconst = "newtest";

function Counter() {
this.num = 0;

function add(){
    this.num++;
    //console.log("inner: " + this.num);
}

let addArrow = () => {
this.num++;
//console.log("innerArrow: " + this.num);
}

add();
addArrow();
}

var a = new Counter(); // create new object from function
console.log("outer: " + a.num);



function defaultParams (x, y = 0, z = 13) {
console.log(x + y + z);
}

defaultParams(4);


function restFunc (x, y, ...a) {
return (x + y) * a.length;
}

//console.log(restFunc(1, 2, "hello", true, 7));


var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ];
//console.log(other); 


var str = "foo";
var chars = [ ...str ];
console.log(chars);


let customer = { name: "Penny" }
let order = { price: 4, product: "parts", quantity: 6 }
message = `Hi, ${customer.name}. Thank you for your order of ${order.quantity} ${order.product} at ${order.price}.`;

console.log(message);
