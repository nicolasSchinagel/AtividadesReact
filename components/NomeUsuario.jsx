import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function NomeUsuario(){
    const [nome, setNome] = useState("");
    return(
        <View>
            <TextInput placeholder={"Digite o seu nome"} onChangeText={setNome} />
            <Text>{nome}</Text>
        </View>
    )
}