import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {DATA} from './Data'
import Row from './components/Row';
import  Constants  from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={({item})=>(
        <Row person={item}></Row>)}>
      </FlatList>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  );
}

//const renderItem=({item})=>(
  //<Text>{item.lastname}</Text>)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 20,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
});
