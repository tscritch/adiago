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
                <Select.Label>Key</Select.Label>
                <Select.Item value="A">A</Select.Item>
                <Select.Item value="B">B</Select.Item>
                <Select.Item value="C">C</Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Sharps</Select.Label>
                <Select.Item value="A#">A#</Select.Item>
                <Select.Item value="B#">B#</Select.Item>
                <Select.Item value="C#">C#</Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Flats</Select.Label>
                <Select.Item value="Ab">Ab</Select.Item>
                <Select.Item value="Bb">Bb</Select.Item>
                <Select.Item value="Cb">Cb</Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};
