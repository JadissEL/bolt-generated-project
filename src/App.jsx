import { BrowserRouter } from 'react-router-dom'
    import AppRoutes from './routes/AppRoutes'
    import { I18nextProvider } from 'react-i18next'
    import i18n from './i18n'

    function App() {
      return (
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </I18nextProvider>
      )
    }

    export default App
