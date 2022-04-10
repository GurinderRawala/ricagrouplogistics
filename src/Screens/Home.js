import React from "react";
import AboutRicaHomePage from "../Components/HomePage/AboutRicaHomePage";
import DetailedIntro from "../Components/HomePage/DetailedIntro";
import HomePageIntro from "../Components/HomePage/HomePageIntro";
import HomePagePart1 from "../Components/HomePage/HomePagePart1";
import Projects from "../Components/HomePage/Projects";
import ShowShow from "../Components/slideshow/";
//import Slideshow from '../Components/slideshow';
// import Slideshow from "../Components/SlideShow";


const Home = () =>{
    return(
        <div style={{overflow: 'hidden'}}>
        {/* <Slideshow /> */}
        <ShowShow />
        <HomePagePart1 />
        <DetailedIntro />
        <HomePageIntro />
        <AboutRicaHomePage />
        <Projects />
        </div>
    )
}

export default Home