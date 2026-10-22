import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function MostrarSenha(){
    const [mostra, setMostra] = useState(false);
    function mudar(){
        if(mostra == false){
            setMostra(true);
        } 
        else if(mostra == true){
            setMostra(false);
        }
    }
    return(
        <View>
            <TextInput placeholder={"Digite sua senha"} secureTextEntry={!mostra}  />
            <Button onPress={mudar} title={mostra ? 'Ocultar' : 'Mostrar'}></Button>
        </View>
    )
}