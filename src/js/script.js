import './../css/base.css'
import './../css/components.css'
import './../css/media.css'
import {setDefaultSubscription, setupSubscriptionListeners} from './modules/subscriptions.js'
import {applyTranslations, determineLanguage} from './modules/translations.js'

document.addEventListener('DOMContentLoaded', () => {
  const lang = determineLanguage()
  applyTranslations(lang)
  setDefaultSubscription()
  setupSubscriptionListeners()
})