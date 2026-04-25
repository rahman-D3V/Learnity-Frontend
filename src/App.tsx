import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import { ResetPassword, ResetPasswordLink } from "./pages/ResetPassword";
import ResendEmail from "./pages/ResendEmail";
import Course from "./pages/Course";
import Navbar from "./components/common/Navbar";
import Test from "./pages/Test";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import EnrolledCourse from "./components/core/Dashboard/EnrolledCourses";
import Setting from "./components/core/Dashboard/Setting";
import Cart from "./components/core/Dashboard/Cart";
import { CreateCourse } from "./components/core/Dashboard/createCourse/CreateCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import Step1 from "./components/core/Dashboard/editCourse/Step1";

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
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/resend-email" element={<ResendEmail />} />
        <Route path="/course" element={<Course />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard/instructor" element={<Dashboard />} />

        <Route element={<Dashboard />}>
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route
            path="/dashboard/enrolled-courses"
            element={<EnrolledCourse />}
          />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="/dashboard/cart" element={<Cart />} />
          <Route path="/dashboard/add-course" element={<CreateCourse />} />
          <Route path="/dashboard/my-courses" element={<MyCourses />} />
          <Route path="/dashboard/edit-course/:id" element={<Step1 />} />
        </Route>

        <Route path="*" element="Galat page pe aagye AAAAP..." />

        <Route path="/catelog/:name" element={<Course />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
