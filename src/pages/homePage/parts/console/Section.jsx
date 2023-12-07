import { SectionDiv } from "./style.js"
import { API } from "../../../../variablesValues.js"
import axios from "axios"

export function ConsoleLine(atr){
    async function send(e){
        let line = e.target.parentElement.children[0].value
        await axios.post(API + "/console", {command: line})
            .then(resposta => {alert(resposta.data)})
            .catch(response => {alert(response.response.status)})
    }
    return(
        <SectionDiv userID={atr.userID}>
            <input placeholder="Digite o comando (+ to args)"></input>
            <button onClick={(e) => send(e)}>Enviar</button>
        </SectionDiv>
    )
}