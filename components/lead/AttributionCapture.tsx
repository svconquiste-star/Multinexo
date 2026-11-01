'use client'

import { useEffect } from 'react'
import { captureAttr } from '@/lib/attribution'

// Não desenha nada: só guarda a origem do clique (gclid, UTM…) assim que a
// página carrega, em qualquer rota do site.
export default function AttributionCapture() {
  useEffect(() => {
    captureAttr()
  }, [])
  return null
}
