import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import Home from './components/Home'; // Import the OverviewCards component
import EmployeeList from './components/Employee/EmployeeList/EmployeeList';
import AssignOrder from './components/AssignOrder/AssignOrder';
import AddEmployeeRole from './components/AddEmployeeRole/AddEmployeeRole';
import AllCustomers from './components/AllCustomers/AllCustomers';
import Payments from './components/Payments/Payments';
import Cars from './components/AllCars/Cars';
import PrivacyPolicy from './components/Essentials/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/Essentials/TermsAndConditions/TermsAndConditions';
import Faqs from './components/Essentials/FAQ\'S/Faqs';
import AboutUs from './components/AboutUs/AboutUs';

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
      <Route path='/allcars' element={<Cars />} />
      <Route path='/essentials/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/essentials/termsandconditions' element={<TermsAndConditions />} />
      <Route path='/essentials/faqs' element={<Faqs />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path="/payments/:paymentType" element={<Payments />} />
      <Route path="/payments/:paymentType/:subMenuType" element={<Payments />} />
    </Routes>
  );
}

export default App;
