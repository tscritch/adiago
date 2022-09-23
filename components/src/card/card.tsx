import React from 'react';
import classnames from 'classnames';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

import { DropdownItem } from '../dropdown/dropdown-composed';
import Dropdown from '../dropdown';
import { Button } from '../button';

export interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardRoot: React.FC<CardRootProps> = ({ classOverride, className, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-card',
      'shadow-md border border-neutral-100 rounded bg-white dark:bg-neutral-900 dark:border-neutral-800',
      className
    );

  return <div {...props} className={classNames} />;
};

CardRoot.displayName = 'CardRoot';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classOverride?: string;
  title?: string;
  subtitle?: string;
  actions?: DropdownItem[];
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, classOverride, title, subtitle, actions }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-card-header',
      'flex items-center p-3 border-b border-neutral-200 dark:border-neutral-800',
      className
    );

  return (
    <div className={classNames}>
      {title ? <CardTitle className="">{title}</CardTitle> : null}
      {subtitle ? <CardSubtitle className="pt-[2px] px-2 flex-grow">{subtitle}</CardSubtitle> : null}
      {actions ? <CardActions actions={actions} /> : <div className="flex-grow" />}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, classOverride }) => {
  const classNames =
    classOverride ??
    classnames('adiago-card-title', 'text-md font-semibold text-neutral-900 dark:text-white', className);

  return <h1 className={classNames}>{children}</h1>;
};

CardTitle.displayName = 'CardTitle';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ children, className, classOverride }) => {
  const classNames =
    classOverride ??
    classnames('adiago-card-subtitle', 'text-sm font-normal text-neutral-600 dark:text-neutral-300', className);

  return <h1 className={classNames}>{children}</h1>;
};

CardSubtitle.displayName = 'CardSubtitle';

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classOverride?: string;
  actions: DropdownItem[];
}

export const CardActions: React.FC<CardActionsProps> = ({ className, classOverride, actions }) => {
  const classNames = classOverride ?? classnames('adiago-card-actions', 'flex', className);

  const actionTrigger = React.useMemo(() => {
    return (
      <Button
        variant="transparent"
        size="sm"
        color="opaque"
        className="flex items-center"
        icon={<EllipsisVerticalIcon />}
      />
    );
  }, []);

  return (
    <div className={classNames}>
      <Dropdown.Composed items={actions} trigger={actionTrigger} align="end" />
    </div>
  );
};

CardActions.displayName = 'CardActions';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className, classOverride }) => {
  const classNames = classOverride ?? classnames('adiago-card-body', 'p-3 min-h-[2rem]', className);

  return <div className={classNames}>{children}</div>;
};

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className, classOverride }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-card-footer',
      'flex p-2 w-full border-t border-neutral-200 min-h-[2rem] items-center dark:border-neutral-800',
      className
    );

  return <div className={classNames}>{children}</div>;
};

CardFooter.displayName = 'CardFooter';
