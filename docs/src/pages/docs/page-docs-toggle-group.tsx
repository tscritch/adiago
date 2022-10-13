import { ToggleGroup } from '@adiago/components';

export const PageDocsToggle_Group = () => {
  return (
    <div>
      <div className="p-4">
        <ToggleGroup.Root defaultValue="1">
          <ToggleGroup.Item value="1">One</ToggleGroup.Item>
          <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
          <ToggleGroup.Item value="3">Three</ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
};
