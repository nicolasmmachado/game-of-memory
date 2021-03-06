import styled from "styled-components";

export const  Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1550FF;
    width: 200px;
    height: 50px;
    cursor:pointer;
    border-radius: 10px;
    opacity: 1;
    transition: all .3s;
    &:hover{
        opacity: .8;
    }`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255, .2);
    padding: 0 15px;`;
 
export const Icon = styled.img`
    height: 20px;`;

export const Label = styled.div`
    height:inherit;
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    flex:1;
    padding: 0 20px;`;