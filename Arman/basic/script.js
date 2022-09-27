var firstname;
var lastname; 
var age;
var job = document.getElementById("job")

function submit(){
    firstname = document.getElementById("firstname").value
    lastname = document.getElementById("lastname").value
    age = document.getElementById("age").value
    let result = (`You are <span id=color>${firstname}</span> ${lastname} and ${age} years old.`)
    document.getElementById("sentence").innerHTML = result


    let classElement = "";

    if(firstname.length > 5){
        classElement = "green"
    }
    else {
        classElement = "red"
    }
    document.getElementById("color").setAttribute("class", classElement)
}


function bgcolor(){
    document.getElementById("job").value
    let job = document.getElementById("job").value

    if(job == "IT"){
        document.getElementById("sentence").setAttribute("class", "purple")
    }
    else {
        document.getElementById("sentence").setAttribute("class", "yellow")
    }
}
document.getElementById("job").addEventListener("change", bgcolor)