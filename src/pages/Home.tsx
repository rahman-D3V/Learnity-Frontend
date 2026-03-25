import Footer from "../components/common/Footer";
import Section1 from "../components/core/HomePage/Section1";
import Section2 from "../components/core/HomePage/Section2";
import Section3 from "../components/core/HomePage/Section3";

const Home = () => {
  return (
    <div className="bg-richblack-900 flex flex-col items-center overflow-x-hidden relative z-20 ">
      <Section1 />

      <div className="bg-pure-greys-5 h-100 w-full -mt-85"></div>

      <div className="w-full bg- flex bg-pure-greys-5  justify-center">
        <Section2 />
      </div>

      <Section3 />

      <Footer />
    </div>
  );
};

export default Home;
