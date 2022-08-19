import { Link, useParams } from 'react-router-dom';
import * as docsPages from './pages/docs';
import { LayoutHeader } from './layout-header';
import React from 'react';
const DocsPages: Record<string, any> = docsPages;

export const Layout: React.FC = () => {
  const { pageName } = useParams();
  const pageComponentName = 'PageDocs' + pageName;

  const cList = Object.keys(DocsPages).map((dp) => dp.slice(8));
  const LayoutPage =
    pageName && DocsPages[pageComponentName] ? DocsPages[pageComponentName] : <docsPages.PageDocsNotFound />;

  return (
    <div className="adiago-layout">
      <LayoutHeader />
      <div className="adiago-layout-navigation">
        {cList.map((name) => (
          <div key={name} className="p-2">
            <Link to={`/docs/${name}`}>{name}</Link>
          </div>
        ))}
      </div>
      <div className="adiago-layout-view p-4">
        <LayoutPage />
      </div>
    </div>
  );
};

Layout.displayName = 'Layout';
