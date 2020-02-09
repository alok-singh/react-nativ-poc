import React, { Component } from "react";
import { Text, Image } from "react-native";

export default class Post extends Component {
    render() {
        return (
            <Text style={{ ...this.props.style }}>
                <Text style={{color: "white", fontWeight: '500' }}>{this.props.title}{'\n'}</Text>
                <Text style={{color: '#888888' }}>{this.props.body.replace(/\n/g, '')}</Text>
            </Text>
        );
    }
}
