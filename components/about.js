import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }}
      />
      <Text>
        This app was written in React-Native.
      </Text>
    </View>
  );
}

// If we had a central style we could simply import it wherever we need it
// from a style_constants.js file for instance.For now we’ll create the styles
// in the same files.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default About;
