import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail';

const ResultList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        removeClippedSubviews={true}
        data={results}
        renderItem={({item}) => {
          return (
            <ResultDetail
              result={item}
              onPress={() =>
                navigation.navigate('ResultShowScreen', {id: item.id})
              }
            />
          );
        }}
      />
      {title !== 'Big Spender' ? (
        <View
          style={{
            height: 5,
            backgroundColor: '#cccc',
            marginVertical: 10,
            marginRight: 10,
          }}></View>
      ) : null}
    </ScrollView>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
