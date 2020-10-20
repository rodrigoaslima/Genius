import React from 'react';
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'

import { Container } from './styles';

const Start: React.FC = () => {
  const navigation = useNavigation()

  return(
      <Container>
        <Button onPress={()=> navigation.navigate('GameScreen')}>Começar</Button>
      </Container>
  );
}

export default Start;