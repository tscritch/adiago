import { Card, Button } from '@adiago/components';

export const PageDocsCard = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
        <Card.Root />

        <Card.Root>
          <Card.Body>
            <p>Some content</p>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header
            title="Card Title"
            subtitle="Card Subtitle"
            actions={[
              {
                type: 'basic',
                label: 'Action',
                onClick: () => {}
              }
            ]}
          />
          <Card.Body>
            <p>Some content</p>
          </Card.Body>
          <Card.Footer className="justify-end">
            <Button size="sm" variant="flat">
              Cool!
            </Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  );
};
