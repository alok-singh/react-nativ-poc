import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from "react-native";

import CNRichTextEditor, {
    getInitialObject,
    getDefaultStyles
} from "react-native-cn-richtext-editor";
import PageWrapper from "../components/pageWrapper";
import PageTitle from "../components/pageTitle";
import CustomLink from "../components/link";

const defaultStyles = getDefaultStyles();

export default class RichNotepad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTag: "body",
            selectedStyles: [],
            value: [getInitialObject()]
        };
        this.editor = null;
    }

    onValueChanged = value => {
        this.setState({
            value: value
        });
    };

    componentDidMount() {
        // console.log(defaultStyles);
    }

    render() {
        return (
            <PageWrapper style={{ backgroundColor: "#fff" }}>
                <PageTitle
                    text="Notes"
                    style={{ marginTop: 10, color: "#0AF" }}
                />
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={0}
                    style={{
                        flex: 1
                    }}
                >
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.main}>
                            <CNRichTextEditor
                                ref={input => (this.editor = input)}
                                onSelectedTagChanged={this.onSelectedTagChanged}
                                onSelectedStyleChanged={
                                    this.onSelectedStyleChanged
                                }
                                value={this.state.value}
                                style={{ backgroundColor: "#fff", flex: 1 }}
                                styleList={defaultStyles}
                                onValueChanged={this.onValueChanged}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <CustomLink text="Home" url="/" />
            </PageWrapper>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    }
});

/* <PageWrapper>
    <PageTitle text="Notes" style={{marginTop: 10}} />
    
</PageWrapper> */
