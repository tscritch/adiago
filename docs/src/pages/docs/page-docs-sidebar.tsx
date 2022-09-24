import React from 'react';
import { Sidebar } from '@adiago/components';

export const PageDocsSidebar = () => {
  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Sidebar.Root>
          <Sidebar.Content>
            <Sidebar.ListItem
              active
              draggable={true}
              actions={[
                {
                  type: 'basic',
                  label: 'Action 1',
                  onClick: () => console.log('Action 1')
                }
              ]}>
              Item 1
            </Sidebar.ListItem>
            <Sidebar.ListItem
              draggable={true}
              actions={[
                {
                  type: 'basic',
                  label: 'Action 1',
                  onClick: () => console.log('Action 1')
                },
                {
                  type: 'basic',
                  label: 'Action 2',
                  disabled: true,
                  onClick: () => console.log('Action 2')
                }
              ]}>
              Item 2
            </Sidebar.ListItem>
            <Sidebar.ListItem disabled={true} draggable={true}>
              Item 3
            </Sidebar.ListItem>
            <Sidebar.Group label="Group" draggable={true}>
              <Sidebar.ListItem draggable={true}>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem draggable={true}>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem draggable={true}>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem draggable={true}>Item in a group</Sidebar.ListItem>
              <Sidebar.ListItem draggable={true}>Item in a group</Sidebar.ListItem>
            </Sidebar.Group>
            <Sidebar.Group label="Disabled Group" disabled={true}>
              <Sidebar.ListItem>Item in a group</Sidebar.ListItem>
            </Sidebar.Group>
            <Sidebar.Group
              label="Group with actions"
              actions={[
                {
                  type: 'basic',
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
      <div className="p-4 h-full">
        <ComposedSidebarPreview />
      </div>
    </div>
  );
};

const ComposedSidebarPreview = () => {
  const [activeItemId, setActiveItemId] = React.useState<string | undefined>(undefined);
  const [items, setItems] = React.useState([
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
    { id: '4', label: 'Item 4', disabled: true },
    {
      id: '5',
      label: 'Item 5',
      childItems: [
        { id: '5-1', label: 'Item 5-1' },
        { id: '5-2', label: 'Item 5-2' },
        { id: '5-3', label: 'Item 5-3' },
        { id: '5-4', label: 'Item 5-4' },
        { id: '5-5', label: 'Item 5-5', childItems: [{ id: '5-5-1', label: 'Item 5-5-1' }] }
      ]
    },
    { id: '6', label: 'Item 6' },
    { id: '7', label: 'Item 7' },
    { id: '8', label: 'Item 8' },
    { id: '9', label: 'Item 9' },
    { id: '10', label: 'Item 10' },
    { id: '11', label: 'Item 11' }
  ]);

  return (
    <Sidebar.Composed
      items={items}
      activeItemId={activeItemId}
      sortable={true}
      onItemClick={(itemId) => {
        console.log('Item clicked', itemId);

        setActiveItemId(itemId);
      }}
    />
  );
};
