import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default class PageWrapper extends Component {
    render() {
        return (
            <DismissKeyboard>
                <View style={{...styles.wrapper, ...this.props.style}}>
                    <View style={styles.container}>
                        {this.props.children}
                    </View>
                </View>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 30,
        marginBottom: 30,
        flex: 1,
    },
    wrapper: {
        backgroundColor: "#000",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
});
