import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Component from './src/Component.jsx';
import data from './src/data.js'

const func = ({ item }) => {
  return <Component progLang={item.language} exp={item.exp} image={item.img} stl={styles}/>
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={func}></FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  imgContainer: {
    width: 100, 
    height: 100, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    resizeMode: 'contain',
  }
});
