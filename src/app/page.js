import Image from "next/image";
import Header from "../../components/header";
import HeroSections from "../../components/hero-sections";
import SectionsServices from "../../components/sections-services";
import SectionsServices2 from "../../components/sections-services2";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSections/> 
      <SectionsServices2/>
      <SectionsServices/>
    </>
  );
}

  