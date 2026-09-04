import type { Metadata } from 'next'
import AdminPanel from './AdminPanel'

export const metadata: Metadata = {
  title: 'Área de Propostas | Multinexo',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return <AdminPanel />
}
