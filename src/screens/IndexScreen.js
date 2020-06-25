import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';
import CustomButton from '../components/CustomButton';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <CustomButton
        viewStyle={styles.button}
        textStyle={styles.button}
        onPress={addBlogPost}>
        + post
      </CustomButton>
      <Text style={styles.paragraph}>Blog Posts</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text style={styles.list}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginVertical: 24,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#07a1c9',
    textTransform: 'uppercase',
  },
  list: {
    fontSize: 14,
    margin: 14,
    fontWeight: 'bold',
  },
  button: {
    color: '#e6ee0a',
    backgroundColor: '#cb2eac',
  },
});

export default IndexScreen;
