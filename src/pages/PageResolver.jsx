// src/pages/PageResolver.jsx
import { useParams } from 'react-router-dom';
import GenericPage from './GenericPage/GenericPage';
import pageData from '../data/pages';
import groupPages from '../data/groupPages';

const PageResolver = () => {
  const { slug } = useParams();

  const pageFromPageData = pageData.find((p) => p.slug === slug);
  if (pageFromPageData) {
    return <GenericPage pageData={[pageFromPageData]} />;
  }

  const pageFromGroupPages = groupPages.find((p) => p.slug === slug);
  if (pageFromGroupPages) {
    return <GenericPage pageData={[pageFromGroupPages]} />;
  }

  return <div>Страница не найдена</div>;
};

export default PageResolver;