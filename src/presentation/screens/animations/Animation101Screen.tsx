import React, {useContext} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);

  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity: animatedOpacity,
          transform: [{translateY: animatedTop}],
        }}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 700,
          });
        }}
        style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
