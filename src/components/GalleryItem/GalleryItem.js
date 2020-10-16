import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {loadPhoto} from '../../store/actions/actions';

const GalleryItem = ({urls, user, navigation, id}) => {
  const dispatch = useDispatch();

  return (
    // <View style={styles.container}>
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          dispatch(loadPhoto(id));
          navigation.navigate('Photo');
        }}>
        <Image style={styles.img} source={{uri: urls.small}} />
        <Text style={styles.title}>{user.username}</Text>
      </TouchableOpacity>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
  },
  touchable: {
    borderRadius: 10,
  },
  img: {
    borderRadius: 10,
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  content: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
});

export default GalleryItem;
