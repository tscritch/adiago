import { Input } from '@adiago/components';

export const PageDocsInput = () => {
  return (
    <div>
      <div className="p-4">
        <Input placeholder="Enter text here" />
        <Input label="Name" />
      </div>
      <div className="p-4">
        <Input variant="invisible" placeholder="Enter text here" />
        <Input variant="invisible" label="Name" />
      </div>
    </div>
  );
};
