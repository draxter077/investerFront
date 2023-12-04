import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeMedium, fontSizeSmall, transitionSlow } from "../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 20px;

    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0);
    background: ${colorSecundary};

    transition: top ${transitionSlow} linear;

    position: fixed;
    z-index: 1;
    top: ${atr => atr.$display ? "0vh" : "-100vh"};
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: rgb(255, 255, 255);
    margin: 0px 0px 20px 0px;
    font-weight: 700;
`
export const Info = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    font-size: ${fontSizeSmall};
    line-height: 1.2;
`
export const BankData = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    font-weight: 600;
    line-height: 1.4;
`
export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px 0px 0px 0px;

    input{
        width: 15%;
        font-size: ${fontSizeSmall};
    }
    button{
        margin: 0px 0px 0px 10px;
        height: 100%;
    }
`
export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 20px 0px 0px 0px;
`