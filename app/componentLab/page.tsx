import Alert from "@/components/alert/Alert";
import Badge from "@/components/badge/Badge";
import BrandCategoryButton from "@/components/brandCategoryButton/BrandCategoryButton";
import Button from "@/components/button/Button";
import Carousel from "@/components/carousel/Carousel";
import CarouselButton from "@/components/carouselButton/CarouselButton";
import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import Checkbox from "@/components/checkbox/Checkbox";
import DotIndicator from "@/components/dotIndicator/DotIndicator";
import { PlusSign } from "@/components/icons/icons";
import ProductTile from "@/components/productTile/ProductTile";

const alertText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt tempore fuga ab cupiditate sapiente, adipisci necessitatibus minus non ut aut, quas recusandae beatae aspernatur amet hic eum cumque possimus?"
const shortAlertText = "Lorem, ipsum dolor sit amet"

export default function Home() {
  return (
    <>
      <Button className="btn btn-white btn-xl">
        <PlusSign />
        Dupa dupa
        <PlusSign />
      </Button>
      {/* <Badge className="badge badge-pending badge-stroke badge-s">Text</Badge> */}

      <Button className="btn btn-alert btn-success btn-alertStroke ">Text</Button>
      <Alert type="primary" alertHeader="Dupa dupa" alertText={shortAlertText} variant="l" />
      {/* <Button type="secondary" >Secondary</Button>
      <Button type="tertiary" >Tertiary</Button>
      <BrandCategoryButton text="Mouse"></BrandCategoryButton> */}
      {/* <BrandCategoryButton text="Monitor"></BrandCategoryButton>
      <BrandCategoryButton text="Headphones"></BrandCategoryButton>
      <BrandCategoryButton text="Keyboard"></BrandCategoryButton>
      <BrandCategoryButton text="Webcam"></BrandCategoryButton> */}
      {/* <CarouselButton direction="left" />
      <CarouselButton direction="right" />
      <DotIndicator dots={5} active={1} /> */}
      {/* <Carousel /> */}
      {/* <ProductTile product={{ productName: "Logitech G502 hero", category: "Mouse", price: 52.99, oldPrice: 72.99 }} /> */}
      {/* <CategoryFilter /> */}
      {/* <Checkbox /> */}
    </>
  );
}
