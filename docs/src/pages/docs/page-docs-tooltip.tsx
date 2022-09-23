import { Button, Tooltip } from '@adiago/components';

export const PageDocsTooltip = () => {
  return (
    <div>
      <div className="p-4">
        <Tooltip.Root content="Default button tooltip">
          <Button>Default</Button>
        </Tooltip.Root>
      </div>
    </div>
  );
};
