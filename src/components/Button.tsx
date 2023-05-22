import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../utils/metrics';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({title, onClick}) => {
  const handlePress = (): void => {
    onClick();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{...styles.container}}
      className="z-50 justify-center items-center bg-[#28AF6E] rounded-[12px] px-[18px] py-[16px]">
      {/* //TODO: fix the text fontFamily */}
      <Text className="text-white font-rubikRegular font-[700]">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(327),
    height: verticalScale(56),
  },
});
