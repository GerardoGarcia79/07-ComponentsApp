import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button = ({onPress, text, styles}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        Button
      </Text>
    </Pressable>
  );
};
