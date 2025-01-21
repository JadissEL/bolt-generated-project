import { useTranslation } from 'react-i18next'
    import { Link } from 'react-router-dom'

    function Header() {
      const { t } = useTranslation()
      
      return (
        <header className="bg-primary text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              Restaurant Name
            </Link>
            <div className="flex gap-4">
              <Link to="/menu">{t('menu')}</Link>
              <Link to="/order">{t('order')}</Link>
              <Link to="/account">{t('account')}</Link>
            </div>
          </nav>
        </header>
      )
    }

    export default Header
