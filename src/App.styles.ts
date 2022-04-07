import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    display:flex;
    margin:auto;
    padding: 30px 0;
    @media (max-width:750px) {
        flex-direction: column;
    }`;

export const Info = styled.div`
    display:flex;
    flex-direction: column;
    width:auto;
    
    @media (max-width:750px) {
        margin-bottom: 30px;
        align-items: center;
    }`;

export const LogoLink = styled.a`
    display:block;`;

export const InfoArea = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    padding: 20px 10px;
    @media (max-width:750px) {
        align-items: center;
        text-align: center;
    }`;

export const GridArea = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 750px) {
        justify-content: center;
        margin: 30px 10px;
    }`;

export const Grid = styled.div`
    width: 430px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;`;