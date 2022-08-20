import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
