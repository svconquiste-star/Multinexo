import type { MetadataRoute } from 'next'

// Servido em /manifest.webmanifest (Next adiciona o <link rel="manifest"> sozinho).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Multinexo · Daniel Aguiar',
    short_name: 'Multinexo',
    description: 'Tráfego pago, SEO, GEO e dashboards para o seu negócio ser encontrado e escolhido.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#8B5CF6',
    lang: 'pt-BR',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
