import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Button,
  Dimensions,
  StyleSheet
} from 'react-native';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      path: './image/gomi_mark01_moeru.png'
    }
  }
  displayGarbege(i) {
    switch(i){
      case 0:
        const path = './image/gomi_mark01_moeru.png'
        break;
      case 1:
        const path = './image/gomi_mark01_petbottle.png'
        break;
      default:
        const path = './image/gomi_mark01_prastic.png'
        break;
    }
    this.setState({path : path})
  }
  render() {
    const { width, height, scale } = Dimensions.get('window')
	  return (
      <View style={styles.container}>
        <Button onPress={() => this.displayGarbege(0)} title="燃えるゴミ"/>
        <Button onPress={() => this.displayGarbege(1)} title="ペットボトル"/>
        <Button onPress={() => this.displayGarbege(2)} title="プラスチック"/>
        <Image style={styles.image} source={require(this.state.path)} />
      </View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: 100,
    height: 100
  }
})

AppRegistry.registerComponent('AwesomeProject', () => App);
