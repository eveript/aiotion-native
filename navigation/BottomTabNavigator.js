import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { Layout, TopNavigation, Divider, useTheme } from '@ui-kitten/components'

const BottomTab = createBottomTabNavigator()
const TabOneStack = createStackNavigator()
const TabTwoStack = createStackNavigator()

const StackHeaderTitle = (props) => {
    console.log(props)
    return (
        <>
            <TopNavigation
                alignment="center"
                title="Eva Application"
                subtitle="Subtitle"
                style={{
                    width: '100%',
                }}
                // accessoryLeft={renderBackAction}
                // accessoryRight={renderRightActions}
            />
            <Divider />
        </>
    )
}

const getStackScreenOption = theme => ({
        headerTitle: StackHeaderTitle,
        headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
        },
    }
)
const TabOneNavigator = () => {
    const theme = useTheme()
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} options={getStackScreenOption(theme)} />
        </TabOneStack.Navigator>
    )
}
const TabTwoNavigator = () => {
    const theme = useTheme()
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={getStackScreenOption(theme)}/>
        </TabTwoStack.Navigator>
    )
}
const TabBarIcon = (props) => <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />

const BottomTabNavigator = () => {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator initialRouteName="TabOne" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator
