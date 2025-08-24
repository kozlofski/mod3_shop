import BrandCategoryButton from "@/components/brandCategoryButton/BrandCategoryButton";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <>
      <Button type="primary" text="Primary" />
      <Button type="secondary" text="Secondary" />
      <Button type="tertiary" text="Tertiary" />
      <BrandCategoryButton text="Mouse"></BrandCategoryButton>
      <BrandCategoryButton text="Monitor"></BrandCategoryButton>
      <BrandCategoryButton text="Headphones"></BrandCategoryButton>
      <BrandCategoryButton text="Keyboard"></BrandCategoryButton>
      <BrandCategoryButton text="Webcam"></BrandCategoryButton>
    </>
  );
}
