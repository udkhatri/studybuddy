import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Searchbar, withTheme, Button} from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search for the books"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.banner}>
        <Text style={{marginLeft: 10, fontSize: 16}}>Browse by categories</Text>
        <Button
          color="black"
          onPress={() => navigation.navigate('BookCategories')}>
          <Text
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            See all
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#3498db',
  },
  container: {
    width: '100%',
    height: Dimensions.get('screen').height - 45,
    backgroundColor: '#fff',
  },
  banner: {
    height: 35,
    width: '100%',
    backgroundColor: '#dadada',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
