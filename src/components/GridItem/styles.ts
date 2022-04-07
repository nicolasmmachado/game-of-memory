import styled from "styled-components"

type ContainerProps = {
    backColor: boolean
}

type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.backColor ? "#1550FF" : "#E2E3E3"};
    cursor: pointer;`;

export const Icon = styled.img<IconProps>`
    opacity: ${props => props.opacity ?? 1};
    width: 80%;`;