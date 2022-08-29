import { Dropdown, Button } from '@adiago/components';

export const PageDocsDropdown = () => {
  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button>Open</Button>
          </Dropdown.Trigger>

          <Dropdown.Content align="start" sideOffset="0.5">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
      <div className="p-4 h-full"></div>
    </div>
  );
};
