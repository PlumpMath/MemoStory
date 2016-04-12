'use strict'
var React = require('react-native');
var { 
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Picker,
    Text,
    TextInput,
    TouchableHighlight,
} = React;

var PostEvent = React.createClass({
    getInitialState: function() {
        return { 
            category: 1,
            title: '',
            description: '',
            start_date_year: '1900',
            start_date_month: '00',
            start_date_day: '00',
            end_date_year: '1900',
            end_date_month: '00',
            end_date_day: '00'
        };
    },
    post_data: function(data) {
        var url='http://memo-story.herokuapp.com/events';
        var json_data = {
            category:    data.category,
            title:       data.title,
            description: data.description,
            start_date:  data.start_date_year + '-' + data.start_date_month + '-' + data.start_date_day,
            end_date:    data.end_date_year + '-' + data.end_date_month + '-' + data.end_date_day
        }
        var header= { 
            method:   'POST',
            dataType: 'json',
            headers: {
            'Content-Type': 'application/json', 
            'Accept':       'application/json' 
            },
            body: JSON.stringify(json_data)
        };

        fetch(url, header).then((response) => response.json)
        .then((responseData) => Alert.alert('Notice', JSON.stringify(responseData)))
        .catch((error) => console.warn(error)).done();
    },

    render: function() {
        return (<View>
            <Picker selectedValue={this.state.category}
                    onValueChange={(cat) => this.setState({category: cat})} >
                <Picker.Item label="Birth" value={1}/>
                <Picker.Item label="Death" value={2}/>
                <Picker.Item label="Movement" value={3}/>
                <Picker.Item label="Invent" value={4}/>
                <Picker.Item label="War" value={5}/>
                <Picker.Item label="Change of power" value={6}/>
            </Picker>
            <Text>Input Title</Text>
            <TextInput                      onChangeText={(text) => this.setState({title:            text})} />

            <Text>Input Description</Text>
            <TextInput                      onChangeText={(text) => this.setState({description:      text})} />

            <View style={styles.dateWrapper}>
                    <Text>Input Start_Date</Text>
                    <TextInput style={styles.year } onChangeText={(text) => this.setState({start_date_year:  text})} />
                    <TextInput style={styles.month} onChangeText={(text) => this.setState({start_date_month: text})} />
                    <TextInput style={styles.day  } onChangeText={(text) => this.setState({start_date_day:   text})} />
            </View>

            <View style={styles.dateWrapper}>
                    <Text>Input End_Date</Text>
                    <TextInput style={styles.year } onChangeText={(text) => this.setState({end_date_year:    text})} />
                    <TextInput style={styles.month} onChangeText={(text) => this.setState({end_date_month:   text})} />
                    <TextInput style={styles.day  } onChangeText={(text) => this.setState({end_date_day:     text})} />
            </View>

            <View>
                <TouchableHighlight onPress={() => this.post_data(this.state) }>
                    <Text style={styles.button}>Submit </Text>
                </TouchableHighlight>
            </View>
    </View>);
    }
});

const styles = StyleSheet.create({
    dateWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    year: {
        width: 60,
        flexDirection: 'column'
    },
    month: {
        width: 40,
        flexDirection: 'column'
    },
    day: {
        width: 40,
        flexDirection: 'column'
    },

    button: {
        width: 40,
        height: 20
    }
})

module.exports = PostEvent;
