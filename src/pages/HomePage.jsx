import { useTranslation } from 'react-i18next'

    function HomePage() {
      const { t } = useTranslation()
      
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
          {/* Add homepage content here */}
        </div>
      )
    }

    export default HomePage
