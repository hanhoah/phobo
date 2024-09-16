import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import toolsImage from "@/assets/images/tools.jpeg";
import ImageSlider from "./components/ImageSlider";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  if (locale == "de")
    return (
      <>
        <Link href="/about">{t("about")}</Link>
        <h2>Lorem Ipsum</h2>

        <ImageSlider />
        <div className="box">
          das ist meine Box this is myBox this is myBox{" "}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          facilisis odio ac est semper accumsan. Aliquam gravida eros non
          maximus finibus. Fusce nec aliquam lacus, at consectetur dui. Ut
          semper massa vel turpis convallis laoreet. Vestibulum ultricies nibh a
          nulla finibus, non varius ante egestas. Curabitur faucibus tincidunt
          dolor, vitae porttitor erat congue sed. Vivamus eu justo id massa
          vehicula elementum. Cras pulvinar eget orci nec auctor. Aenean eu est
          dignissim, condimentum ipsum ac, sodales sem. Pellentesque id
          consequat nisi, nec vulputate ante. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce placerat auctor orci, at faucibus
          tortor efficitur id. Proin faucibus mauris eget nunc efficitur, eget
          vestibulum risus hendrerit. Duis efficitur eget mi sit amet iaculis.
          Pellentesque quis leo nec turpis fringilla hendrerit.
        </p>
      </>
    );
  else
    return (
      <>
        <Link href="/about">{t("about")}</Link>
        <h2>Lorem Ipsum</h2>

        <ImageSlider />
        <div className="box">this is myBox this is myBox this is myBox </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          facilisis odio ac est semper accumsan. Aliquam gravida eros non
          maximus finibus. Fusce nec aliquam lacus, at consectetur dui. Ut
          semper massa vel turpis convallis laoreet. Vestibulum ultricies nibh a
          nulla finibus, non varius ante egestas. Curabitur faucibus tincidunt
          dolor, vitae porttitor erat congue sed. Vivamus eu justo id massa
          vehicula elementum. Cras pulvinar eget orci nec auctor. Aenean eu est
          dignissim, condimentum ipsum ac, sodales sem. Pellentesque id
          consequat nisi, nec vulputate ante. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce placerat auctor orci, at faucibus
          tortor efficitur id. Proin faucibus mauris eget nunc efficitur, eget
          vestibulum risus hendrerit. Duis efficitur eget mi sit amet iaculis.
          Pellentesque quis leo nec turpis fringilla hendrerit.
        </p>
      </>
    );
}
