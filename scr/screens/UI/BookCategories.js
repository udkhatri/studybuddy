import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Headline, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const BookCategories = ({navigation}) => {
  const [branch, setbranch] = useState('');
  const [Semester, setSemester] = useState('');
  const [Subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <Headline
          style={{fontSize: 40, paddingVertical: 10, paddingBottom: 30}}>
          categories
        </Headline>
        {/* picker for branch */}
        <Headline>Select Branch</Headline>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={branch}
            onValueChange={(itemValue, itemIndex) => setbranch(itemValue)}
            mode="dropdown"
            style={styles.dropdown}>
            <Picker.Item label="Computer Engineering" value="cs" />
            <Picker.Item label="IT" value="it" />
          </Picker>
        </View>
        {/* picker for semester */}
        <Headline>Select Semester</Headline>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={branch}
            onValueChange={(itemValue, itemIndex) => setbranch(itemValue)}
            mode="dropdown"
            style={styles.dropdown}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="it" />
          </Picker>
        </View>
        {/* picker for Book */}
        <Headline>Select Book</Headline>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={branch}
            onValueChange={(itemValue, itemIndex) => setbranch(itemValue)}
            mode="dropdown"
            style={styles.dropdown}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="javaScript" value="js" />
          </Picker>
        </View>
        <Button
          raised
          mode="contained"
          style={styles.button}
          dark={true}
          onPress={() => navigation.pop()}>
          Home page
        </Button>
      </View>
    </View>
  );
};

export default BookCategories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: '#aaaaaa',
    borderWidth: 1.5,
    borderRadius: 6,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 5,
    marginVertical: 10,
  },
});
