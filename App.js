import React from 'react'
import { StyleSheet } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components'

import Navigation from './navigation'
import useColorScheme from './hooks/useColorScheme'

const App = () => {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaProvider>
            <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                <Navigation colorScheme={colorScheme} />
                <StatusBar style="auto" />
            </ApplicationProvider>
        </SafeAreaProvider>
    )
}

export default App
