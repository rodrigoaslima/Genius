import React from 'react';
import { View } from 'react-native'

import { Container } from './styles';

interface PadProps extends View {
    color: 'red' | 'green' | 'blue' | 'yellow',
}

const Pad: React.FC<PadProps> = ({color, ...rest }) => {
  return (
    <Container color={color}  {...rest}/>
  );
}

export default Pad;