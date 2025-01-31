import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/projects";
import { SideLeft, SideRight } from "./components/side";
import data from "./assets/data.json";

function App() {
  const { personal, skills, work, projects, socials } = data;
  return (
    <>
      <Header />
      <main>
        <Intro name={`${personal.firstName}.`} />
        <About skills={skills} />
        <Work work={work} />
        <Projects projects={projects} />
        <Contact email={personal.email} />
        <Footer creator={personal.firstName} socials={socials} />
      </main>
      <SideLeft socials={socials} />
      <SideRight />
    </>
  );
}

export default App;
