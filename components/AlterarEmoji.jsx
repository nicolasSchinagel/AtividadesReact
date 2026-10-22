import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function AlterarEmoji(){
    const [emoji, alterarEmoji] = useState(false);
    function transformar(){
        if(emoji == false){
            alterarEmoji(true);
        }
        else if(emoji == true){
            alterarEmoji(false);
        }
    }
    return(
        <View>
            <Image source={emoji ? require('../assets/Emoji2.png') : require('../assets/Emoji1.png')} style={{ width: 150, height: 150 }} resizeMode="contain" />
            <Button onPress={transformar} title='Trocar'></Button>
        </View>
    )
}