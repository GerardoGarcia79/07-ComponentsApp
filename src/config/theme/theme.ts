import {StyleSheet} from 'react-native';

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

export const colors: ThemeColors = {
  primary: '#5856D6',
  text: 'black',

  background: '#F3F2F7',
  cardBackground: 'white',
  buttonTextColor: 'white',
};

export const lightColors: ThemeColors = {
  primary: '#5856D6',
  text: 'black',

  background: '#F3F2F7',
  cardBackground: 'white',
  buttonTextColor: 'white',
};

export const darkColors: ThemeColors = {
  primary: '#5856D6',
  text: 'white',

  background: '#090909',
  cardBackground: '#2d2d2d',
  buttonTextColor: 'white',
};

export const desertSand: ThemeColors = {
  primary: '#5856D6',
  text: '#102542',

  background: '#F87060',
  cardBackground: 'rgb(203, 95, 83)',
  buttonTextColor: 'white',
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },

  mainContainer: {
    flex: 1,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  btnPrimaryText: {
    fontSize: 16,
  },
});
