/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, View, Text } = React;

var MainPage = require('./mainpage');
var MemoStory = MainPage;

AppRegistry.registerComponent('MemoStory', () => MemoStory);
module.exports = MemoStory;
