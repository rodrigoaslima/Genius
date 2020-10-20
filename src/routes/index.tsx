import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../Pages/Start';
import GameScreen from '../Pages/GameScreen';

const Game = createStackNavigator();

const GameRoutes: React.FC = () => (
    <Game.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor:'#312e38'}
        }}    
    >
        <Game.Screen name='Start' component={Start}/>
        <Game.Screen name='GameScreen' component={GameScreen}/>
    </Game.Navigator>
)

export default GameRoutes;