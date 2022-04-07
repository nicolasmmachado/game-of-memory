import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 18px;
    @media (max-width:750px) {
        align-items: center;
    }`;

export const Title = styled.label`
    margin: 10px;`;

export const Label = styled.label`
    margin: 0 10px;
    font-size: 35px;
    font-weight: bold;`;