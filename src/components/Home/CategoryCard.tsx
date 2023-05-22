import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = props => {
  const {title, image} = props;

  return (
    <View style={styles.card}>
      <View style={styles.titleView}>
        <Text className=" font-rubikRegular font-[500] text-[16px]">
          {title}
        </Text>
      </View>
      <Image style={styles.imageView} source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.5,
    backgroundColor: '#F4F6F6',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: moderateScale(12),
    width: horizontalScale(158),
    height: verticalScale(152),
    marginBottom: verticalScale(16),
  },
  titleView: {
    position: 'absolute',
    top: verticalScale(16),
    left: horizontalScale(16),
    width: horizontalScale(100),
  },
  imageView: {
    width: horizontalScale(168),
    height: verticalScale(152),
  },
});

export default CategoryCard;
