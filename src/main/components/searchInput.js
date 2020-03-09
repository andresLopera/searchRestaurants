import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {IconButton, Searchbar} from 'react-native-paper';

const SearchInput = () => {
  const [currentString, setCurrentString] = useState(null);

  const handleLocation = () => {
    Alert.alert('get current location');
  };

  return (
    <View style={SearchInputStyle.container}>
      <Searchbar
        style={SearchInputStyle.input}
        placeholder="Search"
        onChangeText={setCurrentString}
        value={currentString}
      />
      <IconButton icon="crosshairs-gps" size={20} onPress={handleLocation} />
    </View>
  );
};

const SearchInputStyle = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
  },
};

export default SearchInput;
