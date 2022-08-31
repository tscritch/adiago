import React from 'react';
import { Dropdown, Button } from '@adiago/components';

export const PageDocsDropdown = () => {
  const [checkMe, setCheckMe] = React.useState(true);
  const [anotherCheck, setAnotherCheck] = React.useState(false);
  const [options, setOptions] = React.useState('radio-2');

  return (
    <div className="h-full flex">
      <div className="p-4 h-full">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button>Open</Button>
          </Dropdown.Trigger>

          <Dropdown.Content align="start" sideOffset={4}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item disabled>Item 3</Dropdown.Item>
            <Dropdown.Sub>
              <Dropdown.SubTrigger>
                <Dropdown.Item>More</Dropdown.Item>
              </Dropdown.SubTrigger>
              <Dropdown.SubContent>
                <Dropdown.Item>Sub menu item 1</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>Sub menu item 2</Dropdown.Item>
              </Dropdown.SubContent>
            </Dropdown.Sub>
            <Dropdown.Separator />
            <Dropdown.CheckboxItem checked={checkMe} onCheckedChange={setCheckMe}>
              Check me
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem checked={anotherCheck} onCheckedChange={setAnotherCheck}>
              Another check
            </Dropdown.CheckboxItem>
            <Dropdown.Separator />
            <Dropdown.Label>Radio Buttons</Dropdown.Label>
            <Dropdown.RadioGroup value={options} onValueChange={setOptions}>
              <Dropdown.RadioItem value="radio-1">Radio 1</Dropdown.RadioItem>
              <Dropdown.RadioItem value="radio-2">Radio 2</Dropdown.RadioItem>
            </Dropdown.RadioGroup>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
      <div className="p-4 h-full"></div>
    </div>
  );
};
