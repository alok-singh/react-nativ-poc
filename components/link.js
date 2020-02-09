import React, { Component } from "react";
import { Text } from "react-native";
import { Link } from "react-router-native";

export default class CustomLink extends Component {
    render() {
        return (
            <Link to={`${this.props.url}`}>
                <Text
                    style={{
                        padding: 10,
                        color: "white",
                        backgroundColor: "#4c8bf5",
                        textAlign: "center",
                    }}
                >
                    {this.props.text}
                </Text>
            </Link>
        );
    }
}