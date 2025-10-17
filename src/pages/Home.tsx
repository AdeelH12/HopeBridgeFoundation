import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";

function Home (){

    return(

        <>

        <NavBar/>

  <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="getinvolved">
        <GetInvolved />
      </section>

      <section id="contact">
        <Contact />
      </section>

        
        </>
    )
}

export default Home;