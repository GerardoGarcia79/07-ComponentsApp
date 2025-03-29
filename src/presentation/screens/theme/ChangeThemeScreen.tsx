import React, {useContext} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';
import {Text} from 'react-native';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />
      <Button
        text="Light"
        styles={{marginBottom: 10}}
        onPress={() => setTheme('light')}
      />
      <Button
        text="Dark"
        styles={{marginBottom: 10}}
        onPress={() => setTheme('dark')}
      />
      <Button
        text="Desert Sand"
        styles={{marginBottom: 10}}
        onPress={() => setTheme('desertSand')}
      />
      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
