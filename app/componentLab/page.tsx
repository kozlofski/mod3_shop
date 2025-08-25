import BrandCategoryButton from "@/components/brandCategoryButton/BrandCategoryButton";
import Button from "@/components/button/Button";
import Carousel from "@/components/carousel/Carousel";
import CarouselButton from "@/components/carouselButton/CarouselButton";
import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import Checkbox from "@/components/checkbox/Checkbox";
import DotIndicator from "@/components/dotIndicator/DotIndicator";
import ProductTile from "@/components/productTile/ProductTile";

export default function Home() {
  return (
    <>
      <Button type="primary" >Primary</Button>
      <Button type="secondary" >Secondary</Button>
      <Button type="tertiary" >Tertiary</Button>
      <BrandCategoryButton text="Mouse"></BrandCategoryButton>
      {/* <BrandCategoryButton text="Monitor"></BrandCategoryButton>
      <BrandCategoryButton text="Headphones"></BrandCategoryButton>
      <BrandCategoryButton text="Keyboard"></BrandCategoryButton>
      <BrandCategoryButton text="Webcam"></BrandCategoryButton> */}
      {/* <CarouselButton direction="left" />
      <CarouselButton direction="right" />
      <DotIndicator dots={5} active={1} /> */}
      {/* <Carousel /> */}
      {/* <ProductTile product={{ productName: "Logitech G502 hero", category: "Mouse", price: 52.99, oldPrice: 72.99 }} /> */}
      <CategoryFilter />
      {/* <Checkbox /> */}
    </>
  );
}
