import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PicturePost from "../components/picturePost";
import { Link } from "react-router-native";

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
            <View>
                <ScrollView>
                    <Text style={{ fontSize: 32, marginBottom: 10 }}>Pictures</Text>
					{this.state.photos.slice(0, 50).map((post, index) => (
						<PicturePost
                            key={`picture-${index}`}
                            title={post.title}
                            imageUrl={post.thumbnailUrl}
							style={styles.post}
						/>
					))}
                    <Link to="/posts"><Text style={{padding: 10, color: 'white', backgroundColor: '#4c8bf5', textAlign: 'center', marginTop: 16}}>Go to Posts</Text></Link>
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
