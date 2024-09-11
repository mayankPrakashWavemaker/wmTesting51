import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../constants/posts";
interface Comment {
    id: number;
    title: string;
    body: string;
  }
  interface Post {
    userId: number;
    comments: Comment[];
  }
const PostItem = ({ post }: { post: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.userId}>User ID: {post.userId}</Text>
      <FlatList
        data={post.comments}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
  
export default function list() {
  
   
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Link>
      <FlatList
        data={data}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      postContainer: {
        marginBottom: 20,
      },
      userId: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      card: {
        backgroundColor: "#f8f8f8",
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 250,
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      cardBody: {
        fontSize: 14,
        color: "#333",
      },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width:75
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
