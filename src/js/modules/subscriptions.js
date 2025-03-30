import {SELECTORS} from './constants.js'

export function setDefaultSubscription() {
  const defaultSubscription = document.querySelector(SELECTORS.DEFAULT_SUBSCRIPTION)
  const continueButton = document.querySelector(SELECTORS.CONTINUE_BUTTON)

  if (defaultSubscription && continueButton) {
    defaultSubscription.classList.add('subscription--active')
    continueButton.setAttribute('data-link', defaultSubscription.getAttribute('data-link'))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setDefaultSubscription()
  setupSubscriptionListeners()
})

export function setupSubscriptionListeners() {
  const subscriptionItems = document.querySelectorAll(SELECTORS.SUBSCRIPTION)
  const continueButton = document.querySelector(SELECTORS.CONTINUE_BUTTON)

  subscriptionItems.forEach((item) => {
    item.addEventListener('click', function () {
      subscriptionItems.forEach((i) => i.classList.remove('subscription--active'))
      this.classList.add('subscription--active')
      const hrefValue = this.getAttribute('data-link')
      continueButton.setAttribute('data-link', hrefValue)
    })
  })

  continueButton.addEventListener('click', function () {
    const selectedLink = continueButton.getAttribute('data-link')
    if (selectedLink) {
      window.location.href = selectedLink
    } else {
      alert('Please select a subscription plan.')
    }
  })
}