import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    image: require('../components/Food.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    image: require('../components/food.jpg'),
  },
  {
    id: '3',
    title: 'Third Item',
    image: require('../components/Food.png'),
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: require('../components/food.jpg'),
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: require('../components/Food.png'),
  },
  {
    id: '6',
    title: 'Sixth Item',
    image: require('../components/food.jpg'),
  },
  {
    id: '7',
    title: 'Seventh Item',
    image: require('../components/Food.png'),
  },
  {
    id: '8',
    title: 'Eigth Item',
    image: require('../components/food.jpg'),
  },
  {
    id: '9',
    title: 'Ninth Item',
    image: require('../components/Food.png'),
  },
  {
    id: '10',
    title: 'Tenth Item',
    image: require('../components/food.jpg'),
  },
  {
    id: '11',
    title: 'Eleventh Item',
    image: require('../components/Food.png'),
  },
  {
    id: '12',
    title: 'Twelfth Item',
    image: require('../components/food.jpg'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    color: '#128',
    marginLeft:5,
  },
  itemDesc: {
    marginLeft: 10
  }
});
const YourApp = ({navigation}) => {

  const Item = ({title,id,image }) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('Detail', {id : id, title: title, image: image, price: '$32.00'})}>
      <Image style={{resizeMode: "contain",height: 100,width: 100}} source= {image}/>
      <View style={styles.itemDesc}>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.price}>$32.00</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item image={item.image} id={item.id} title={item.title}  />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem ={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default YourApp;