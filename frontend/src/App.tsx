import {Routes, Route} from 'react-router-dom'
import GeneratePDFPage from './pages/GeneratePDFPage'
import RegisterPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import LayoutWithNavbar from './layout/LayoutWithNavbar'
import ProductsPage from './pages/ProductPage';

function App() {

  return (
    <>
      <Routes>
        <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/generate-pdf" element={<GeneratePDFPage />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
