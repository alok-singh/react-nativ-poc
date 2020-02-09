import React, { Component } from "react";
import { TextInput, View, ScrollView } from "react-native";
import CustomLink from "../components/link";
import PageTitle from "../components/pageTitle";
import PageWrapper from "../components/pageWrapper";

export default class NotepadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "sdsd"
        };
    }
    render() {
        return (
            <PageWrapper>
                <PageTitle text="Notepad" />
                <ScrollView>
                    <TextInput
                        style={{color: "white", whiteSpace: 'wrap', height: 200, borderWidth: 1, borderColor: "white"}}
                        placeholder="Type here"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                    <CustomLink text="Home" url="/" />
                </ScrollView>
            </PageWrapper>
        );
    }
}
