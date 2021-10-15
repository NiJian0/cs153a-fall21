import React, { useState } from "react";
import {View,Text,TextInput, Button, StyleSheet} from 'react-native';
import {useValue} from './ValueContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Check = ({ route }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


   React.useEffect(() => {
     console.log(route.params)
     getData()
    if (route.params?.count) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.count]);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@CPA2', jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@CPA2')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setName(data.name)
            setEmail(data.email)
          } else {
            setName('')
            setEmail('')
          }
        } catch(e) {
          console.dir(e)
        }
  }

  const clearAll = async () => {
      try {
        console.log('in clearData')

        await AsyncStorage.clear()

        window.localStorage.setItem("T-shirt",0)
        window.localStorage.setItem("Coat",0)
        window.localStorage.setItem("Pants",0)
        window.localStorage.setItem("Skirt",0)

      } catch(e) {
        console.log("error in clearData ")
        console.dir(e)
        // clear error
      }
  }


 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={text =>{setName(text)}}
         />
        <TextInput style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={text =>{setEmail(text)}}
         />
        <Text style={styles.paragraph1}>
          You bought {route.params?.count1} T-shirt(s), {route.params?.count2} Coat(s), {route.params?.count3} Pant(s) and {route.params?.count4} skirt(s)!
        </Text>
          <Text style={{fontSize:48, margin: 10 }}>Total: ${route.params?.count1*30+route.params?.count2*100+route.params?.count3*50+route.params?.count4*60}</Text>
          <Button
            title="CHECK"
            color="pink"
            onPress={()=> storeData({name,email})}
          />
          <Button
            title="CLEARALL"
            color="lightblue"
            onPress={()=> clearAll()}
          />
      <Text>Check out Screen </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    paragraph1: {
    margin: 20,
    fontSize: 28,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    input:{
    color: 'black',
    height: 40,
    fontSize:18,
    backgroundColor: 'yellow',
  },


});
export default Check