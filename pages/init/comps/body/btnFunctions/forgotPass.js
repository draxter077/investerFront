async function wrongAnimation(item){
    item.style.animation = "inputWrongValue 1s forwards"
    await new Promise(resolve => setTimeout(resolve, 1000))
    item.style.animation = ""
}

export default async function forgotPassword(Event){
    Event.target.disabled = true
    const input = document.getElementsByClassName("initBodyFormsInputs")[0].children[0]
    if(input.value.length == 0){
        await wrongAnimation(input)
    }
    else{
        const userEmail = input.value
        await axios.post("https://ace-chimp-merry.ngrok-free.app/forgotPassword", {userEmail: userEmail})
            .then(async resposta => {
                input.value = "Nova senha enviada"
                await new Promise(resolve => setTimeout(resolve, 3000))
                input.value = userEmail
            })
            .catch(async response => {
                if(response.response.status == 404){
                    await wrongAnimation(input)
                }
            })
    }
    Event.target.disabled = false
}