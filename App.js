import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Interruptor from './components/Interruptor';
import AlterarEmoji from './components/AlterarEmoji';
import NomeUsuario from './components/NomeUsuario';
import MostrarSenha from './components/MostrarSenha';
import ContadorCurtidas from './components/ContadorCurtidas';
export default function App() {
  return (
    <View style={styles.container}>
      <Interruptor/>
      <AlterarEmoji/>
      <NomeUsuario/>
      <MostrarSenha/>
      <ContadorCurtidas/>
      <Text>Atividades para Átila</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
