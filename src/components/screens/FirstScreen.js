import React from 'react';
import {Text, View, Button} from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'First screen',
        headerLeft: null
    };
    render(){
        let {navigate} = this.props.navigation;

        return(
            <View>
                <Text>This is screen 1</Text>
                <Button
                    onPress={
                        () => navigate("Second", {name: 'teste', email: 'qqqqqq'})
                    }
                    title = "go to Screen2"
                />
            </View>
        );
    }

}