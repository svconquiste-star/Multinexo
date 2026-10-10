// Tipagem dos trackers já carregados no layout (GA4 + Meta Pixel).
export {}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    dataLayer?: any[]
    /** true quando o layout negou o consentimento no carregamento (Europa/UK sem aceite). */
    __mxDeny?: boolean
  }
}
