import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

function About() {
  return (
    <div className="about">
      <Header />
      <NavigationBar/>
      <h1>Our Story</h1>
      <p>
        We are a team of 5 people who have one thing very much in common, our
        love of food! However, some of our team members have food intolerances
        which has meant they have missed out on their favourite food for far too
        long. Here lies the origin of Easy Eats. No longer do you need to do
        trawl through endless websites to find a recipe that may suit your food
        intolerance, instead, we have them all stored in one handy web app. Swap
        your time from scrolling to baking and cooking and let us know which are
        your go-to recipes!
      </p>
      <p>
        Happy Eating! The Easy Eats Team aka Danielle, Lucy, Nichole, Sarah and
        Sophie.
      </p>
      <Footer/>
    </div>
  );
}

export default About;
