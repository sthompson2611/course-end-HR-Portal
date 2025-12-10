import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import HrPage from './pages/hrPage.jsx';
import EmployeePage from './pages/employeePage.jsx';


function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HR-Portal" element={<HrPage />} />
          <Route path="/Employee-Portal" element={<EmployeePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
