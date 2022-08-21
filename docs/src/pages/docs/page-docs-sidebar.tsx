import { Input, Sidebar } from '@adiago/components';

export const PageDocsSidebar = () => {
  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Sidebar.Root>
          <Sidebar.Content>Left Sidebar</Sidebar.Content>
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
