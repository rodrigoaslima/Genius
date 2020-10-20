import React, { useEffect } from 'react';
import { TouchableOpacity } from "react-native";

import Pad from '../../components/Pad'

import { useGameRules } from '../../hooks/GameRules'
import { playSound } from '../../utils/Sounds'

import { Container } from './styles';

interface PadData{
  color: string
  id: number
}

const GameScreen: React.FC = () => {
  
  const {startGame, matchSequence} = useGameRules()

  useEffect(()=>{
    startGame()
  },[])

  const onSubmit = ({color, id} : PadData)=>{
    playSound(id)
    matchSequence(id)
  }
    
 
  return(
      <Container>
        <TouchableOpacity  onPress={()=>onSubmit({color: 'red', id: 1})}>
          <Pad color='red'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>onSubmit({color: 'green', id: 2})}>
          <Pad color='green'/>
        </TouchableOpacity>
          
        <TouchableOpacity onPress={()=>onSubmit({color: 'blue', id: 3})}>
          <Pad color='blue'/>
        </TouchableOpacity>
          
        <TouchableOpacity onPress={()=>onSubmit({color: 'yellow', id: 4})}>
          <Pad color='yellow'/>
        </TouchableOpacity>
          
      </Container>
  )
}

export default GameScreen;