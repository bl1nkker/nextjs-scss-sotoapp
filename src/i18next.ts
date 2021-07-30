import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next.use(Backend)
// detect user language
.use(LanguageDetector).use(initReactI18next).init({
    // language to use if translations in user language are not available. aka Default Language
    fallbackLng: 'en',
    debug: true,
    detection:{
        // Detection will firstly check queryString, and the user's cookies
        order: ["queryString", "cookie"],
        caches: ['cookie']    
    },
    interpolation:{
        escapeValue: false
    }
})

export default i18next
