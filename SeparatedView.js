'use strict';
var React = require('react-native');
var {
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
} = React;


var Timeline = require('./Timeline');
var SearchPage = require('./SearchPage');
var PinnedEvents = require('./PinnedEvents');
var UserProfile = require('./UserProfile');

var SeparatedView = React.createClass({
    render: function() {
        if(this.props.routing==1) {
            return <Timeline />;
        } else if (this.props.routing==2) {
            return <PinnedEvents />;
        } else if (this.props.routing==3) {
            return <SearchPage />;
        } else {
            return <UserProfile />;
        }
    }
});

module.exports = SeparatedView;
