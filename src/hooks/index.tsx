import React from 'react'

import { GameRulesProvider } from './GameRules'

const AppProvider: React.FC = ({ children }) =>{
    return(
        <GameRulesProvider>
            { children }   
        </GameRulesProvider>

    )
}

export default AppProvider