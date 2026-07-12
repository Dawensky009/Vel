import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EventStory from "@/components/EventStory";
import Gallery from "@/components/Gallery";
import Programme from "@/components/Programme";
import Sponsors from "@/components/Sponsors";
import FeatureBand from "@/components/FeatureBand";
import Billetterie from "@/components/Billetterie";
import Infos from "@/components/Infos";
import Faq from "@/components/Faq";
import PrendrePart from "@/components/PrendrePart";
import Footer from "@/components/Footer";
import RevealController from "@/components/RevealController";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <EventStory />
        <Gallery />
        <Programme />
        <Sponsors />
        <FeatureBand />
        <Billetterie />
        <Infos />
        <Faq />
        <PrendrePart />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
