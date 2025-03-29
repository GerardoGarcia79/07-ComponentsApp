import React, {useContext, useState} from 'react';
import {Title} from './Title';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      style={{backgroundColor: colors.background}}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'red', 'orange', 'green']}
          progressBackgroundColor={colors.background}
          style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        />
      }>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
