
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./app/page";
import DashboardPage from "./app/Administrateur/dashboard/page";

function App() {
  return (
    <>

      <Router>
  

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} />
         
        
          </Routes>
          </Router>

          </>
  )}