'use client'

import { useLanguage } from '@/lib/language-context'
import type { Language } from '@/lib/translations'
import { useState } from 'react'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'yo', label: 'Yorùbá', flag: '🇳🇬' },
  ]

  const currentLanguage = languages.find((l) => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30 text-sm font-medium"
        aria-label="Change language"
      >
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-background border border-primary/30 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-primary/10 transition-colors ${
                language === lang.code ? 'bg-primary/20 border-r-2 border-primary' : ''
              } ${lang.code === languages[languages.length - 1].code ? '' : 'border-b border-primary/10'}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.label}</span>
              {language === lang.code && <span className="ml-auto text-primary">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
