import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler' 

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;

    justify-content: center;
    align-items: center;

    background: #F25022;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    color: #312e38;
    font-size: 18px;
`;