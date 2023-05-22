import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utils/metrics';

interface PaywallPaymentCardProps {
  title: string;
  description: string;
  isSelect?: boolean;
  onPress?: () => void;
}

const PaywallPaymentCard: React.FC<PaywallPaymentCardProps> = props => {
  const {title, description, isSelect, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        isSelect ? 'border-2 border-[#28AF6E]' : 'border-[#FFFFFF4D]'
      }`}
      style={styles.card}>
      <Text
        className={`text-white font-rubikRegular font-[500] text-[${moderateScale(
          16,
        )}px]`}>
        {title}
      </Text>
      <Text
        className={`text-white font-rubikRegular font-[300] text-[${moderateScale(
          12,
        )}px]`}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: horizontalScale(327),
    height: verticalScale(60),
    padding: moderateScale(16),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 0.5,
    borderRadius: 14,
    backdropFilter: 'blur(40px)', // Note: backdrop-filter has minimal browser support
  },
});

export default PaywallPaymentCard;
