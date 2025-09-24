/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: '',
  distDir: 'out',
  // Optimize for static export
  generateBuildId: async () => {
    return 'static-build'
  }
}

module.exports = nextConfig
