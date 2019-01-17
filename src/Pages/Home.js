import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Body from "../Components/Body";

export default class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            lastData:[],
            loading:false
        }
    }
    
    componentDidMount(): void {
        this.fetchData();
    }
    
    
    fetchData = () => {
        let lastData=this.state.lastData;
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data =>
                this.setState({lastData: [...lastData, ...data.results], loading: true})
            )
            .catch(error=> alert('Disconnected'))
    };
    
    
    
    render() {
        let [a,b,...lastData]=this.state.lastData;
        return (
            <View style={styles._home}>
                <Header/>
                <Slider lastData={this.state.lastData}/>
                <Body lastData={this.state.lastData}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _home: {
        flex: 1,
        backgroundColor:'wheat'
    }
});