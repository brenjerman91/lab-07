

class CustomError extends Error{}

function throwGenericError(){
    throw new CustomError("Generic Error");
}

function throwCustomError(){
    throw new CustomError("Generic Error");
}

console.log("Force generic Error");
try{
    console.log("Generic error try block");
    throwGenericError()
}catch(error){
    console.log("Generic error catch block");
    console.log(`${error.name}: ${error.message}`);
}finally{
    console.log("Generic error finally block")
}

console.log("Force custom Error");
try{
    console.log("Generic error try block");
    throwCustomError()
}catch(error){
    console.log("Custom error catch block");
    console.log(`${error.name}: ${error.message}`);
}finally{
    console.log("Custom error finally block")
}