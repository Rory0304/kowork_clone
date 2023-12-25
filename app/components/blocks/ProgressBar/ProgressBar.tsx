import React from 'react';
import * as Progress from 'react-native-progress';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Progress.Bar
      width={null}
      height={8}
      borderWidth={0}
      progress={progress}
      style={{
        borderRadius: 100,
      }}
    />
  );
};

export default ProgressBar;
