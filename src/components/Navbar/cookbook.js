import Footer from "../Footer/footer";
import Header from "../Header/header";
import Navbar from "./navbar";
import './cookbook.css';

function CookBook() {
    return (
        <><><Header />
        <Navbar />
        <div className="cookbook-title">
            <h1>My Cookbook</h1></div></>
        <Footer /></>
    )
}

export default CookBook;