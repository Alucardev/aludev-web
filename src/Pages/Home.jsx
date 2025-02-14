import HeroSection from "../components/HeroSection";;
import OurWorks from "../components/OurWorks";
import WorkFlow from "../components/Workflow"
import ContactForm from "../components/ContactForm";

const HomePage = () => {

    return (
    <>
      <HeroSection />
      <WorkFlow/>
      <OurWorks/>
      <ContactForm />
  
    </>
    )
}

export default HomePage;