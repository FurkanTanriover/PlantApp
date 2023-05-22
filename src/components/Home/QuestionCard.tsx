import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {BlurView} from '@react-native-community/blur';

interface QuestionCardProps {
  question: string;
  image: string;
}

const QuestionCard: React.FC<QuestionCardProps> = props => {
  const {question, image} = props;

  return (
    <View style={styles.card}>
      <Image
        style={{
          width: horizontalScale(240),
          height: verticalScale(164),
        }}
        source={{uri: image}}
      />
      <BlurView blurType="dark" blurAmount={4} style={styles.questionView}>
        <Text
          className={
            ' p-4 text-white font-rubikRegular font-[400] text-[13px]'
          }>
          {question}
        </Text>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: moderateScale(12),
    width: horizontalScale(240),
    height: verticalScale(164),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(8px)',
    marginRight: horizontalScale(10),
  },
  questionView: {
    position: 'absolute',
    bottom: 0,
    width: horizontalScale(240),
    height: verticalScale(64),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default QuestionCard;
