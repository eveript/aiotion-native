import React from 'react'
import { StyleSheet } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components'

import Navigation from './navigation'

const App = () => {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaProvider>
            <AppearanceProvider>
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar style="auto" />
                </ApplicationProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    )
}

export default App
