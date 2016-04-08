'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet,View,Text } = React;


var NavigationBar = require('./NavigationBar');
var Timeline = require('./Timeline');

var MainPage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        if(NavigationBar.state.menu==1) {
        } else {
        <View style={styles.body}>
         <Text style={styles.welcome}>
           Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
             To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
             Shake or press menu button for dev menu
          </Text>
         </View>
         }
      </View>
    );
  }
});




const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body: {
    alignSelf: 'flex-end'
  },
});

module.exports = MainPage;
