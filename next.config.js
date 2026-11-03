/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Não expõe "X-Powered-By: Next.js" nas respostas.
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },

  // Cabeçalhos de segurança. Sem CSP de propósito: uma política restritiva
  // quebraria o GA4, o Pixel, o Google Ads e o Clarity.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  // www -> domínio sem www (308, permanente). Reforço: o certificado e o
  // domínio www precisam estar cadastrados no Coolify (veja DEPLOYMENT.md).
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.multinexo.com.br' }],
        destination: 'https://multinexo.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
