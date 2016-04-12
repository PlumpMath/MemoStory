'use strict';
import Dimensions from 'Dimensions';

var React = require('react-native');
var { 
    AppRegistry,
    StyleSheet,
    View,
    Text, 
    TouchableHighlight,
} = React;

var width = Dimensions.get("window").width;

var SeparatedView = require('./SeparatedView');


var MainPage = React.createClass({
    getInitialState: function() {
        return { menu: 1, active: [true, false, false, false, false] };
    },
    changeState: function(_menu) {
        var arr = this.state.active;
        arr[this.state.menu-1]=false;
        arr[_menu-1]=true;
        return this.setState({menu: _menu, active: arr});
    },
    getColor: function(_menu) {
        return {backgroundColor: (this.state.active[_menu-1]==true ? '#60D560' : '#80EA80')};
    },
    render: function() {
        return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text>MemoStory</Text>
            <View style={[styles.navMenu, this.getColor(5)]}>
                <TouchableHighlight onPress={() => this.changeState(5)}>
                    <Text style={styles.text}>New</Text>
                </TouchableHighlight>
            </View>
          </View>
          <View style={styles.searchBar}>
            <View style={[styles.navMenu, this.getColor(1)]}>
                <TouchableHighlight onPress={() => this.changeState(1)}>
                    <Text style={styles.text}>1</Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.navMenu, this.getColor(2)]}>
                <TouchableHighlight onPress={() => this.changeState(2)}>
                    <Text style={styles.text}>2</Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.navMenu, this.getColor(3)]}>
                <TouchableHighlight onPress={() => this.changeState(3)}>
                    <Text style={styles.text}>3</Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.navMenu, this.getColor(4)]}>
                <TouchableHighlight onPress={() => this.changeState(4)}>
                    <Text style={styles.text}>4</Text>
                </TouchableHighlight>
            </View>
          </View>
          <View>
            <SeparatedView routing={this.state.menu}/>
          </View>
        </View>
        );
    }
});


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    alignSelf: 'flex-end'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 4,
    borderColor: '#80E080',
    height: 40,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    backgroundColor: '#78EA80',
    borderColor: '#80E080',
    height: 40,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    textAlign: 'center',
    width: width/4,
    height: 40,
    alignSelf: 'stretch'
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

module.exports = MainPage;
