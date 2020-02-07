import React, { Component } from "react";
import { Link } from "react-router-native";
import { Text } from "react-native";

export default class PictureListing extends Component {
    render() {
        return [
            <Link to="/posts">
                <Text style={{ color: "red", fontSize: 16 }}>Post</Text>
            </Link>,
            <Link to="/pictures">
                <Text style={{ color: "red", fontSize: 16 }}>Pictures</Text>
            </Link>
        ];
    }
}
