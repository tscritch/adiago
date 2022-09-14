import { Toast, Button } from '@adiago/components';
import React from 'react';

export const PageDocsToast = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <div className="p-4">
        <Toast.Provider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = new Date();
                setOpen(true);
              }, 100);
            }}>
            Open Toast
          </Button>

          <Toast.Root open={open} onOpenChange={setOpen}>
            <Toast.Title>Toast Title</Toast.Title>
            <Toast.Description>Toast Description</Toast.Description>
            <Toast.Action altText="Whoopsie button">
              <Button size="xs" variant="flat">
                do it
              </Button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Root open={true}>
            <Toast.Title>Toast Title</Toast.Title>
            <Toast.Description>Toast Description</Toast.Description>
          </Toast.Root>

          <Toast.Viewport />
        </Toast.Provider>
      </div>
    </div>
  );
};
