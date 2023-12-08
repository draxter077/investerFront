import { SectionDiv, Logo, Button } from "./style.js"

export function Topo(atr){
    return(
        <SectionDiv>
            <Logo>iPH</Logo>
            <Button onClick={() => atr.setShowHelp(true)}>Ajuda</Button>
        </SectionDiv>
    )
}