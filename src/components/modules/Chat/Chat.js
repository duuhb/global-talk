import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class Chat extends React.Component {
    static navigationOptions = {
        title: 'Chat',
    };
    render(){
        let {params} = this.props.navigation.state;
        return(
            <View>
                <Text>Esta é a tela de chat do app</Text>
            </View>
        );
    }
}