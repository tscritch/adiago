import { Select } from '@adiago/components';

export const PageDocsSelect = () => {
  return (
    <div>
      <div className="p-4">
        <Select.Root>
          <Select.Trigger placeholder="Select a key..." />

          <Select.Content>
            <Select.Viewport>
              <Select.Group>
                <Select.Item value="A">A</Select.Item>
                <Select.Item value="B">B</Select.Item>
                <Select.Item value="C">C</Select.Item>
              </Select.Group>
              <Select.Group>
                <Select.Item value="A#">A#</Select.Item>
                <Select.Item value="C#">C#</Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};
