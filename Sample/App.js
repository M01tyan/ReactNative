import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  MaskedViewIOS
} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      path: [],
      date: '',
      week: '',
      color: ''
    }
  }

  componentWillMount() {
    const date = new Date().getDate()
    const num = new Date().getDay()
    const week = ["日", "月", "火", "水", "木", "金", "土"]
    let path = [], color, weeknum
    weeknum = Math.floor((date-num+12)/7)
    switch(week[num]) {
      case '日':
        path.push('')
        break;
      case '月':
        if(weeknum === 1 || weeknum === 3 || weeknum === 5){
          path.push('https://1.bp.blogspot.com/-F_hmSswVCz8/VtofhY4f40I/AAAAAAAA4YE/fg09VtK3tss/s800/gomi_mark05_petbottle.png')
          path.push('https://2.bp.blogspot.com/-jDPGGg_w214/VtofhCIc0dI/AAAAAAAA4YA/TN4N490_QMM/s800/gomi_mark04_can.png')
          path.push('https://3.bp.blogspot.com/-wMset6stW4U/Vtofh0BpVmI/AAAAAAAA4YI/C2geoLnn9qY/s800/gomi_mark06_plastic.png')
          path.push('https://2.bp.blogspot.com/-JuG4yaiLI9o/VtofkMlVTUI/AAAAAAAA4Yc/dxFpn5LTdyg/s800/gomi_mark11_kami.png')
          path.push('https://4.bp.blogspot.com/-M_FMq1RWBtM/VtofgVUhJiI/AAAAAAAA4X4/e2sddJ_poXU/s800/gomi_mark02_moenai.png')
        } else {
          path.push('https://1.bp.blogspot.com/-8nJCEO1bCX0/VtofhHaXeOI/AAAAAAAA4X8/1V6lVN524dM/s800/gomi_mark03_bin.png')
          path.push('https://3.bp.blogspot.com/-wMset6stW4U/Vtofh0BpVmI/AAAAAAAA4YI/C2geoLnn9qY/s800/gomi_mark06_plastic.png')
          path.push('https://2.bp.blogspot.com/-JuG4yaiLI9o/VtofkMlVTUI/AAAAAAAA4Yc/dxFpn5LTdyg/s800/gomi_mark11_kami.png')
        }
        color = 'brown'
        break;
      case '火':
        path.push('https://2.bp.blogspot.com/-XIrri2zXs6o/VVGVKtxN_PI/AAAAAAAAtic/9mweImyX5vo/s800/mark_gomi_moyaseru.png')
        color = 'red'
        break;
      case '水':
        path.push('')
        color = 'blue'
        break;
      case '木':
        path.push('')
        color = 'green'
        break;
      case '金':
        path.push('https://2.bp.blogspot.com/-XIrri2zXs6o/VVGVKtxN_PI/AAAAAAAAtic/9mweImyX5vo/s800/mark_gomi_moyaseru.png')
        color = 'yellow'
        break;
      case '土':
        path.push('')
        break;
    }
    this.setState({path: path, date: date, week: week[num], color: color})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.state.date}<Text style={{fontSize: 30}}>日</Text></Text>
        <Text style={{fontSize: 100, color: this.state.color}}>{this.state.week}<Text style={{fontSize: 50, color: 'black'}}>曜日</Text></Text>
        <View style={styles.images}>
          {this.state.path.map((path) => {
            if(path === ''){
              return <Text key={path} style={styles.notImage}>本日のゴミ出しはありません</Text>
            } else {
              return <Image key={path} style={styles.image} source={{uri: path}} />
            }
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  date: {
    fontSize: 100,
    marginTop: 80
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 110,
    marginTop: 30
  },
  notImage: {
    fontSize: 30,
    marginTop: 30
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
