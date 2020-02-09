import React, { Component } from "react";
import { Link } from "react-router-native";
import { Text, View, StyleSheet } from "react-native";
import PageTitle from "../components/pageTitle";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <PageTitle text="Home" />
                <Link to="/posts" style={styles.textWrapper}>
                    <Text style={styles.text}>Post</Text>
                </Link>
                <Link
                    to="/pictures"
                    style={{
                        ...styles.textWrapper,
                        marginTop: 16,
                        marginBottom: 16
                    }}
                >
                    <Text style={styles.text}>Pictures</Text>
                </Link>
                <Link
                    to="/notes"
                    style={{
                        ...styles.textWrapper,
                        marginBottom: 16
                    }}
                >
                    <Text style={styles.text}>Notepad</Text>
                </Link>
                <Link to="/rich-notepad" style={styles.textWrapper}>
                    <Text style={styles.text}>Rich Notepad</Text>
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderWidth: 2,
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontSize: 18,
        lineHeight: 24,
        textAlign: "center",
        padding: 8
    },
    textWrapper: {
        backgroundColor: "#4c8bf5",
        borderRadius: 5
    }
});
