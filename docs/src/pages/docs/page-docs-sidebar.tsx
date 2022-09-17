import { Sidebar } from '@adiago/components';

export const PageDocsSidebar = () => {
  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Sidebar.Root>
          <Sidebar.Content>
            <Sidebar.ListItem active>Item 1</Sidebar.ListItem>
            <Sidebar.ListItem
              actions={[
                {
                  label: 'Action 1',
                  onClick: () => console.log('Action 1')
                },
                {
                  label: 'Action 2',
                  disabled: true,
                  onClick: () => console.log('Action 2')
                }
              ]}>
              Item 2
            </Sidebar.ListItem>
            <Sidebar.ListItem disabled={true}>Item 3</Sidebar.ListItem>
          </Sidebar.Content>
        </Sidebar.Root>
      </div>
      <div className="p-4 h-full">
        <Sidebar.Root position="right">
          <Sidebar.Content>Right Sidebar</Sidebar.Content>
        </Sidebar.Root>
      </div>
    </div>
  );
};
