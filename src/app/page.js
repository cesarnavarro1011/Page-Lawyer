import Image from "next/image";
import Header from "../../components/header";
import HeroSections from "../../components/hero-sections";
import SectionsServices from "../../components/sections-services";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSections/> 
      <SectionsServices/>
    </>
  );
}

  