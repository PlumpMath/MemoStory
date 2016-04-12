'use strict';
var React = require('react-native');

import Dimensions from 'Dimensions';
var height = Dimensions.get('window').height;

var {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert,
} = React;

var Timeline = React.createClass({
    getInitialState: function() {
        return {data: [], state: 0};
    },
    
    render_event: function(data) {

//                    <Text key={data.id*9999+4}>{data.start_date}</Text>
//                    <Text key={data.id*9999+5}>{data.end_date}</Text>  

        return (<View style={styles.events} key={data.id*9999}>
                    <Text key={data.id*9999+1}>{data.category}</Text>
                    <Text key={data.id*9999+2}>{data.title}</Text>
                    <Text key={data.id*9999+3}>{data.description}</Text>
        </View>);
    },

    iterated_render: function(many_data) {
        var rendered_events = [];
        for(var i in many_data)
            rendered_events.push(this.render_event(many_data[i]));

        return <View>{rendered_events}</View>;
    },
    
    fetch_data: function() {
        fetch('http://memo-story.herokuapp.com/events', {
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }}).then((response) => response.json() )
        .then((responseData) => { 
             this.setState({data: responseData}); 
        }).catch((error) => {
            console.warn(error);
        }).done();
    },
    render: function() {  
        this.fetch_data();
            
        return <ScrollView style={styles.wrapper}
                scrollEnabled={true}>{this.iterated_render(this.state.data)}</ScrollView>;
    }
});


const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'flex-end',   
        height: height-90,
        padding: 15,
        paddingBottom: 0,
        marginBottom: 30
    },
    events: {

    },
    circle_symbol: {
        
    },
    title: {
        fontWeight: 'bold'    
    },
    description: {

    }
});
module.exports = Timeline;
