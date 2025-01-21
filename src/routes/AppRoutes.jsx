import { Routes, Route } from 'react-router-dom'
    import HomePage from '../pages/HomePage'
    import MenuPage from '../pages/MenuPage'
    import OrderPage from '../pages/OrderPage'
    import AccountPage from '../pages/AccountPage'
    import Layout from '../components/Layout'

    function AppRoutes() {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
        </Routes>
      )
    }

    export default AppRoutes
