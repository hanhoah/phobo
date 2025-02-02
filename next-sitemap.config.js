/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.phobo.de",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // optional: if you want to include other languages
  alternateRefs: [
    {
      href: "https://www.phobo.de/de",
      hreflang: "de",
    },
    {
      href: "https://www.phobo.de/zh",
      hreflang: "zh",
    },
    {
      href: "https://www.phobo.de/vi",
      hreflang: "vi",
    },
    {
      href: "https://www.phobo.de/en",
      hreflang: "en",
    },
    {
      href: "https://www.phobo.de/ja",
      hreflang: "ja",
    },
    // Fügen Sie hier weitere Sprachen hinzu
  ],
  transform: async (config, path) => {
    // Extrahiere die Sprache aus dem Pfad (z.B. /de/blog/... → de)
    const locale = path.split("/")[1];
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
      alternateRefs: config.alternateRefs,
    };
  },
  // Dynamische Routen für Blog-Beiträge
  additionalPaths: async (config) => {
    const blogPosts = await fetchBlogPosts();
    const locales = ["de", "zh", "vi", "en", "ja"]; // Liste der unterstützten Sprachen
    const paths = [];

    // Erstelle sprachspezifische Sitemaps
    locales.forEach((locale) => {
      const localePosts = blogPosts.filter((post) => post.locale === locale);
      localePosts.forEach((post) => {
        paths.push({
          loc: `${config.siteUrl}/${locale}/blog/${post.slug}`,
          lastmod: new Date().toISOString(),
          changefreq: "daily",
          priority: 0.7,
          alternateRefs: locales.map((altLocale) => ({
            href: `${config.siteUrl}/${altLocale}/blog/${post.slug}`,
            hreflang: altLocale,
          })),
        });
      });
    });

    return paths;
  },
};

const fs = require("fs");
const path = require("path");

function fetchBlogPosts() {
  const locales = ["de", "en", "ja", "vi", "zh"];
  const allPosts = [];

  locales.forEach((locale) => {
    const postsDirectory = path.join(process.cwd(), "src/posts", locale);
    console.log("postsDirectory", postsDirectory);
    const filenames = fs.readdirSync(postsDirectory);

    filenames.forEach((filename) => {
      const slug = filename.replace(/\.md$/, "");
      allPosts.push({ slug, locale });
    });
  });

  return allPosts;
}
