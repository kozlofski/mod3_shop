import Accordion from "@/components/basicComponents/Accordion";
import FilterAccordion from "@/components/basicComponents/FilterAccordion";
import Alert from "@/components/basicComponents/Alert";
import Badge from "@/components/basicComponents/Badge";
import BrandCategoryButton from "@/components/compoundComponents/BrandCategoryButton";
import Button from "@/components/basicComponents/Button";
import Carousel from "@/components/compoundComponents/Carousel";
import CarouselButton from "@/components/basicComponents/CarouselButton";
import CategoryFilter from "@/components/compoundComponents/CategoryFilter";
import DotIndicator from "@/components/basicComponents/DotIndicator";
import { PlusSign } from "@/components/icons/icons";
import ProductTile from "@/components/compoundComponents/ProductTile";
import Dropdown from "@/components/basicComponents/Dropdown";
import Input from "@/components/basicComponents/Input";
import Toggle from "@/components/basicComponents/Toggle";
import Checkbox from "@/components/basicComponents/Checkbox";
import Logo from "@/components/basicComponents/Logo";
import HeaderButtons from "@/components/compoundComponents/HeaderButtons";
import Header from "@/components/sectionComponents/Header";
import Footer from "@/components/sectionComponents/Footer";
import ProgressBar from "@/components/basicComponents/ProgressBar";
import Section from "@/components/compoundComponents/SectionWithHeader";
import SectionWithHeader from "@/components/compoundComponents/SectionWithHeader";

const alertText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt tempore fuga ab cupiditate sapiente, adipisci necessitatibus minus non ut aut, quas recusandae beatae aspernatur amet hic eum cumque possimus?"
const shortAlertText = "Lorem, ipsum dolor sit amet"
const inputData = {
  label: "Labelek",
  error: "invalid data",
  // error: "",
  helper: "please input proper literki und cyferki",
  placeholder: "tutej pisz"
}

export default function Home() {
  return (
    <>
      <SectionWithHeader header="Category" >
        <ProgressBar size="l" progress={37} />
      </SectionWithHeader>
    </>
  );
}
