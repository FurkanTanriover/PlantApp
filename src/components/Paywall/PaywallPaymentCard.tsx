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
}

const PaywallPaymentCard: React.FC<PaywallPaymentCardProps> = props => {
  const {title, description, isSelect} = props;
  return (
    <TouchableOpacity style={styles.card}>
      <Text className=" text-white font-rubikRegular font-[500] text-[16px]">
        {title}
      </Text>
      <Text className=" text-white font-rubikRegular font-[300] text-[12px]">
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
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 14,
    backdropFilter: 'blur(40px)', // Note: backdrop-filter has minimal browser support
  },
});

export default PaywallPaymentCard;
