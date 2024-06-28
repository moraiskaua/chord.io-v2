import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withNextIntl(nextConfig);
