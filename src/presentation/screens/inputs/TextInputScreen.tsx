import React, {useContext, useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Nombre Completo"
              placeholderTextColor={colors.text}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Correo electrónico"
              placeholderTextColor={colors.text}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Teléfono"
              placeholderTextColor={colors.text}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <View style={{height: 10}} />
          <Card>
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Teléfono"
              placeholderTextColor={colors.text}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>
        <View style={{height: 20, backgroundColor: colors.background}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
