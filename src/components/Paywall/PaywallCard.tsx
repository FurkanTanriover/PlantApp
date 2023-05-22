import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

interface PaywallCardProps {
  title: string;
  description: string;
  icon: string;
}

const PaywallCard: React.FC<PaywallCardProps> = props => {
  const {title, description, icon} = props;

  return (
    <View style={styles.card}>
      <Image source={icon} />
      <Text
        className={`mt-[${verticalScale(16)}] text-white font-rubikRegular font-[500] text-[20px]`}>
        {title}
      </Text>
      <Text
        className={`mt-[${verticalScale(
          4,
        )}] text-white font-rubikRegular font-[400] text-[13px] opacity-70`}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: horizontalScale(8),
    padding: moderateScale(16),
    width: horizontalScale(156),
    height: verticalScale(130),
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    backdropFilter: 'blur(8px)',
  },
});

export default PaywallCard;
