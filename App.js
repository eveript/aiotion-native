import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import useColorScheme from './hooks/useColorScheme'

const App = () => {
    const colorScheme = useColorScheme()

    console.log(colorScheme)// default: light

    return (
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    )
}

export default App
