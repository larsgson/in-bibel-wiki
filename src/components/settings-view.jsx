import { useTranslation, Trans } from 'react-i18next'
import { useState, Suspense } from 'react'
import ISO6391 from 'iso-639-1'
import { contentLangData } from '../utils/dynamic-lang'

export default function SettingsView() {
  const { t, i18n } = useTranslation();
  const langsList = i18n?.options?.supportedLngs
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Languages</div>
        <div>
          {Object.keys(contentLangData).map((lng) => {
            const lng2letters = contentLangData[lng]?.iso639
            const nativeStr = contentLangData[lng]?.name
            const engStr = contentLangData[lng]?.engName
            let useLangName = `${nativeStr} - ${engStr}`
            if (lng.length>3) {
              const countryCode = lng.slice(3,5)
              useLangName = `${nativeStr} (${countryCode}) - ${engStr}`
            }
            const isSelected = i18n.language === lng
            return (
              <button 
                key={lng} 
                style={{ 
                  fontWeight: isSelected ? 'bold' : 'normal', 
                  height: isSelected ? 50 : 30, 
                  marginRight: 5,
                  marginBottom: 3,
                }} 
                type="submit" 
                onClick={() => {
                  i18n.changeLanguage(lng);
                }
              }>
                {useLangName}
              </button>
            )
          })}
        </div>
      </header>
      <div>
      {/* <button onClick={() => window.open("https://github.com/larsgson/bibel-wiki/blob/main/roadmap.md", "_blank")}>
        Road map
      </button> */}
      </div>
    </div>
  );
}
