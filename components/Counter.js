
import React, { useState } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";


const Counter = ({start, name, price }) => {

// const Counter = (props) => {
//   const start = props.start
//   const name = props.name
  var setCountAdd = (v)=>{  
    setCount(v);
    window.localStorage.setItem(name, v);
    };

  var setCountMinus = (v)=>{  
    if(v>=0) setCount(v);
    window.localStorage.setItem(name, v);
    };



  const [count, setCount] = useState(start);



      return (
  <View style={styles.container}>
    <View>
    <Text style={styles.header}>
    The price for a {name} is ${price}</Text>
    </View>
    <View style={styles.horizontal}>
    <Button
      color='green' title='-'
      onPress= {() => setCountMinus(count-1)}
         //   onPress = {() =>setCount(count-1)         }

    />
       <Text style={{fontSize:32, margin:'18'}}> 
        Item = {count}
        
    </Text>

    <Button
          color='red' title='+'
          onPress = {() =>
               setCountAdd(count+1)          }
      />
      </View>




  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

      margin:"10px",
      padding:"10px",
    },

    header: {
      fontSize:24,
      color:'blue',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    horizontal: {
    //flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',

  },
  });

export default  Counter