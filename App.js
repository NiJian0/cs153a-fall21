import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './components/Counter';
import Check from './components/Check';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Welcome to shop at my clothing store!
        </Text>
      </View>
      <View style={{flex:10, flexDirection:'row',}}>
        <View style={styles.vertical}>
          <Image style={{width:300,height:230}}
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcYaXw39D7omk7s905sjjg2FFIUFSCJo3dg&usqp=CAU'}}/>
            <Button
            title="T-shirt"
            onPress={() => navigation.navigate('Details')}
            />
        </View>

        <View style={styles.vertical}>
          <Image style={{width:300,height:230}}
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk7iRnJoS1xIo4GAF9zmRogMjvciqzXe3-A&usqp=CAU'}}/>
            <Button
            title="coat"
            onPress={() => navigation.navigate('Details')}
            />
        </View>
      </View>

      <View style={{flex:10, flexDirection:'row',}}>
          <View style={styles.vertical}>
          <Image style={{width:300,height:230,}}
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKywCS_KHieS4ggdIFHGWTmeMheXo_nlmQQA&usqp=CAU'}}/>
            <Button
            title="pants"
            onPress={() => navigation.navigate('Details')}
            />
        </View>

          <View style={styles.vertical}>
           <Image style={{width:300,height:230}}
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JfKJ0ZvggJUsIpvoS5G4xMH6ElAEd-V3hQ&usqp=CAU'}}/>
            <Button
            title="skirt"
            onPress={() => navigation.navigate('Details')}
            />
          </View>
      </View>

    </View>
  );
}
  var state = { message: "22" };
  var callbackFunction = (childData) => {
        this.setState({message: childData});
  };
function DetailsScreen({ navigation }) {
  const [count, setCount] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Counter start={0} name="T-shirt" price={30} />
      <Counter start={0} name="Coat" price={100} />
      <Counter start={0} name="Pants" price={50} />
      <Counter start={0} name="Skirt" price={60} />

      <Button
        title="Go to check"
        onPress={() => navigation.navigate({
            name: 'Check',

            params: { count1:  parseInt(window.localStorage.getItem("T-shirt")), count2: parseInt(window.localStorage.getItem("Coat")), count3: parseInt(window.localStorage.getItem("Pants")), count4: parseInt(window.localStorage.getItem("Skirt"))},
            merge: true,
          })}
      />

      <Text>Cart Screen</Text>
    </View>
  );
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSzs7UtYhRqJPoPLjpQXXuLR4IU5NuKt1Mg&usqp=CAU')}
    />
  );
}



const MyStack = () => {
  window.localStorage.setItem("T-shirt",0);
  window.localStorage.setItem("Coat",0);
  window.localStorage.setItem("Pants",0);
  window.localStorage.setItem("Skirt",0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title:'Add Items' }}/>
        <Stack.Screen name="Check" component={Check} options={{ title: 'Check out' }}          options={({ navigation, route }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,})}
 />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    paragraph1: {
    margin: 20,
    fontSize: 28,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'stretch',
    backgroundColor:'',
    margin: 5
  },

});

export default MyStack
