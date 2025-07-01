import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagement from './pages/EmployeeManagement';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagement />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;