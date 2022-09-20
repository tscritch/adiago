import { Switch } from '@adiago/components';

export const PageDocsSwitch = () => {
  return (
    <div>
      <div className="p-4">
        <Switch />
        <Switch label="toggle me" id="toggle-me" />
      </div>
    </div>
  );
};
