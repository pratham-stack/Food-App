import * as React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';

function Header(){
    return (
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>hellll</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  }
});
export default Header;