// src/pages/PageResolver.jsx
import { useParams } from 'react-router-dom';
import GenericPage from './GenericPage/GenericPage';
import ServicesPage from './ServicesPage/ServicesPage';
import MobileSchedulePage from './MobileSchedulePage/MobileSchedulePage'; // We'll create this next
import pageData from '../data/pages';
import groupPages from '../data/groupPages';
import breadcrumbPages from '../data/breadcrumbPages';

const PageResolver = () => {
  const { slug } = useParams();

  // Check pageData first
  const pageFromPageData = pageData.find((p) => p.slug === slug);
  if (pageFromPageData) {
    return <GenericPage pageData={[pageFromPageData]} />;
  }

  // Check groupPages
  const pageFromGroupPages = groupPages.find((p) => p.slug === slug);
  if (pageFromGroupPages) {
    return <GenericPage pageData={[pageFromGroupPages]} />;
  }

  // Check breadcrumbPages for custom pages
  const pageFromBreadcrumbPages = breadcrumbPages.find((p) => p.slug === slug);
  if (pageFromBreadcrumbPages) {
    if (pageFromBreadcrumbPages.slug === "services") {
      return <ServicesPage />;
    }
    if (pageFromBreadcrumbPages.slug === "mobile-schedule") {
      return <MobileSchedulePage />;
    }
  }

  // Fallback for unknown pages
  return <div>Страница не найдена</div>;
};

export default PageResolver;