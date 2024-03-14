import { Helmet } from 'react-helmet';

const googleAdId = 'ca-pub-9619773157619761'
export const HeadScript: React.FC = ({
}) => {

  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdId}`
  return (
    <Helmet>
      <script async src={src} crossOrigin='anonymous'></script>
    </Helmet>
  );
};