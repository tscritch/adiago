import { Progress } from '@adiago/components';
import React from 'react';

export const PageDocsProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => {
        if (progress >= 100) {
          return 0;
        }
        return progress + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="p-4">
        <Progress value={progress} />
      </div>
    </div>
  );
};
