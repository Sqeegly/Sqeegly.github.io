console.log("Hello world!");
// simple function, no parameters
function hello() {
        console.log("Hi Rami!");
    }
    function hello2(name) {
        console.log("Hi " + name);
    }
    hello();
    hello2("Akilesh");
    hello2("Jack");
 
    
    function square(x){
        p = x * x;
        return p;
    }
console.log(square(8));

function sumOfSqaure(x, y) {
    a = sqaure(x);
    b = sqaure(y);
    p = mathSum(a, b);
    return p;
}
console.log(sumOfSqaure(4, 2));

function hypo(x, y){
   c = sumOfSqaure(x , y);
   p = math.sqrt(c);
   return p; 
}
function annoyingGreet(name, x) {
    for (let i = 0; i < x; i++) {
        console.log("Whats up " + name + x)

    }
}


function mathSum(x, y) {
    let p = x + y;
    return p;
}

console.log(mathSum(4, 2));

function sqaure(x) {
    let p = x * x;
    return p;
}
annoyingGreet("fish", 100);


