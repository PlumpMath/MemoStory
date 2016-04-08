'use strict';
import Dimensions from 'Dimensions';
var React = require('react-native');
var {
    ProgressBarAndroid,
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
} = React;

var width = Dimensions.get("window").width;
var NavigationBar = React.createClass({
    getInitialState: function() {
        return { menu: 1 };
    },
    render: function() {
        return (
          <View style={styles.searchBar}>
            <View style={styles.navMenu}><Text>d</Text></View>
            <View style={styles.navMenu}><Text>d</Text></View>
            <View style={styles.navMenu}><Text>d</Text></View>
            <View style={styles.navMenu}><Text>d</Text></View>
          </View>  
        );
    }
});

var styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 4,
    borderColor: '#80E080',
    height: 60,
    backgroundColor: '#86EA86'
  },

  navMenu: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    width: width/4,
    borderColor: '#80E080',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

module.exports = NavigationBar;
