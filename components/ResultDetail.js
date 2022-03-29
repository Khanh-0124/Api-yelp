import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ResultDetail = ({result, onPress, navigation}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{uri: result.image_url}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={{color: 'black', marginBottom: 5}}>
        {result.rating} Star {result.review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 230,
    height: 130,
    borderRadius: 8,
    marginRight: 10,
    marginVertical: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
