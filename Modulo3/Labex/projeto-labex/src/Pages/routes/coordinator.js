import { useNavigate } from "react-router-dom";

// HomePage
export const goToViagens = (navigate) => {
  navigate("/ListTripsPage");
};
export const goToLogin = (navigate) => {
  navigate("/LoginPage");
};

export const goToApplicationForm = (navigate) => {
  navigate("/ApplicationFormPage");
};
export const goToHome = (navigate) => {
  navigate("/Home");
};
export const goToListTrips = (navigate) => {
  navigate(-1);
};

export const goToAdminHome = (navigate) => {
  navigate("/AdminHomePage");
};
export const goToCreateTrip = (navigate) => {
  navigate("/CreateTripPage");
};
export const goToTripDetail = (navigate) => {
  navigate("/TripDetailPage");
};
