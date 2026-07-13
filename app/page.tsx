import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero/hero";
import StatsSection from "@/components/home/Stats/StatsSection";
import Solutions from "@/components/home/Solutions/Solutions";
import Features from "@/components/home/Features/Features";
import Resources from "@/components/home/Resourses/Resources";
/*import Pricing from "@/components/home/Pricing/Pricing";*/
import About from "@/components/home/About/About";
import Contact from "@/components/home/Contact/Contact";
import Footer from "@/components/layout/Footer/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <StatsSection/>
      <Solutions/>
      <Features/>
      <Resources/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
