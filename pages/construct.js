import initMain from "./init/main.js"
import homeMain from "./home/main.js"

export default async function constructMain(data){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(data == null){
        initMain()
    }
    else{
        homeMain(data)
    }
}