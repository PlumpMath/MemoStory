/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, View, Text } = React;

var MainPage = require('./MainPage');
var LoginPage = require('./LoginPage');

var MemoStory = React.createClass({
    getInitialState: function() {
        return {session_login: true};
    },
    render: function() {
        if(this.state.session_login)
            return (<MainPage />);
        else
            return (<LoginPage />);
    }
});

AppRegistry.registerComponent('MemoStory', () => MemoStory);
module.exports = MemoStory;
