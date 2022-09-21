import { Loader } from '@adiago/components';

export const PageDocsLoader = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
        <Loader size="xs" />
        <Loader size="sm" />
        <Loader />
        <Loader size="lg" />
        <Loader size="xl" />
      </div>
    </div>
  );
};
