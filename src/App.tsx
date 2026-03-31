import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import {
  ResetComplete,
  ResetPassword,
  ResetPasswordLink,
} from "./pages/ResetPassword";
import ResendEmail from "./pages/ResendEmail";
import Course from "./pages/Course";
import Navbar from "./components/common/Navbar";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password-link" element={<ResetPasswordLink />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/resend-email" element={<ResendEmail />} />
        <Route path="/reset-complete" element={<ResetComplete />} />
        <Route path="/course" element={<Course />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
