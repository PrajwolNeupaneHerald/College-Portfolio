document.getElementById("email").addEventListener('input',myFunction)
document.getElementById("message").addEventListener('input',messageOnChange)
var email = null
var message = null

function myFunction(e) {
    email = e.target.value
}

function messageOnChange(e){
    message =  e.target.value
}

function onClick(){
    alert(email+message)
}