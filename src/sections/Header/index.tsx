import BrandIcon from "../../assets/icon-general/brand-logo.png";
import PrimaryButton from "../../components/Button/PrimaryButton";

export default function Header({ scrollToTarget }: { scrollToTarget: any }) {
  return (
    <div className="mt-6 flex items-center justify-between px-20">
      <img className="h-28 w-28" src={BrandIcon} alt="brand-icon" />
      <PrimaryButton onClick={() => scrollToTarget("contact")}>
        CONTACT
      </PrimaryButton>
    </div>
  );
}
