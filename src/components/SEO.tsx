import { Helmet } from 'react-helmet-async';

const SEO = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title} | UpSocial</title>
    </Helmet>
  );
};

export default SEO;