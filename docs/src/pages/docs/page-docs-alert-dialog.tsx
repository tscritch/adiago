import { AlertDialog, Button } from '@adiago/components';

export const PageDocsAlert_Dialog = () => {
  return (
    <div>
      <div className="p-4">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button>Open Alert Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert Dialog Title</AlertDialog.Title>
            <AlertDialog.Description>
              Alert Dialog Description that is super long. Are you sure you want to do this? It can just keep going and
              going and going.
            </AlertDialog.Description>
            <AlertDialog.ButtonGroup>
              <AlertDialog.Cancel asChild>
                <Button variant="flat" color="opaque">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button variant="flat" color="error">
                  Delete
                </Button>
              </AlertDialog.Action>
            </AlertDialog.ButtonGroup>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  );
};
