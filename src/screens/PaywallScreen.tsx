import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../src/utils/metrics';
import PaywallCard from '../components/Paywall/PaywallCard';
import PaywallPaymentCard from '../components/Paywall/PaywallPaymentCard';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setPaywallStatus} from '../redux/action';

const PaywallScreen = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSelect = (index: any) => {
    setSelectedCardIndex(index);
  };

  const cardData = [
    {
      title: 'Unlimited',
      description: 'Plant identify',
      icon: require('../../src/assets/icons/unlimited.png'),
    },
    {
      title: 'Faster',
      description: 'Process',
      icon: require('../../src/assets/icons/faster.png'),
    },
    {
      title: 'Detailed',
      description: 'Access to plant details',
      icon: require('../../src/assets/icons/faster.png'),
    },
  ];

  const handlePaywallComplete = async () => {
    dispatch(setPaywallStatus(false));
    navigation.navigate('TabStackScreen');
  };

  const paymentCardData = [
    {
      id: 1,
      title: '1 Month',
      description: '$2.99/month, auto renewable',
    },
    {
      id: 2,
      title: '1 Year',
      description: '$19.99/year, auto renewable',
    },
  ];

  return (
    <View>
      {/* image section */}
      <View className="z-20">
        <Image
          source={require('../../src/assets/images/paywall.png')}
          style={styles.imageSection}
        />
        <TouchableOpacity
          style={styles.closeImage}
          onPress={() => {
            handlePaywallComplete();
          }}>
          <Image
            style={{width: moderateScale(24), height: moderateScale(24)}}
            source={require('../../src/assets/images/close.png')}
          />
        </TouchableOpacity>
      </View>

      {/* background section */}
      <View style={styles.backgroundSection} />
      {/* content section */}
      <View style={styles.contentSection} className="z-30">
        {/* title section */}
        <View style={styles.titleSection}>
          <Text
            className={`text-[${moderateScale(
              28,
            )}px] font-rubikBold font-[700] text-white`}>
            PlantApp{' '}
            <Text
              className={`text-[${moderateScale(
                24,
              )}px] font-rubikRegular font-[300] text-white`}>
              Premium
            </Text>
          </Text>
          <Text
            className={`text-[${moderateScale(16)}px] pt-${verticalScale(
              2,
            )} opacity-70  font-rubikRegular text-white`}>
            Access All Features
          </Text>
        </View>
        {/* horizontal scroll section */}
        <ScrollView
          horizontal
          style={styles.horizontalScrollSection}
          showsHorizontalScrollIndicator={false}>
          {cardData.map((card, index) => (
            <View key={index}>
              <PaywallCard
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </View>
          ))}
        </ScrollView>
        {/* payment card section */}
        <View style={styles.paymentCardSection}>
          {paymentCardData.map((card, index) => (
            <View key={index}>
              <PaywallPaymentCard
                onPress={() => handleSelect(index)}
                isSelect={selectedCardIndex === index}
                title={card.title}
                description={card.description}
              />
            </View>
          ))}
        </View>
        {/* bottom section */}
        <View style={styles.bottomSection}>
          <Button title="Get Started" onClick={() => {}} />
        </View>
        {/* legal section */}
        <View style={styles.legalSection}>
          <Text className="text-[9px] font-rubikRegular font-[300] text-center opacity-50 text-white">
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
        </View>
        <View style={styles.legalSection}>
          <Text className="text-[11px] font-rubikRegular font-[400] text-center opacity-50 text-white">
            Terms • Privacy • Restore
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallScreen;

const styles = StyleSheet.create({
  imageSection: {
    width: horizontalScale(375),
    height: verticalScale(490),
  },
  closeImage: {
    position: 'absolute',
    top: verticalScale(55),
    right: horizontalScale(16),
  },
  backgroundSection: {
    width: horizontalScale(375),
    height: verticalScale(548),
    backgroundColor: '#0F1F17',
    position: 'absolute',
    marginTop: verticalScale(264),
  },
  contentSection: {
    position: 'absolute',
    justifyContent: 'center',
    marginTop: verticalScale(266),
    marginLeft: horizontalScale(24),
    width: horizontalScale(351),
  },
  titleSection: {
    width: horizontalScale(248),
    height: verticalScale(47),
  },
  horizontalScrollSection: {
    marginLeft: horizontalScale(-24),
    paddingLeft: horizontalScale(24),
    marginTop: verticalScale(30),
    gap: verticalScale(2),
  },
  paymentCardSection: {
    marginTop: verticalScale(19),
    gap: verticalScale(16),
  },
  bottomSection: {
    marginTop: verticalScale(26),
  },
  legalSection: {
    width: horizontalScale(327),
    marginTop: verticalScale(8),
  },
});
