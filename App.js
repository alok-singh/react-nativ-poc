import React, { Component } from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import PostListing from "./pages/postListing";
import PictureListing from "./pages/pictureListing";
import Home from "./pages/home";

export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
					<Route exact path='/' component={Home} />
                	<Route exact path="/posts" component={PostListing} />
					<Route exact path="/pictures" component={PictureListing} />
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 30,
        marginBottom: 30
    }
});
