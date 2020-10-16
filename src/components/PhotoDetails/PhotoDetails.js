import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import {WithLoader} from '../../hoc/withLoader';

const width = Dimensions.get('window').width;

const Photo = () => {
  const {photo} = useSelector(({photo}) => photo);

  return (
    <View style={styles.container}>
      {photo.urls && (
        <>
          <Image style={styles.img} source={{uri: photo.urls.full}} />
          <Text style={styles.text}>Author: {photo.user.username}</Text>
          <Text style={styles.text}>Shot on: {photo.exif.model}</Text>
          <Text style={styles.text}>Description: {photo.alt_description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  img: {
    alignSelf: 'center',
    width: width - 20,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WithLoader(Photo);
