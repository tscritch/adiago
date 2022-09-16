import { Toast, Button } from '@adiago/components';
import React from 'react';

export const PageDocsToast = () => {
  return (
    <div>
      <div className="p-4">
        <Toast.Provider swipeDirection="right">
          <TriggerToast />
        </Toast.Provider>
      </div>
    </div>
  );
};

const TriggerToast = () => {
  const { createToast } = Toast.useToast();

  return (
    <Button
      onClick={() => {
        createToast({
          title: 'Toast Title' + Math.random(),
          description: 'Toast description',
          type: 'success',
          action: {
            label: 'Action',
            onClick: () => {
              console.log('Action clicked');
            }
          }
        });
      }}>
      Open Toast
    </Button>
  );
};
