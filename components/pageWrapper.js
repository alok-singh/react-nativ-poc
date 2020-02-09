import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class PageWrapper extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 30,
        marginBottom: 30
    },
    wrapper: {
        backgroundColor: "#000",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
});
