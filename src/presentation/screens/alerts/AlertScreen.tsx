import React, {useContext} from 'react';
import {globalStyles} from '../../../config/theme/theme';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {Alert, View} from 'react-native';
import {Options, showPrompt} from '../../../config/adapters/prompt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const onShowPrompt = () => {
    // Using my code - Prompt adapter
    const prompt: Options = {
      title: 'Enter password',
      message: 'Enter your password to claim your $1.5B in lottery winnings',
      callbackOrButtons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
          style: 'default',
        },
      ],
      type: 'secure-text',
      cancelable: false,
      defaultValue: 'test',
      placeholder: 'placeholder',
    };

    showPrompt(prompt);

    // Library example
    // prompt(
    // 'Enter password',
    // 'Enter your password to claim your $1.5B in lottery winnings',
    // [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {
    //     text: 'OK',
    //     onPress: password => console.log('OK Pressed, password: ' + password),
    //   },
    // ],
    // {
    //   type: 'secure-text',
    //   cancelable: false,
    //   defaultValue: 'test',
    //   placeholder: 'placeholder',
    // },
    // );

    // Código Nativo
    // Alert.prompt(
    //   'Correo electrónico',
    //   'Some random text here',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
