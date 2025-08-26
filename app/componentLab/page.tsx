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

export default function Home() {
  return (
    <>
      <Button className="btn btn-tertiary btn-xs">
        <PlusSign />
        Primary
        <PlusSign />
      </Button>
      <Badge className="badge badge-pending badge-stroke badge-s ">Text</Badge>
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
