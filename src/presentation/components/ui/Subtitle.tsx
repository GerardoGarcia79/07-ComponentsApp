import React from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}

export const Subtitle = ({
  backgroundColor = colors.background,
  text,
  safe = false,
}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor,
      }}>
      {text}
    </Text>
  );
};
