import { AlertDialog, Button } from '@adiago/components';

export const PageDocsAlertDialog = () => {
  return (
    <div>
      <div className="p-4">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button>Open Alert Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>{/* <AlertDialog.Title>Alert Dialog Title</AlertDialog.Title> */}</AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  );
};
