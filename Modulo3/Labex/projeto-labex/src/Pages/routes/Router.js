import React from "react";
import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../LoginPage/LoginPage";
import AdminHomePage from "../adminHomePage/adminHomePage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import TripDetaisPage from "../TripDetaisPage/TripDetaisPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 const Router=()=>{
  return(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="ListTripsPage" element={<ListTripsPage />} />
      <Route path="ApplicationFormPage" element={<ApplicationFormPage />} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="AdminHomePage" element={<AdminHomePage />} />
      <Route path="CreateTripPage" element={<CreateTripPage />} />
      <Route path="TripDetailPage" element={<TripDetaisPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  )
}
export default Router;
