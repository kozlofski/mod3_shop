import CategoryFilter from "@/components/compoundComponents/CategoryFilter";
import ProductBrowser from "@/components/sectionComponents/ProductBrowser";

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
    <ProductBrowser>
    </ProductBrowser>
    // <CategoryFilter />
    // <>
    //   <Input id={"dupa"} value={"a"} data={{
    //     placeholder: "Min Price",
    //     error: "invalid price",
    //     label: "",
    //     helper: ""
    //   }} size={"xl"}>

    //     <Dropdown options={["USD", "EUR"]} className="xxl" inputDropdown />
    //   </Input>
    //   <SectionWithHeader header="Category" >
    //     <CategoryBar ></CategoryBar>
    //     <Pagination currentPage={1} totalPages={8} />
    //   </SectionWithHeader>
    // </>
  );
}
