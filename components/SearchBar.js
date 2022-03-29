import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
// import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = props => {
  const {term, onChangeTerm, onTermSubmit} = props;
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/loupe.png')}
        style={{width: 25, height: 25, alignSelf: 'center', marginLeft: 8}}
      />
      <TextInput
        placeholder="Search"
        style={{paddingLeft: 13, flex: 1}}
        autoCapitalize="words"
        autoCorrect={true}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#cccc',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
