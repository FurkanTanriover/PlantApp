import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CategoryCard from '../components/Home/CategoryCard';
import QuestionCard from '../components/Home/QuestionCard';
import Input from '../components/Input';
import {getPlantCategories, getPlantQuestions} from '../redux/action';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {plantCategories, plantQuestions} = useSelector(state => state.reducer);
  useEffect(() => {
    getPlantCategories(dispatch);
    plantQuestions?.length === 0 && getPlantQuestions(dispatch);
  }, [dispatch, plantCategories, plantQuestions]);

  return (
    <ScrollView>
      {/* header section */}
      <View style={styles.headerSection}>
        {/* titles */}
        <View style={styles.headerTitles}>
          <Text className="font-rubikRegular font-[400] text-[16px]">
            Hi, plant lover!
          </Text>
          <Text className="font-rubikRegular font-[500] text-[24px]">
            Good Afternoon! ⛅️
          </Text>
        </View>
        <View className="z-30 " style={styles.inputSection}>
          <Input search placeholder="Search for plants" />
        </View>
        <Image
          source={require('../../src/assets/images/home-header.png')}
          style={styles.headerImageStyle}
        />
      </View>
      {/* premium available section */}
      <View style={styles.premiumAvailable}>
        <Image
          style={{width: moderateScale(36), height: moderateScale(30)}}
          source={require('../../src/assets/icons/mail.png')}
        />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text className="font-rubikRegular  text-[#E5C990] font-[700] text-[16px]">
            FREE Premium available
          </Text>
          <Text className="font-rubikRegular text-[#E5C990] font-[400] text-[13px]">
            Tap to upgrade your account!
          </Text>
        </View>
        <Image
          style={{width: moderateScale(24), height: moderateScale(24)}}
          source={require('../../src/assets/icons/arrow.png')}
        />
      </View>
      {/* get started section */}
      <View style={styles.getStartedSection}>
        <Text className="font-rubikRegular font-[500] text-[15px]">
          Get started
        </Text>
        <FlatList
          data={plantQuestions}
          renderItem={({item}) => (
            <QuestionCard question={item.title} image={item.image_uri} />
          )}
          horizontal
          style={styles.horizontalSection}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* categories section */}
      <View style={styles.categoriesSection}>
        <FlatList
          columnWrapperStyle={{gap: horizontalScale(11)}}
          scrollEnabled={false}
          numColumns={2}
          data={plantCategories?.data}
          renderItem={({item}) => (
            <CategoryCard title={item.title} image={item.image.url} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerSection: {
    width: horizontalScale(375),
    height: verticalScale(175),
    backgroundColor: '#F7F7F7',
  },
  headerTitles: {
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(24),
    width: horizontalScale(225),
    height: verticalScale(53),
  },
  headerImageStyle: {
    position: 'absolute',
    top: verticalScale(102),
    width: horizontalScale(400),
    left: horizontalScale(-26),
    height: verticalScale(70),
  },
  inputSection: {
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(24),
    width: horizontalScale(327),
    height: verticalScale(44),
  },
  premiumAvailable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(24),
    paddingHorizontal: horizontalScale(14),
    width: horizontalScale(327),
    height: verticalScale(64),
    backgroundColor: '#24201A',
    borderRadius: moderateScale(12),
  },
  getStartedSection: {
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(24),
    width: horizontalScale(327),
    height: verticalScale(200),
  },
  horizontalSection: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(-24),
    paddingHorizontal: horizontalScale(24),
    height: verticalScale(140),
  },
  categoriesSection: {
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(24),
    width: horizontalScale(327),
  },
});
