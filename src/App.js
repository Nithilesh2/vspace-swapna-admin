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
import AddCar from './components/EditCars/AddCar/AddCar';
import EditCar from './components/EditCars/EditCar/EditCar';
import ContactUs from './components/ContactUs/ContactUs';
import AllBookings from './components/AllBookings/AllBookings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* This renders the Login component */}
      <Route path="/home" element={<Home />} /> {/* This renders the OverviewCards component */}
      <Route path='/employeelist' element={<EmployeeList />} />
      <Route path='/assignorder' element={<AssignOrder />} />
      <Route path='/addemployeerole' element={<AddEmployeeRole />} />
      <Route path='/allcustomers' element={<AllCustomers />} />
      <Route path='/allbookings' element={<AllBookings />} />
      <Route path='/payments' element={<Payments />} />
      <Route path='/allcars' element={<Cars />} />
      <Route path='/essentials/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/essentials/termsandconditions' element={<TermsAndConditions />} />
      <Route path='/essentials/faqs' element={<Faqs />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/editcars/addcar' element={<AddCar />} />
      <Route path='/editcars/editcar' element={<EditCar />} />
      <Route path="/payments/:paymentType" element={<Payments />} />
      <Route path="/payments/:paymentType/:subMenuType" element={<Payments />} />
    </Routes>
  );
}

export default App;
