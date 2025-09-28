import Alert from "@/_components/basicComponents/Alert";
import AlertButton from "@/_components/basicComponents/AlertButton";
import Button from "@/_components/basicComponents/Button";
import { LeftArrowIcon, RightArrowIcon } from "@/_components/icons/icons";

const inputData = {
  label: "Labelek",
  error: "invalid data",
  // error: "",
  helper: "please input proper literki und cyferki",
  placeholder: "tutej pisz"
}

export default function Home() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-row gap-1">
        <div className="flex flex-col gap-1 w-fit">
          <Button size="xxl" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />} >XXL full</Button>
          <Button size="xl" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XL full</Button>
          <Button size="l" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>L full</Button>
          <Button size="m" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>M full</Button>
          <Button size="s" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>S full</Button>
          <Button size="xs" variant="full" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XS full</Button>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <Button size="xxl" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />} >XXL stroke</Button>
          <Button size="xl" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XL stroke</Button>
          <Button size="l" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>L stroke</Button>
          <Button size="m" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>M stroke</Button>
          <Button size="s" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>S stroke</Button>
          <Button size="xs" variant="stroke" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XS stroke</Button>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <Button size="xxl" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XXL naked</Button>
          <Button size="xl" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XL naked</Button>
          <Button size="l" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>L naked</Button>
          <Button size="m" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>M naked</Button>
          <Button size="s" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>S naked</Button>
          <Button size="xs" variant="naked" leftIcon={<LeftArrowIcon />} rightIcon={<RightArrowIcon />}>XS naked</Button>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div className="flex flex-col gap-1 w-fit">
          <AlertButton variant="full" color="danger">danger</AlertButton>
          <AlertButton variant="full" color="default">default</AlertButton>
          <AlertButton variant="full" color="primary">primary</AlertButton>
          <AlertButton variant="full" color="success">success</AlertButton>
          <AlertButton variant="full" color="warning">warning</AlertButton>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <AlertButton variant="stroke" color="danger">danger</AlertButton>
          <AlertButton variant="stroke" color="default">default</AlertButton>
          <AlertButton variant="stroke" color="primary">primary</AlertButton>
          <AlertButton variant="stroke" color="success">success</AlertButton>
          <AlertButton variant="stroke" color="warning">warning</AlertButton>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <AlertButton variant="naked" color="danger">danger</AlertButton>
          <AlertButton variant="naked" color="default">default</AlertButton>
          <AlertButton variant="naked" color="primary">primary</AlertButton>
          <AlertButton variant="naked" color="success">success</AlertButton>
          <AlertButton variant="naked" color="warning">warning</AlertButton>
        </div>
      </div>
      <div className="flex flex-row gap-1 w-full">
        <div className="flex flex-col gap-1 w-full">
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="danger" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="success" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="warning" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="default" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="primary" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="danger" size={"l"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="danger" size={"m"} ></Alert>
          <Alert alertHeader={"header"} alertText={" bardzo wielkie niebespieczęsfo"} type="danger" size={"s"} ></Alert>
        </div>
      </div>

    </div>
  );
}
