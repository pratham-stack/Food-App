import React, { useState } from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  Title :{
    fontSize: 30,
    color: '#128',
  },
  price: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginLeft:5,
  },
  imageStyle: {
    height: 20,
    width: 20,
  },
  counter: {
    fontSize:20,
    color: '#000',
    borderWidth: 1,
    borderColor: '#DDD',
    padding:10
  },
  counterBox: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding:10
  }
});

const YourApp = ({navigation,route}) => {
  const [count, setCount] = useState(0);
  const add = () => setCount(prevCount => prevCount + 1);
  const sub = () => {if(count > 0){setCount(prevCount => prevCount - 1)}};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
      <Image style={{resizeMode: "contain",height: '50%',width: '70%'}} source= {route.params.image}/>
      <Text style ={styles.Title}>{route.params.title}</Text>
      <Text style ={styles.price}>{route.params.price}</Text>
      <View style={styles.countContainer}>
        <Text>How Many?</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.counterBox} onPress={add}><Image style={styles.imageStyle} source= {require('../components/plus.png')}/></TouchableOpacity>
          <Text style={styles.counter}>{count}</Text>
          <TouchableOpacity style={styles.counterBox} onPress={sub}><Image style={styles.imageStyle} source= {require('../components/minus.png')}/></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default YourApp;