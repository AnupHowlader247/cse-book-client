import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div className="w-full md:w-11/12 mx-auto">
       <Nav></Nav>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
}

export default Home;
