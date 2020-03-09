import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

import SearchInput from '../components/searchInput';
import placesApi from '../services/places.service';

const Main = params => {
  const [places, setPlaces] = useState([]);

  const renderItem = ({item}) => {
    return (
      <Card key={item.key} elevation="2" style={itemStyle.container}>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.formatted_address}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      </Card>
    );
  };

  const handleFetchPlaces = () => {
    placesApi.fetchPlaces().then(data => {
      setPlaces(data.status === 'OK' ? data.results : []);
    });
  };

  useEffect(() => {
    handleFetchPlaces();
  }, []);

  const renderListEmpty = () => {
    return <Text>No data to show</Text>;
  };

  return (
    <View>
      <SearchInput />
      <FlatList
        renderItem={renderItem}
        data={places}
        extraData={places}
        keyExtractor={item => item.key}
        ListEmptyComponent={renderListEmpty}
      />
    </View>
  );
};

const itemStyle = {
  container: {
    marginBottom: 15,
    marginHorizontal: 15,
    padding: 5,
    elevation: 2,
  },
  text: {
    color: 'black',
  },
};

export default Main;
