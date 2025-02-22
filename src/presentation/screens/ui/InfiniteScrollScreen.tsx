/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    // Array.from creates a new array with a specified length (5 in this case).
    // The second argument is a mapping function that generates the array elements.
    // Parameters:
    // _: A placeholder for the first parameter (the current element), unused here.
    // i: The index of the element (ranging from 0 to 4).
    // For each element, it calculates numbers.length + i, generating 5 new consecutive numbers starting from the length of the numbers array.
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{height: 400, width: '100%'}}
    // />
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{height: 400, width: '100%'}}
    />
  );
};
