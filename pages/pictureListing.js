import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import PicturePost from "../components/picturePost";
import CustomLink from "../components/link";
import PageWrapper from "../components/pageWrapper";
import PageTitle from "../components/pageTitle";

export default class PictureListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    async componentDidMount() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos/"
        );
        const data = await response.json();
        this.setState(previousState => {
            return Object.assign({}, previousState, {
                photos: data
            });
        });
    }
    render() {
        return (
            <PageWrapper>
                <ScrollView>
                    <PageTitle text="Pictures" />
                    {this.state.photos.slice(0, 50).map((post, index) => (
                        <PicturePost
                            key={`picture-${index}`}
                            title={post.title}
                            imageUrl={post.thumbnailUrl}
                            style={styles.post}
                        />
                    ))}
                    <CustomLink text="Home" url="/" />
                </ScrollView>
            </PageWrapper>
        );
    }
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 10
    }
});
