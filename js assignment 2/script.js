// 1st button code 
document.getElementById("1btn").onclick = function () {
    let digit1 = 4
    let digit2 = "2"
    let digit3 = 5
    let concetinate = digit1 + digit2 + digit3
    document.getElementById('input-section').innerHTML = "sum of these number 4,'2',5"
    document.getElementById('output-section').innerHTML = `Answer of this is ${concetinate} <br> Because of concetination`
}
document.getElementById('input-section').innerHTML = ""
document.getElementById('output-section').innerHTML = ""
// 2nd button code 
document.getElementById("2btn").onclick = function () {
    let name = prompt("Enter your name")
    document.getElementById('input-section').innerHTML = ""
    document.getElementById('output-section').innerHTML = `your name is ${name}. `
}
document.getElementById('input-section').innerHTML = ""
document.getElementById('output-section').innerHTML = ""
// 3rd button code 
document.getElementById("3btn").onclick = function () {
    let firstName = prompt("enter your name")
    if (firstName == "shafay") {
        document.getElementById("output-section").innerHTML = "Correct"
        console.log("correct")
    }
}
document.getElementById('input-section').innerHTML = ""
document.getElementById('output-section').innerHTML = ""

// 4th button code 
document.getElementById("4btn").onclick = function () {
    let num1 = +prompt("enter 1st number")
    if (num1 >= 1) {
        console.log("your number is greater than 1")
        document.getElementById("output-section").innerHTML= "your number is greater than 1"
    }
    else {
        alert("enter number greater than 0")
        return
    }
}
document.getElementById('input-section').innerHTML = ""
document.getElementById('output-section').innerHTML = ""
// button for clearing output section 
document.getElementById("output-clear").onclick = function () {
    document.getElementById('output-section').innerHTML = "<p>|</p>"
}

// 5th button code 
document.getElementById("5btn").onclick = function () {
   let a = prompt("enter any key from keyboard")
   if (a = "1","2","3","4","5","6","7","8","9"){
    document.getElementById("output-section").innerHTML = "you Entered a number"
   }
   else if (a = "q","w","e","r","t","y","u","i","o","p",""){
    document.getElementById("output-section").innerHTML = "you entered a alphabet"
   }
   else {
    document.getElementById("output-section").innerHTML = "you enterd special character"
   }
}
// button for clearing input section 
document.getElementById("input-clear").onclick = function () {
    document.getElementById('input-section').innerHTML = "<p>|</p>"
}
// 6th button code 
document.getElementById("6btn").onclick = function () {}
   

// 7th button code 
document.getElementById("7btn").onclick = function () {
    let number1 = prompt("enter username");
    if (number1 == "abcd"){
        if (number1 = "abcd")
        alert("user name is icorrect")
        else alert("user name is incorrect")
    }
    let number2 = +prompt("enter password");
    if (number2 == 1234){
        alert("correct")    
    }
    else
     alert("incorrect")
   }

// 8th button code 
document.getElementById("8btn").onclick = function () {


    document.getElementById("input-section").innerHTML = "<button id='sum' onClick='getValue()' class='btn bg-danger m-2'>Sum</button><button id='sub' class='m-2 btn bg-danger'>Subtract</button><button id='product' class='m-2 btn bg-danger'>multiply</button><button id='div' class='m-2 btn bg-danger'>divide</button>"


    document.getElementById("sum").onclick = function () {
        let input1 = +prompt("enter number 1")
        let input2 = +prompt("enter number 2")
        let sum = input1 + input2
        document.getElementById("output-section").innerHTML = `<div>Sum of these numbers is ${sum}</div>`
    }


    document.getElementById("sub").onclick = function () {
        let input1 = +prompt("enter number 1")
        let input2 = +prompt("enter number 2")
        let sub = input1 - input2
        document.getElementById("output-section").innerHTML = `<div>Subtraction of these numbers is ${sub}</div>`
    }

    document.getElementById("product").onclick = function () {
        let input1 = +prompt("enter number 1")
        let input2 = +prompt("enter number 2")
        let prod = input1 * input2
        document.getElementById("output-section").innerHTML = `<div>Product of these numbers is ${prod}</div>`
    }


    document.getElementById("div").onclick = function () {
        let input1 = +prompt("enter number 1")
        let input2 = +prompt("enter number 2")
        let divide = input1 / input2
        document.getElementById("output-section").innerHTML = `<div>answer of these numbers is ${divide}</div>`
    }
}
