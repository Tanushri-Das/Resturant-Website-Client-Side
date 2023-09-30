import { Helmet } from "react-helmet-async";
import contactImg from "../../assets/contact/banner.jpg";
import Cover from "../../Components/Shared/Cover/Cover";
import LocationInformation from "./LocationInformation/LocationInformation";
import ContactUsForm from "./ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Foodie's Paradise | Menu</title>
      </Helmet>
      <Cover
        img={contactImg}
        title="CONTACT US"
        description="Would you like to try a dish?"
      />

      <LocationInformation />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
