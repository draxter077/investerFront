import inputs from "../forms/inputs/main.js"
import forgotPass from "../forms/forgotPass/main.js"
import enter from "../forms/enter/main.js"

function aboutUs(){
    const aboutUsDiv = document.getElementsByClassName("aboutUs")[0]
    if(aboutUsDiv.style.maxHeight == "200px"){
        aboutUsDiv.style.maxHeight = "0px";
    }
    else{
        aboutUsDiv.style.maxHeight = "200px";
    }
}

function change(Event){
    const formsDiv = document.getElementsByClassName("initBodyForms")[0]
    const btn = Event.target
    if(btn.innerHTML == "Criar uma conta"){
        formsDiv.replaceChildren(inputs("createAccount"), enter("createAccount"))
        btn.innerHTML = "Entrar em uma conta"
    }
    else if(btn.innerHTML == "Entrar em uma conta"){
        formsDiv.replaceChildren(inputs("login"), forgotPass(), enter("login"))
        btn.innerHTML = "Criar uma conta"
    }
    aboutUs()
}

export default function changeForms(){
    const changeForms = document.createElement("div")
    changeForms.className = "initBodyChangeForms"
    
    const button = document.createElement("button")
    button.innerHTML = "Criar uma conta"
    button.onclick = change
    changeForms.appendChild(button)

    return(changeForms)
}