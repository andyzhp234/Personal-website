import BrandIcon from "../../assets/icon-general/brand-logo.png";
import PrimaryButton from "../../components/Button/PrimaryButton";

export default function Header({ scrollToTarget }: { scrollToTarget: any }) {
  return (
    <div className="lg:px-15 mt-6 flex items-center justify-between px-5 xl:px-20">
      <img
        className="h-20 w-20 lg:h-28 lg:w-28"
        src={BrandIcon}
        alt="brand-icon"
      />
      <PrimaryButton onClick={() => scrollToTarget("contact")}>
        CONTACT
      </PrimaryButton>
    </div>
  );
}
