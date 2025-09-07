// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Service from "./sections/Service";

// Components
import Navbar from "./components/comon/Navbar";
import CompanyColabs from "./components/section/companyColabs";
import CommentList from "./components/section/commentList";
import QuestionForm from "./components/section/questionForm";
import Footer from "./components/comon/Footer";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <Hero />
      <CompanyColabs />
      <About />
      <CommentList />
      <Service />
      <QuestionForm />
      <Footer />
    </main>
  );
}
