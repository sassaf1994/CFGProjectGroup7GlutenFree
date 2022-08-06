import Footer from "../Footer/footer";
import Header from "../Header/header";
import Navbar from "./navbar";
import {Helmet} from 'react-helmet';

import './cookbook.css';

function CookBook() {
    return (
        <><><Header />
        <Navbar />
        <Helmet>
                <title> 
                    EasyEats | My Cookbook
                    </title>
                    <link
          rel="icon"
          type="image/png"
          href="/Users/danielleplumb/Desktop/CFG/Project/Project-code/project/public/favicon.ico"
          sizes="16x16"
        />
            </Helmet>
        <div className="cookbook-title">
        <h1>My Cookbook</h1></div></>
        <Footer /></>
    )
}

export default CookBook;