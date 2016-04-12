'use strict';
var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    Alert,
} = React;

var Timeline = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    
    render_event: function(data) {
        var render_arr = [];
        render_arr.push(<Text key={data.id*9999+1}>{data.category}</Text>);
        render_arr.push(<Text key={data.id*9999+2}>{data.title}</Text>);
        render_arr.push(<Text key={data.id*9999+3}>{data.description}</Text>);
        render_arr.push(<Text key={data.id*9999+4}>{data.start_date}</Text>);
        render_arr.push(<Text key={data.id*9999+5}>{data.end_date}</Text>);
        

        return (<View key={data.id*9999}>{render_arr}</View>);
    },

    iterated_render: function(many_data) {
        console.log(JSON.stringify(many_data));
        var rendered_events = [];
        for(var i in many_data)
            rendered_events.push(this.render_event(i));

//        Alert.alert('result', JSON.stringify(<View>{rendered_events}<View>));
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
          //  this.setState({data: responseData}); 
            var printed_arr = [];
            for(var i=0; i<responseData.length; i++) {
                printed_arr.push(responseData[i]);
            }

            this.setState({data: printed_arr})
        }).catch((error) => {
            console.warn(error);
        }).done();
    },
    render: function() {  
        this.fetch_data();
            
        return this.iterated_render(this.state.data);
  //        return <Text>asdasdas</Text>      
    }
});


const styles = StyleSheet.create({
    circle_symbol: {

    },
    title: {
        
    },
    description: {

    }
});
module.exports = Timeline;
