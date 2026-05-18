import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/:path*`
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  },
  images: {
    unoptimized: true, //Для старых процессоров, которые не поддерживают инструкции AVX для кэширования изображения
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'backend',
        port: '4200',
        pathname: '/uploads/**'
      }
    ]
  }
}

export default nextConfig
