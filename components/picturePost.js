import React, { Component } from "react";
import { Text, Image, View } from "react-native";

export default class PicturePost extends Component {
    render() {
        return <View style={{flexDirection: 'row', flex: 1, marginBottom: 16, ...this.props.style}}>
            <Image source={{uri: this.props.imageUrl}} style={{height: 50, width: 50}} />
            <Text style={{color: '#888888', marginLeft: 8, flex: 1}}>{this.props.title}</Text>
        </View>
    }
}
