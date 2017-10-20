import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Login from './src/components/modules/Login/Login';
import { StackNavigator } from 'react-navigation';
import FirstScreen from './src/components/screens/FirstScreen';
import SecondScreen from './src/components/screens/SecondScreen';

const GlobalTalk = StackNavigator({
    Login: {screen: Login},
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen},
});

export default GlobalTalk;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('GlobalTalk', () => GlobalTalk);
