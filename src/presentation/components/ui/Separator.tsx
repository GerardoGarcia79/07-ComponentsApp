import React, {useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          {
            height: 1,
            marginVertical: 10,
            backgroundColor: '#9b9b9b',
            opacity: 0.3,
          },
          style,
        ]}
      />
    </View>
  );
};
