import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './components/Gallery/Gallery';
import PhotoDetails from './components/PhotoDetails/PhotoDetails';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderBackButton} from '@react-navigation/stack';
import {setPhoto} from './store/actions/actions';

const Stack = createStackNavigator();

const Routes = () => {
  const {photo} = useSelector((state) => state.photo);
  const {loading} = useSelector(({app}) => app);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Gallery"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen
          name="Photo"
          component={PhotoDetails}
          options={({navigation}) => ({
            title: !loading && photo.user ? photo.user.username : 'Loading...',
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  dispatch(setPhoto({}));
                  navigation.navigate('Gallery');
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
