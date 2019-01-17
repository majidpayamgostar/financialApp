import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles._header}>
                <View style={styles.inHeader}>
                    <View>
                        <Image
                            source={require('../Assets/image/three-lines.png')}
                            
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/image/12.jpg')}
                            style={styles._image}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _header: {
        flex: 1,
        backgroundColor:'#4d4f5e'
    },
    inHeader:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    _image:{
        borderRadius:30,
        width:50,
        height:50
    }
});