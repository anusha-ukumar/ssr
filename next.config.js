/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/news-feed/general",
        permanent: true
      },
      {
        source: "/news-feed",
        destination: "/news-feed/general",
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
