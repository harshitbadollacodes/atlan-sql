import { PrimaryBtn } from "./primaryButtonStyles";

const PrimaryButton = ({ buttonName, onClick, active = false }) => {
  return (
    <>
      <PrimaryBtn active={active} onClick={onClick}>
        {buttonName}
      </PrimaryBtn>
    </>
  );
};

export default PrimaryButton;
