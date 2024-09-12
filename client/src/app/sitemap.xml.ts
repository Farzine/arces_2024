import { GetServerSideProps } from 'next';

// Define the base URL of your site
const baseUrl = 'https://icerie2025.sust.edu';

// Define the static pages of your website
const staticPages = [
  '/',
  '/tracks',
  '/authors/submission',
  '/authors/callForPaper',
  '/authors/importantDates',
  '/registration/registrationFees',
  '/attendee',
  '/schedule',
  '/gallery',
  '/about/icerie',
  '/about/committee',
  '/about/sponsors',
  '/about/venue',
  '/contact',
];

// Generate sitemap
function generateSitemap() {
  const date = new Date().toISOString();

  const staticUrls = staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join('');

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
    </urlset>
  `;
}

// Create a server-side function to serve the sitemap
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
