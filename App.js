import React, { Component } from "react";
import { NativeRouter, Route } from "react-router-native";
import PostListing from "./pages/postListing";
import PictureListing from "./pages/pictureListing";
import NotepadComponent from "./pages/notepadComponent";
import RichNotepad from "./pages/richNotepad";
import Home from "./pages/home";
import FileViewSystem from './pages/fileViewSystem';

export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={PostListing} />
                <Route exact path="/pictures" component={PictureListing} />
                <Route exact path="/file-system" component={FileViewSystem} />
                <Route exact path="/notes" component={NotepadComponent} />
                <Route exact path="/rich-notepad" component={RichNotepad} />
            </NativeRouter>
        );
    }
}