import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Post from "../components/posts";
import { Link } from "react-router-native";

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
            <View>
                <ScrollView>
                    <Text style={{ fontSize: 32, marginBottom: 10 }}>Posts</Text>
					{this.state.posts.map((post, index) => (
						<Post
                            key={`post-${index}`}
							title={post.title}
							body={post.body}
							style={styles.post}
						/>
					))}
                    <Link to="/pictures"><Text style={{padding: 10, color: 'white', backgroundColor: '#4c8bf5', textAlign: 'center', marginTop: 16}}>Go to Pictures</Text></Link>
				</ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 10,
    }
});
