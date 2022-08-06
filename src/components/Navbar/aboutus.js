import Footer from "../Footer/footer";
import Header from "../Header/header";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import './aboutus.css';


function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
}
function AboutUs() {

    return (
        <><><Header />
            <Navbar />
            <Helmet>
                <title> 
                    EasyEats | About Us
                    </title>
            </Helmet>
            <Footer /></><><h1 className="about">
                About Us
            </h1><div className="circle">

                    <div className="circle-text">
                        <NewlineText text={'We are a team of 5 people\nwho have one thing in common, our love for food!\nHowever, some of our team members have food intolerances which\nhas meant they have missed out on their favourite food for far too long.\nHere lies the origin of Easy Eats. No longer do you need to trawl\n through endless websites to find a recipe that may suit your food\n intolerance, instead we have them all stored in one handy place!\n Swap your time from scrolling to baking and cooking\n and let us know which are your go-to recipes!'} />
                        <NewlineText text={'Happy Eating!\nThe Easy Eats Team'} />
                        <NewlineText text={'AKA\nDanielle, Lucy, Nichole,\nSarah & Sophie.'} />
                    </div>
                </div></></>
            
    )
}

export default AboutUs;