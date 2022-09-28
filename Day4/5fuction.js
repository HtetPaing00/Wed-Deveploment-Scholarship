// programmer defined function 
// standard library function 

function myFun(name){

    //function body
    let myname = "My Name is "+name
    console.log(myname);

}

function myFun2(){

   console.log("This is from myFun2 Function");
}

function adding(a,b){
    if(a<b){
        console.log("a is less")
    }else{
        console.log("a is great")
    }
}

let name = "WinHtut"

myFun(name)
myFun2()

adding("win","htut")
adding(4,5)
adding(5,6)