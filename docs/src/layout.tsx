import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Sidebar } from '@adiago/components';
import * as docsPages from './pages/docs';
import { LayoutHeader } from './layout-header';

const DocsPages: Record<string, any> = docsPages;

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const { pageName } = useParams();
  const pageComponentName = 'PageDocs' + pageName;

  React.useEffect(() => {
    if (!pageName || !DocsPages[pageComponentName]) {
      navigate('/docs/Button');
    }
  }, []);

  const cList = Object.keys(DocsPages).map((dp) => dp.slice(8));
  const LayoutPage = DocsPages[pageComponentName];

  return (
    <div className="adiago-layout h-full">
      <LayoutHeader />
      <div className="adiago-layout-body flex w-full h-[calc(100%-3rem)]">
        <Sidebar.Root>
          <Sidebar.Content className="p-2">
            {cList.map((name) => (
              <Link key={name} to={`/docs/${name}`}>
                <Sidebar.ListItem active={name === pageName}>{name.replaceAll('_', ' ')}</Sidebar.ListItem>
              </Link>
            ))}
          </Sidebar.Content>
        </Sidebar.Root>
        <div className="adiago-layout-view p-4 w-full h-full">
          <LayoutPage />
        </div>
      </div>
    </div>
  );
};

Layout.displayName = 'Layout';
