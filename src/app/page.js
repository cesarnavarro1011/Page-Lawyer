import Image from "next/image";
import Header from "../../components/header";
import HeroSections from "../../components/hero-sections";
import Sections from "../../components/sections";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSections/> 
      <Sections/>
    </>
  );
}

  