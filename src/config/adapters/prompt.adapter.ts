import prompt from 'react-native-prompt-android';

export interface Options {
  title: string;
  message?: string;
  callbackOrButtons: ((value?: string) => void) | PromptButton[];
  type?:
    | 'default'
    | 'plain-text'
    | 'secure-text'
    | 'login-password'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | undefined;
  cancelable?: boolean | undefined;
  defaultValue?: string | undefined;
  placeholder?: string | undefined;
}

interface PromptButton {
  text: string;
  onPress: (value?: string) => void | undefined;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title = 'Prompt',
  message,
  callbackOrButtons,
  type = 'plain-text',
  cancelable,
  defaultValue,
  placeholder,
}: Options) => {
  prompt(title, message, callbackOrButtons, {
    type,
    cancelable,
    defaultValue,
    placeholder,
  });
};
