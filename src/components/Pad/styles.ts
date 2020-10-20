import styled, { css } from "styled-components/native";

const colors = {
    red: css`
        background: #f22225;
        border-top-left-radius: 180px;
    `,
    green: css`
        background: #7FBA00;
        border-top-right-radius: 180px;
    `,
    blue: css`
        background: #00A4EF;
        border-bottom-left-radius: 180px;
    `,
    yellow: css`
        background: #FFB900;
        border-bottom-right-radius: 180px;
    `,
}


interface PadColorsProps{
    color: 'red' | 'green' | 'blue' | 'yellow'
}

export const Container = styled.View<PadColorsProps>`
    width: 120px;
    height: 120px;
    margin: 5px;

    ${(props) => colors[props.color]}
    

`;
