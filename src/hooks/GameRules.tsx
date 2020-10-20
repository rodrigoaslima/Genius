
import React, { createContext, useCallback, useState, useContext} from 'react'
import { Alert } from 'react-native'

import {playSound} from '../utils/Sounds'

interface GameRulesContextData{
    startGame(): void
    matchSequence(id: number): void
}

interface GameSequence{
    id: number
}


const GameRulesContext = createContext<GameRulesContextData>({} as GameRulesContextData)

const GameRulesProvider: React.FC = ({children}) => {
    
  const [sequence, setSequence] = useState<(GameSequence[])>([])

  console.log('Sequencia no Inicio: ', sequence)

  const random = (min: number, max:number)=>{
    return({'id':(min + Math.floor(Math.random() * (max + 1 - min)))});
  }

 
  //Inicia o jogo
  const startGame = useCallback(()=>{
    if(sequence.length === 0 ){
      const pad =  random(1,4)
      playSound(pad.id)
      setSequence((state)=>[...sequence, pad])
    }
  },[])

  //verifica se a sequencia esta correta
  var index = 0
  const matchSequence = useCallback((pad_id)=>{
    
    try {
      if(sequence[index].id === pad_id){
        index++
        sequence[index].id === undefined ? null : null
      } else {
        console.log('Errou!')
        Alert.alert(
          "Game Over!", 
          "Aperte para tentar de novo.",
          [
            {
              text: 'Tentar novamente',
              onPress: () => startGame()
            }
          ]
        )
      }
    } catch (error) {
      index = 0;
      nextLevel()
    } 
  },[sequence])

    const nextLevel = useCallback(()=>{
      var nextSequence = []
      for(var i = 0; i < sequence.length; i++){
        nextSequence.push(sequence[i].id)
      }
      const nextPad = random(1,4)
      nextSequence.push(nextPad.id)
      setSequence((state)=> [...sequence, nextPad])
      playSoundSequence(nextSequence)
    },[sequence])


    const playSoundSequence = useCallback((nextSequence)=>{
      var i = 0
      const interval = setInterval(()=>{
        playSound(nextSequence[i])
        i++
        if(i >= nextSequence.length)
        clearInterval(interval)
        setTimeout(()=>{}, 1000)
      },1000)

    },[])

    return(
        <GameRulesContext.Provider value={{startGame,  matchSequence}}>
            {children}
        </GameRulesContext.Provider>

    )
}

function useGameRules(): GameRulesContextData{
    const context = useContext(GameRulesContext)
    if(!context){
        throw new Error('useGameRules must be used within a GamRulesProvider')
    }
    return context
}

export {useGameRules, GameRulesProvider} 