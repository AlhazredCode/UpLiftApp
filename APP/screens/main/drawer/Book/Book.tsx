import React, { useState } from 'react';
import { View, ScrollViewProps, StyleSheet, TextStyle } from 'react-native';
import { ProgressSteps, ProgressStep } from '@ouedraogof/react-native-progress-steps';
import One from './One';
import Two from './Two';
import Three from './Three';
import { useColors } from '../../../../context/UseColors';
import { Box } from '../../../../../components';
  
interface StepData {
  label: string;
  component: React.FC;
}

const stepsData: StepData[] = [
  { label: 'Primer Paso', component: One },
  { label: 'Segundo Paso', component: Two },
  { label: 'Tercer Paso', component: Three },
];

const Book = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState(false);
  const stepCount = stepsData.length;
  const colors = useColors();

  const defaultScrollViewProps: ScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.UpBackground100
    },
  };

  const progressStepsStyle = {
    activeStepIconBorderColor:  'red',
    activeLabelColor: 'red',
    activeStepNumColor: 'red',
    activeStepIconColor:  'red',
    completedStepIconColor:  'red',
    completedProgressBarColor:  'red',
    completedCheckColor:  'red',
  };


  const buttonTextStyle: TextStyle = {
    color: '#393939',
    textAlign: 'center',
    padding: 8,
  };

  const handleNext = () => {
    if (activeStep === 0 && errors) {
      return;
    }
    if (activeStep === 0) {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
        setActiveStep(1);
      }, 2000);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('Formulario enviado');
  };

  return (
    <Box sx={{ flex: 1, bgColor: colors.UpBackground100 }}>
      <ProgressSteps activeStep={activeStep} {...progressStepsStyle}>
        {stepsData.map((step, index) => (
          <ProgressStep
            key={index}
            label={step.label}
            onNext={index === stepCount - 1 ? handleSubmit : handleNext}
            onPrevious={handlePrev}
            scrollViewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            errors={errors}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            stepCount={stepCount}
            onSubmit={index === stepCount - 1 ? handleSubmit : undefined}
          >
            <View style={styles.stepContent}>
              <step.component />
            </View>
          </ProgressStep>
        ))}
      </ProgressSteps>
    </Box>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  stepContent: {
    alignItems: 'center',
  },
});

export default Book;