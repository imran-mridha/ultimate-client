import { createBrowserRouter } from "react-router-dom";
import Attendance from "../../Pages/Attendance/Attendance";
import LogInPage from "../../Pages/LogInPage/LogInPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpPage />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />
  },
  {
    path: 'login',
    element: <LogInPage />
  },
  {
    path: 'attendance',
    element: <Attendance />
  }
  
])