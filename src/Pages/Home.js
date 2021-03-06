import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView, Dimensions} from 'react-native';
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Body from "../Components/Body";


export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lastData: [],
            loading: false,
            lengthOfResults: null
        }
    }
    
    
    componentDidMount(): void {
        this.fetchData();
    }
    
    
    fetchData = () => {
        let lastData = this.state.lastData;
        fetch('https://randomuser.me/api/?results=4')
            .then(response => response.json())
            .then(data =>
                this.setState({lastData: [...lastData, ...data.results], loading: true}), () => {
                this.setState({lengthOfResults: data.results.length})
            })
    
.catch(error=>alert( 'Disconnected'))};


render()
{
    return (
        <View style={styles._home}>
            <Header profilePhoto={this.state.lastData}/>
            <ScrollView>
                
                <Slider lastData={this.state.lastData} loading={this.state.loading}
                        lengthOfResults={this.state.lengthOfResults}/>
                <Body lastData={this.state.lastData} loading={this.state.loading}/>
            </ScrollView>
        </View>
    );
}
}
const styles = StyleSheet.create({
    _home: {
        flex: 1,
    }
});