import React from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

import Navigation from './navigation'
import {AppLoading} from "expo";

const cacheImages = (images) =>
    images.map((image) => {
        if (typeof image === 'string') {
            return Image.prefetch(image)
        } else {
            return Asset.fromModule(image).downloadAsync()
        }
    })

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font))

const App = () => {
    const colorScheme = useColorScheme()
    const [isReady, setIsReady] = useState(false)
    const loadAssets = () => {
        const images = cacheImages([
            "https://lh3.googleusercontent.com/ogw/ADGmqu8OM1cBYkzZ6Z4DVidC2d23yaGMRjrG-Ymn4K3g=s64-c-mo",
            require("./assets/splash.png")
        ])
        const fonts = cacheFonts([Ionicons.font])
        return Promise.all([...images, ...fonts])
    }
    const onFinish = () => setIsReady(true)
    return isReady ? (
        <SafeAreaProvider>
            <AppearanceProvider>
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar style="auto" />
                </ApplicationProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    ) : (<AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />)
}

export default App
