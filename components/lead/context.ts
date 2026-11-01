'use client'

import { createContext, useContext } from 'react'

// Contexto pequeno, separado do formulário: o WhatsAppLink (usado também na
// /europa e no /diagnostico) importa só isto, sem carregar o código do modal.

export interface LeadFormContext {
  open: (location: string) => void
}

export const LeadFormCtx = createContext<LeadFormContext | null>(null)

/** null fora do LeadFormProvider (/europa, /diagnostico): o botão vai direto ao WhatsApp. */
export function useLeadForm(): LeadFormContext | null {
  return useContext(LeadFormCtx)
}
