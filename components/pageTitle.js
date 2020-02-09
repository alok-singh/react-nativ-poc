import React, { Component } from "react";
import { TextInput } from "react-native";

export default class PageTitle extends Component {
    render() {
        return (
            <TextInput
                style={{
                    ...this.props.style,
                    fontSize: 32,
                    marginBottom: 10,
                    color: "white"
                }}
            >
                {this.props.text}
            </TextInput>
        );
    }
}
