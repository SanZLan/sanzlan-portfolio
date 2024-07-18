import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";

const App = () =>  {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
