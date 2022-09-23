import React from 'react';
import {
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from './dropdown';

type DropdownItemColor = 'primary' | 'secondary' | 'warning' | 'danger' | 'info';

interface DropdownItemBasic {
  type: 'basic';
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color?: DropdownItemColor;
}

interface DropdownItemSeparator {
  type: 'separator';
}

interface DropdownItemLabel {
  type: 'label';
  label: string;
}

interface DropdownItemSubmenu {
  type: 'submenu';
  label: string;
  items: DropdownItem[];
}

interface DropdownItemRadioGroup {
  type: 'radio-group';
  label: string;
  options: DropdownItemRadioOption[];
  onChange: (value: string) => void;
}

interface DropdownItemRadioOption {
  label: string;
  value: string;
}

interface DropdownItemCheckbox {
  type: 'checkbox';
  label: string;
  defaultChecked?: boolean;
  onChange: (checked: boolean) => void;
}

export type DropdownItem =
  | DropdownItemBasic
  | DropdownItemSeparator
  | DropdownItemLabel
  | DropdownItemSubmenu
  | DropdownItemRadioGroup
  | DropdownItemCheckbox;

export interface DropdownComposedProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  align?: 'start' | 'end' | 'center';
}

export const DropdownComposed: React.FC<DropdownComposedProps> = ({ items, trigger, align }) => {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent align={align}>{renderItems(items)}</DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

const renderItems = (items: DropdownItem[]) => {
  return items.map((item) => renderItemFns[item.type](item as any));
};

const renderItemFns = {
  basic: (item: DropdownItemBasic) => (
    <DropdownMenuItem disabled={item.disabled} onClick={item.onClick}>
      {item.label}
    </DropdownMenuItem>
  ),
  separator: () => <DropdownMenuSeparator />,
  label: (item: DropdownItemLabel) => <DropdownMenuLabel>{item.label}</DropdownMenuLabel>,
  submenu: (item: DropdownItemSubmenu) => (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>{renderItems(item.items)}</DropdownMenuSubContent>
    </DropdownMenuSub>
  ),
  'radio-group': (item: DropdownItemRadioGroup) => {
    const [value, setValue] = React.useState(item.options[0].value);

    const radioItems = React.useMemo(
      () =>
        item.options.map((option, i) => (
          <DropdownMenuRadioItem
            key={`adiago-dropdown-${option.value}-${i}`}
            value={option.value}
            onSelect={(e) => e.preventDefault()}>
            {option.label}
          </DropdownMenuRadioItem>
        )),
      []
    );

    return (
      <>
        <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(value) => {
            setValue(value);
            item.onChange(value);
          }}>
          {radioItems}
        </DropdownMenuRadioGroup>
      </>
    );
  },
  checkbox: (item: DropdownItemCheckbox) => {
    const [checked, setChecked] = React.useState(item.defaultChecked || false);
    return (
      <DropdownMenuCheckboxItem
        checked={checked}
        onCheckedChange={(value) => {
          setChecked(value);
          item.onChange(value);
        }}>
        {item.label}
      </DropdownMenuCheckboxItem>
    );
  }
};
