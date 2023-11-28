// var a = 10;
let b = 20;
const c = 30;

if(true){
    // var a = 100;
    let b = 200;
    const c = 300;

    // console.log("INNER A : ", a);
    // console.log("INNER B : ", b);
    // console.log("INNER C : ", c);

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const firstname = "vaibhav"
    function two(){
        const lastname = "suthar"
        console.log(firstname);
    }
    // console.log(lastname);
    two()
}
one()


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}