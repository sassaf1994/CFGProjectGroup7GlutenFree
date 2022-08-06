import Footer from "../Footer/footer";
import Header from "../Header/header";
import Navbar from "./navbar";
import {Helmet} from 'react-helmet';
import './home.css';


function Home() {

    return (
   <><><Header />
            <Navbar />
            <Helmet>
                <title> 
                    EasyEats | Home
                    </title>
            </Helmet>
            <div className="gluten-title"> 
            <h1>Gluten Free</h1></div></>
            <Footer /></>
           
    )
}

export default Home;