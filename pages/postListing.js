import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Post from "../components/posts";
import CustomLink from "../components/link";
import PageWrapper from "../components/pageWrapper";
import PageTitle from "../components/pageTitle";

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    async componentDidMount() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        this.setState(previousState => {
            return Object.assign({}, previousState, {
                posts: data
            });
        });
    }
    render() {
        return (
            <PageWrapper>
                <ScrollView>
                    <PageTitle text="Posts" />
                    {this.state.posts.slice(0, 50).map((post, index) => (
                        <Post
                            key={`post-${index}`}
                            title={post.title}
                            body={post.body}
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
