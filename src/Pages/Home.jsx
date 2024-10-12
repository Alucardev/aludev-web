import HeroSection from "../components/HeroSection";;
import AboutUs from "../components/AboutUs";
import WorkFlow from "../components/Workflow"
import ContactForm from "../components/ContactForm";

const HomePage = () => {

    return (
    <>
      <HeroSection />
      <WorkFlow/>
      <AboutUs />
      <ContactForm />
  
    </>
    )
}

export default HomePage;