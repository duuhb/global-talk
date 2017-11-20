import React, { Component } from 'react';
import { StyleSheet, View, Image, Button, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import DropdownAlert from 'react-native-dropdownalert';

export default class Login extends Component{
    static navigationOptions = {
        header: null
    };
    state = {
        username: '',
        password: ''
    };
    async login(){
        // try {
            // let response = await fetch('https://wwwdesenv.unochapeco.edu.br/minhauno-bonetti', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         username: this.state.username,
            //         password: this.state.password
            //     })
            // });
            // if(response.status == 200){
            //     try{
            //         let responseJson = await response.json();
            //         if(responseJson.login == 'ok'){
                        return this.props
                            .navigation
                            .dispatch(NavigationActions.reset(
                                {
                                    index: 0,
                                    actions: [
                                        // NavigationActions.navigate({ routeName: 'First', params: {token: responseJson.token}})
                                        NavigationActions.navigate({ routeName: 'Contatos'})
                                    ]
                                }));
        //             }else{
        //                 this.dropdown.alertWithType('error', 'Dados inválidos', 'Usuário ou senha incorretos');
        //             }
        //         }catch (e){
        //             this.dropdown.alertWithType('error', 'Erro ao efetuar login', 'Por favor, tente novamente');
        //         }
        //     }
        //     return false;
        // } catch(error) {
        //     this.dropdown.alertWithType('error', 'Erro ao efetuar login', 'Por favor, tente novamente');
        // }
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior='padding'
                keyboardVerticalOffset={-500}
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <DropdownAlert ref={ref => this.dropdown = ref} />
                    <Image
                        style={styles.logo}
                        source={require('../../images/login.png')}
                    />
                    {/* <Text style={styles.title}>An app made for github using React Native</Text> */}
                </View>
                <View style={styles.formContainer}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <TextInput
                        placeholder="username or email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        blurOnSubmit={false}
                        keyboardType="email-address"
                        style={styles.input}
                        onChangeText={(value) => this.setState({username: value})}
                        value={this.state.username}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        blurOnSubmit={true}
                        onSubmitEditing={()  => this.login()}
                        onChangeText={(value) => this.setState({password: value})}
                        value={this.state.password}
                    />

                    <TouchableOpacity>
                        <Button
                            onPress={

                                () => {
                                    if(this.state.username == '')
                                    {
                                        this.dropdown.alertWithType('error', 'Dados inválidos', 'O username deve ser preenchido!');

                                        return;
                                    }

                                    if(this.state.password == '')
                                    {
                                        this.dropdown.alertWithType('error', 'Dados inválidos', 'A senha deve ser preenchida!');

                                        return;
                                    }

                                    this.login()
                                }
                            }
                            title={'LOGIN'}
                            color={'#2980b9'}
                        />
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3494db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height:  110
    },
    title:{
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
