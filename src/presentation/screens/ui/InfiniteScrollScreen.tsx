import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {colors} from '../../../config/theme/theme';

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
    <CustomView margin>
      <Title text="Infinite scroll" safe />

      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => (
          <Text
            style={{
              height: 300,
              backgroundColor: colors.primary,
              color: 'white',
              fontSize: 50,
            }}>
            {item}
          </Text>
        )}
      />
    </CustomView>
  );
};
