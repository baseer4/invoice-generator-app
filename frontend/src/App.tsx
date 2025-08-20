import {Routes, Route} from 'react-router-dom'
import GeneratePDFPage from './pages/GeneratePDFPage'
import RegisterPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import LayoutWithNavbar from './layout/LayoutWithNavbar'

function App() {

  return (
    <>
      <Routes>
        <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/generate-pdf" element={<GeneratePDFPage />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
