import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {BottomNavigation, BottomNavigationTab, Divider, TopNavigation, useTheme} from '@ui-kitten/components'

const BottomTab = createBottomTabNavigator()
const TabOneStack = createStackNavigator()
const TabTwoStack = createStackNavigator()

const StackHeaderTitle = (props) => {
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

const getStackScreenOption = (theme) => ({
    headerTitle: StackHeaderTitle,
    headerStyle: {
        backgroundColor: theme['background-basic-color-1'],
    },
})
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
            <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={getStackScreenOption(theme)} />
        </TabTwoStack.Navigator>
    )
}

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
        {/* react에서 Link에 해당 */}
        <BottomNavigationTab title="TabOne" />
        <BottomNavigationTab title="TabTwo" />
    </BottomNavigation>
)

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="TabOne" tabBar={(props) => <BottomTabBar {...props} />}>
            {/* react에서 Route에 해당 */}
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator
