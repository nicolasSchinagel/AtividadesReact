import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';
export default function ContadorCurtidas(){
    const[curtida, setCurtida] = useState(0);
    function diminuir(){
        if(curtida > 0){
            setCurtida(curtida - 1);
        }
    }
    function aumentar(){
        setCurtida(curtida + 1);
    }
    return(
        <View>
            <Image source={require('../assets/Curtir.png') } style={{ width: 60, height: 60 }} resizeMode="contain" />
            <Text>Numero de curtidas: {curtida}</Text>
            <Button onPress={diminuir} title='Diminuir Curtida'></Button>
            <Button onPress={aumentar} title='Adicionar Curtida'></Button>
        </View>
    )
}