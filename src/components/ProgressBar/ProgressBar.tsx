import React, {FunctionComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const partWidth = 100 / totalSteps;
  const widthProgressBar = partWidth * currentStep;

  return (
    <View style={styles.container}>
      <View style={[styles.bar, {width: `${widthProgressBar}%`}]} />
      <View style={styles.stateContainer}>
        <Text style={styles.stateText}>
          {currentStep} / {totalSteps}
        </Text>
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default ProgressBar;
