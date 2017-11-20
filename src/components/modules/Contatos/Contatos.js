import React from 'react';
import {Text, View, Button} from 'react-native';

export default class Contatos extends React.Component {
    static navigationOptions = {
        title: 'Contatos',
        headerLeft: null
    };
    render(){
        let {navigate} = this.props.navigation;

        return(
            <View>
                <Text>Esta é a tela de contatos</Text>
                <Button
                    onPress={
                        () => navigate("Chat")
                    }
                    title = "Ir para a tela de chat"
                />
            </View>
        );
    }

}