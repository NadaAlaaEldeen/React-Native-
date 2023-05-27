import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("nada")
  console.warn("it's warn ")
  console.error("it's error for test")
  return (
      
      <SafeAreaView style={styles.container}>
       <View style={styles.container}>
        <Text onPress={()=>{alert("My first Mobile app")}} >Simulation for Gallery</Text>
        <Text style={{backgroundColor:'grey'}}>Made by  Nada</Text>
        </View>
        <ScrollView horizontal>
         <Image style={styles.img} source={require('./assets/images/1.jpeg')} ></Image>
         <Image style={styles.img} source={require('./assets/images/2.jpeg')} ></Image>
         <Image style={styles.img} source={require('./assets/images/3.jpeg')} ></Image>
         <Image style={styles.img} source={require('./assets/images/4.jpeg')} ></Image>
      </ScrollView>
        <StatusBar style="auto" />
       
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:200,
    width:200
  }
});
