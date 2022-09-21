import { Button } from '@adiago/components';
import { EllipsisHorizontalIcon, ArrowDownOnSquareIcon } from '@heroicons/react/24/solid';

export const PageDocsButton = () => {
  return (
    <div>
      <div className="p-4">
        <Button>Default</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="p-2">
        <div className="p-2 flex space-x-4 items-center">
          <h1>Standard</h1>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="strong">Strong</Button>
          <Button color="error">Error</Button>
          <Button color="opaque">Opaque</Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Outline</h1>
          <Button variant="outline" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" color="strong">
            Strong
          </Button>
          <Button variant="outline" color="error">
            Error
          </Button>
          <Button variant="outline" color="opaque">
            Opaque
          </Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Flat</h1>
          <Button variant="flat" color="primary">
            Primary
          </Button>
          <Button variant="flat" color="secondary">
            Secondary
          </Button>
          <Button variant="flat" color="strong">
            Strong
          </Button>
          <Button variant="flat" color="error">
            Error
          </Button>
          <Button variant="flat" color="opaque">
            Opaque
          </Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Transparent</h1>
          <Button variant="transparent" color="primary">
            Primary
          </Button>
          <Button variant="transparent" color="secondary">
            Secondary
          </Button>
          <Button variant="transparent" color="strong">
            Strong
          </Button>
          <Button variant="transparent" color="error">
            Error
          </Button>
          <Button variant="transparent" color="opaque">
            Opaque
          </Button>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 flex space-x-4 items-center">
          <h1>Sizes</h1>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium (Default)</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Pill</h1>
          <Button shape="pill" size="xs">
            Extra Small
          </Button>
          <Button shape="pill" size="sm">
            Small
          </Button>
          <Button shape="pill" size="md">
            Medium (Default)
          </Button>
          <Button shape="pill" size="lg">
            Large
          </Button>
          <Button shape="pill" size="xl">
            Extra Large
          </Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Circle</h1>
          <Button shape="circle" size="xs">
            xs
          </Button>
          <Button shape="circle" size="sm">
            sm
          </Button>
          <Button shape="circle" size="md">
            md
          </Button>
          <Button shape="circle" size="lg">
            lg
          </Button>
          <Button shape="circle" size="xl">
            xl
          </Button>
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>XS Icons</h1>
          <Button shape="circle" size="xs" variant="transparent" icon={<EllipsisHorizontalIcon />} />
          <Button
            shape="pill"
            size="xs"
            variant="transparent"
            color="secondary"
            icon={<EllipsisHorizontalIcon />}></Button>
          <Button size="xs" variant="transparent" color="strong" icon={<EllipsisHorizontalIcon />} />
          <Button size="xs" variant="transparent" color="strong" icon={<ArrowDownOnSquareIcon />} />
        </div>
        <div className="p-2 flex space-x-4 items-center">
          <h1>Small Icons</h1>
          <Button shape="circle" size="sm" variant="transparent" icon={<ArrowDownOnSquareIcon />} />
          <Button
            shape="pill"
            size="sm"
            variant="transparent"
            color="secondary"
            icon={<EllipsisHorizontalIcon />}></Button>
          <Button size="sm" variant="transparent" color="strong" icon={<EllipsisHorizontalIcon />} />
        </div>
      </div>
    </div>
  );
};
