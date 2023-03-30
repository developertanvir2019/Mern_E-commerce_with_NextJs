import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;