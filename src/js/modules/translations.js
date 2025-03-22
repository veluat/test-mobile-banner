import {LANGUAGES, SELECTORS} from './constants'
import en from './../../i18n/en.json'
import de from './../../i18n/de.json'
import ja from './../../i18n/ja.json'
import pt from './../../i18n/pt.json'
import fr from './../../i18n/fr.json'
import es from './../../i18n/es.json'

const translations = {en, de, pt, ja, fr, es}

export function applyTranslations(lang) {
  const elements = document.querySelectorAll(SELECTORS.TRANSLATION_ELEMENTS)
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n')
    const translation = translations[lang][key]
    if (translation) {
      element.innerHTML = translation.replace('{{price}}', element.getAttribute('data-price') || '')
    }
  })
}

export function determineLanguage() {
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')
  const userLang = langParam || navigator.language.slice(0, 2)
  return LANGUAGES.SUPPORTED.includes(userLang) ? userLang : LANGUAGES.DEFAULT
}

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const lang = getParameterByName('lang') || 'en';
document.documentElement.lang = lang;