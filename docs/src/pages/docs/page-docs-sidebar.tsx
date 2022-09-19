import { Sidebar } from '@adiago/components';

export const PageDocsSidebar = () => {
  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Sidebar.Root>
          <Sidebar.Content>
            <Sidebar.ListItem
              active
              actions={[
                {
                  label: 'Action 1',
                  onClick: () => console.log('Action 1')
                }
              ]}>
              Item 1
            </Sidebar.ListItem>
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
            <Sidebar.Group label="Group">
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
            </Sidebar.Group>
            <Sidebar.Group label="Disabled Group" disabled={true}>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
            </Sidebar.Group>
            <Sidebar.Group
              label="Group with actions"
              actions={[
                {
                  label: 'Action 1',
                  onClick: () => console.log('Action 1')
                }
              ]}>
              <Sidebar.ListItem>Item in a group with a super long name oh Im so cool</Sidebar.ListItem>
              <Sidebar.Group label="Sub group">
                <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
                <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
                <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
                <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
              </Sidebar.Group>
              <Sidebar.Group label="No children"></Sidebar.Group>
            </Sidebar.Group>
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
