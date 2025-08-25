import BrandCategoryButton from "@/components/brandCategoryButton/BrandCategoryButton";
import Button from "@/components/button/Button";
import CarouselButton from "@/components/carouselButton/CarouselButton";
import DotIndicator from "@/components/dotIndicator/DotIndicator";

export default function Home() {
  return (
    <>
      <Button type="primary" text="Primary" />
      <Button type="secondary" text="Secondary" />
      <Button type="tertiary" text="Tertiary" />
      <BrandCategoryButton text="Mouse"></BrandCategoryButton>
      {/* <BrandCategoryButton text="Monitor"></BrandCategoryButton>
      <BrandCategoryButton text="Headphones"></BrandCategoryButton>
      <BrandCategoryButton text="Keyboard"></BrandCategoryButton>
      <BrandCategoryButton text="Webcam"></BrandCategoryButton> */}
      <CarouselButton direction="left" />
      <CarouselButton direction="right" />
      <DotIndicator dots={5} active={1} />
    </>
  );
}
