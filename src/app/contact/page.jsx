import Navbar from "../components/comon/Navbar";
import Footer from "../components/comon/Footer";
import ContactForm from "../components/section/contact/Form";

export default function Contact() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar isLight={true} />
      <div className="flex items-center justify-center mt-30">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
