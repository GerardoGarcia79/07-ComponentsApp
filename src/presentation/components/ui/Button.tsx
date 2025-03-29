import React, {useContext} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}
export const Button = ({onPress, text, styles}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        styles,
      ]}
      onPress={onPress}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
