import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

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
      className="w-[327px] h-[56px] justify-center items-center bg-[#28AF6E] rounded-[12px] px-[18px] py-[16px]">
      {/* //TODO: fix the text fontFamily */}
      <Text className="text-white font-rubikRegular">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
