import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import Home from './components/Home'; // Import the OverviewCards component
import EmployeeList from './components/Employee/EmployeeList/EmployeeList';
import AssignOrder from './components/AssignOrder/AssignOrder';
import AddEmployeeRole from './components/AddEmployeeRole/AddEmployeeRole';
import AllCustomers from './components/AllCustomers/AllCustomers';
import Payments from './components/Payments/Payments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* This renders the Login component */}
      <Route path="/home" element={<Home />} /> {/* This renders the OverviewCards component */}
      <Route path='/employeelist' element={<EmployeeList />} />
      <Route path='/assignorder' element={<AssignOrder />} />
      <Route path='/addemployeerole' element={<AddEmployeeRole />} />
      <Route path='/allcustomers' element={<AllCustomers />} />
      <Route path='/payments' element={<Payments />} />
      <Route path="/payments/:paymentType" element={<Payments />} />
      <Route path="/payments/:paymentType/:subMenuType" element={<Payments />} />
    </Routes>
  );
}

export default App;
