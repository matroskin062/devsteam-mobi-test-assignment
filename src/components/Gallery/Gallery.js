import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGallery} from '../../store/actions/actions';
import GalleryItem from '../GalleryItem/GalleryItem';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {WithLoader} from '../../hoc/withLoader';

const width = Dimensions.get('window').width;

const Gallery = ({navigation}) => {
  const {photos} = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadGallery());
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {photos &&
          photos.map((p) => (
            <GalleryItem key={p.id} {...p} navigation={navigation} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 20,
    height: '100%',
  },
});

export default WithLoader(Gallery);
