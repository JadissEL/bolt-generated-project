import i18n from 'i18next'
    import { initReactI18next } from 'react-i18next'

    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {
            welcome: 'Welcome',
            menu: 'Menu',
            order: 'Order',
            account: 'Account'
          }
        },
        fr: {
          translation: {
            welcome: 'Bienvenue',
            menu: 'Menu',
            order: 'Commande',
            account: 'Compte'
          }
        },
        ar: {
          translation: {
            welcome: 'مرحبا',
            menu: 'قائمة الطعام',
            order: 'طلب',
            account: 'حساب'
          }
        }
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    })

    export default i18n
