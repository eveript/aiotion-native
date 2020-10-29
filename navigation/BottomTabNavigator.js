import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'

const BottomTab = createBottomTabNavigator()
const TabOneStack = createStackNavigator()
const TabTwoStack = createStackNavigator()

const TabOneNavigator = () => (
    <TabOneStack.Navigator>
        <TabOneStack.Screen
            name="TabOneScreen"
            component={TabOneScreen}
            options={{
                headerTitle: 'Tab One Title',
                // headerStyle: {
                //     backgroundColor: '#f4511e',
                // },
                // headerTintColor: '#fff',
            }}
        />
    </TabOneStack.Navigator>
)

const TabTwoNavigator = () => (
    <TabTwoStack.Navigator>
        <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={{ headerTitle: 'Tab Two Title' }} />
    </TabTwoStack.Navigator>
)

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
