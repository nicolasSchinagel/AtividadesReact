import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
export default function Interruptor(){
    const [state, setState] = useState(false);
    function verificador(){
        if(state == false){
            setState(true);
        }
        else if(state == true){
            setState(false);
        }
    }
    return(
        <View>
            <View style={{
            width: 150,
            height: 150,
            backgroundColor: state ? 'yellow' : 'transparent',
            borderWidth: 2,
            borderColor: state ? 'yellow' : 'gray',
            }}>

            </View>
            <Button onPress={verificador} title='Brilhar'></Button>
        </View>
    )
}