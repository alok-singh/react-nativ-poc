import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import PageWrapper from "../components/pageWrapper";
import CustomLink from "../components/link";

const storeData = async () => {
    try {
        await AsyncStorage.setItem("@storage_Key", "stored value");
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem("@storage_Key");
        if (value !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
};

export default class App extends React.Component {
    render() {
        return (
            <PageWrapper>
                {/* <FileSystemView /> */}
                <CustomLink text="Home" url="/" />
            </PageWrapper>
        );
    }
}
