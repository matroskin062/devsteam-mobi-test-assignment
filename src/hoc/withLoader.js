import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';

export const WithLoader = (Component) => ({...props}) => {
  const {loading} = useSelector(({app}) => app);
  return (
    <>
      {loading && (
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color="tomato" size="large" />
        </View>
      )}
      <Component {...props} />
    </>
  );
};
