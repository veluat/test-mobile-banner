import en from '../i18n/en.json';
import de from '../i18n/de.json';
import ja from '../i18n/ja.json';
import pt from '../i18n/pt.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

const translations = { en, de, pt, ja, fr, es };

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      element.innerHTML = translation.replace('{{price}}', element.getAttribute('data-price') || '');
    }
  });
}

function determineLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const userLang = langParam || navigator.language.slice(0, 2);
  const supportedLanguages = ['en', 'de', 'es', 'fr', 'ja', 'pt'];
  return supportedLanguages.includes(userLang) ? userLang : 'en';
}

function adjustFontSize(lang) {
  document
    .querySelectorAll('.subscription__title, .subscription__subtitle, .subscription__price, .subscription__best-offer, .banner__footer')
    .forEach((element) => {
      const parentWidth = element.parentElement.offsetWidth;
      const elementWidth = element.scrollWidth;

      if (elementWidth > parentWidth) {
        let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

        if (lang === 'de' && element.classList.contains('subscription__title')) {
          fontSize *= 0.5;
        }

        while (element.scrollWidth > parentWidth && fontSize > 10) {
          fontSize -= 1;
          element.style.fontSize = fontSize + 'px';
        }
      }

      if (element.classList.contains('banner__footer')) {
        element.style.gap = '15px';
      }
    });
}

function setDefaultSubscription() {
  const defaultSubscription = document.querySelector('.subscription[data-link="https://google.com/"]');
  const continueButton = document.querySelector('.banner__continue');

  if (defaultSubscription && continueButton) {
    defaultSubscription.classList.add('subscription--active');
    continueButton.setAttribute('data-link', defaultSubscription.getAttribute('data-link'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = determineLanguage();
  applyTranslations(lang);
  adjustFontSize(lang);
  setDefaultSubscription();

  const subscriptionItems = document.querySelectorAll('.subscription');
  const continueButton = document.querySelector('.banner__continue');

  subscriptionItems.forEach((item) => {
    item.addEventListener('click', function () {
      subscriptionItems.forEach((i) => i.classList.remove('subscription--active'));
      this.classList.add('subscription--active');
      const hrefValue = this.getAttribute('data-link');
      continueButton.setAttribute('data-link', hrefValue);
    });
  });

  continueButton.addEventListener('click', function () {
    const selectedLink = continueButton.getAttribute('data-link');
    if (selectedLink) {
      window.location.href = selectedLink;
    } else {
      alert('Please select a subscription plan.');
    }
  });
});