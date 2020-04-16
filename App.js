import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, ListView } from 'react-native';
// import { Constants } from 'expo';
import Constants from 'expo-constants';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
      return fetch('http://localhost:4000/employee')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              isLoading: false,
              dataSource: responseData,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator />
                     </View>
            )
        }
        return (
            <FlatList style={styles.container}
            data={this.state.dataSource}
            renderItem={({ item }) => <Text style={styles.row}>{item.firstName}, {item.lastName}</Text>}
            keyExtractor={({ id }, index) => id}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    row: {
        padding: 12,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    }
})
