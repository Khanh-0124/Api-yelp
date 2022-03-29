import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const ScreenSearch = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    return results.filter(results => {
      return results.price === price;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView style={{marginLeft: 10, marginTop: 10}}>
        <SafeAreaView>
          {errorMessage ? (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          ) : null}
          <ResultList
            navigation={navigation}
            results={filterResultsByPrice('$')}
            title="Cost Effective"
          />
          <ResultList
            navigation={navigation}
            results={filterResultsByPrice('$$')}
            title="Bit Pricier"
          />
          <ResultList
            navigation={navigation}
            results={filterResultsByPrice('$$$')}
            title="Big Spender"
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
