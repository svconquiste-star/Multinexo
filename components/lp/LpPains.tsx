'use client'

import { XCircle } from 'lucide-react'
import type { Dict } from './i18n'

export default function LpPains({ t }: { t: Dict }) {
  const p = t.pains
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">{p.title}</h2>
        <p className="section-subtitle">{p.subtitle}</p>

        <ul className="space-y-4">
          {p.list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5"
            >
              <XCircle size={24} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-center text-lg text-gray-900 font-semibold mt-10">{p.closing}</p>
      </div>
    </section>
  )
}
