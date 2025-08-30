import Accordion from "@/components/accordion/Accordion";
import FilterAccordion from "@/components/accordion/FilterAccordion";
import Alert from "@/components/alert/Alert";
import Badge from "@/components/badge/Badge";
import BrandCategoryButton from "@/components/brandCategoryButton/BrandCategoryButton";
import Button from "@/components/button/Button";
import Carousel from "@/components/carousel/Carousel";
import CarouselButton from "@/components/carouselButton/CarouselButton";
import CategoryFilter from "@/components/filterSections/CategoryFilter";
import Checkbox from "@/components/checkbox/Checkbox";
import DotIndicator from "@/components/dotIndicator/DotIndicator";
import { PlusSign } from "@/components/icons/icons";
import ProductTile from "@/components/productTile/ProductTile";
import Dropdown from "@/components/dropdown/Dropdown";
import Input from "@/components/input/Input";

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
      <Input
        id="test-input"
        value=""
        data={inputData}
        size="xs"
        leftIcon={<PlusSign />}
        text="tekst"
        rightIcon={<PlusSign />}
      />
    </>
  );
}
