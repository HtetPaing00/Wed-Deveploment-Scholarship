

function myFun(a,b,c){

    console.log("Parameter 1",a);
    console.log("Para:",b);
    console.log("para :",c);
    return a+b+c;

}

let return1 = function(a,b){return a+b};

let y = return1(10,11)
console.log('y:',y);

let returnValue = myFun(1,2,3);
console.log("return value :",returnValue);