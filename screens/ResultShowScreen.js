import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';
const ResultShowScreen = ({navigation, route}) => {
  const {id} = route.params;
  const [result, setResult] = useState(null);
  const getResult = async id => {
    const ressponse = await yelp.get(`/${id}`);
    setResult(ressponse.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  console.log(result);
  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={i => i}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image}></Image>
        )}
      />
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 7,
    borderRadius: 10,
  },
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
