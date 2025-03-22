import './../css/base.css'
import './../css/components.css'
import './../css/media.css'
import {applyTranslations, determineLanguage} from './modules/translations'
import {setDefaultSubscription, setupSubscriptionListeners} from './modules/subscriptions'

document.addEventListener('DOMContentLoaded', () => {
  const lang = determineLanguage()
  applyTranslations(lang)
  setDefaultSubscription()
  setupSubscriptionListeners()
})