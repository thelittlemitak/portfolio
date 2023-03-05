import Footer from "../../components/Footer";
import ReadyButton from "../../components/ReadyButton";
import CarouselDots from "../../components/CarouselDots";
import Carousel from "./Carousel";
import HowToLists from "./HowToLists";
import ArrowDown from "../../components/ArrowDown";
import PostHeroTitle from "./PostHeroTitle";
import ImagesCont from "./ImagesCont";
import HeroBelowSection from "../../components/HeroBelowSection";
import Hero from "./Hero";
import Header from "../../components/Header";
import MainWrapper from "./MainWrapper";
import "./HomeQueries.css";
import AboutButton from "../../components/AboutButton";
import ContactButton from "../../components/ContactButton";

function Home() {
  const aboutBtn = AboutButton;
  const contactBtn = ContactButton;

  return (
    <div>
      <Header altBtn={aboutBtn}></Header>
      <MainWrapper>
        <Hero></Hero>
        <HeroBelowSection></HeroBelowSection>
        <ImagesCont></ImagesCont>
        <PostHeroTitle></PostHeroTitle>
        <ArrowDown></ArrowDown>
        <HowToLists></HowToLists>
        <Carousel></Carousel>
        <CarouselDots></CarouselDots>
        <ReadyButton></ReadyButton>
        <Footer></Footer>
      </MainWrapper>
    </div>
  );
}

export default Home;
