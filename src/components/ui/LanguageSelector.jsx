import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'fi', label: 'FI', flag: '🇫🇮' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'vi', label: 'VI', flag: '🇻🇳' },
  ]

  return (
    <div className="flex items-center space-x-1 bg-neutral-900 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${
            i18n.language === lang.code
              ? 'bg-primary text-neutral-black shadow-md'
              : 'text-primary hover:text-white hover:bg-neutral-800'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="hidden sm:inline mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
