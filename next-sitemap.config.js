/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.phobo.de",
  generateRobotsTxt: true, // (optional)
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
  // Dynamische Routen für Blog-Beiträge
  additionalPaths: async (config) => {
    const blogPosts = await fetchBlogPosts(); // Funktion, die alle Blog-URLs abruft
    return blogPosts.map((post) => ({
      loc: `${config.siteUrl}/${post.locale}/blog/${post.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
      alternateRefs: [
        {
          href: `${config.siteUrl}/de/blog/${post.slug}`,
          hreflang: "de",
        },
        {
          href: `${config.siteUrl}/zh/blog/${post.slug}`,
          hreflang: "zh",
        },
        {
          href: `${config.siteUrl}/vi/blog/${post.slug}`,
          hreflang: "vi",
        },
        {
          href: `${config.siteUrl}/en/blog/${post.slug}`,
          hreflang: "en",
        },
        {
          href: `${config.siteUrl}/ja/blog/${post.slug}`,
          hreflang: "ja",
        },
        // Weitere Sprachen hinzufügen
      ],
    }));
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
