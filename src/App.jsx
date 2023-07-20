import Header from "./sections/header/header.section";
import NavBar from "./sections/navbar/nav-bar.section";
import About from "./sections/about/about.section";
import Services from "./sections/services/services.section";
import Portfolio from "./sections/portfolio/portfolio.section";
import FAQs from "./sections/faq's/faqs.section";
import Contact from "./sections/contacts/contact.section";
import Footer from "./sections/footer/footer.section";
import FloatingNav from "./sections/floating-nav/floating-nav.section";
const App = () => {
  return <main>
   <NavBar/>
   <Header/>
   <About/>
   <Services/>
   <Portfolio/>
   <FAQs/>
   <Contact/>
   <Footer/>
   <FloatingNav/>
  </main>
};

export default App;
