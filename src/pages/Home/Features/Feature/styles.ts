import { pxToRem } from "../../../../utils/pxToRem";

export const featureWrapper = (isActive: boolean) => {
  return {
    padding: `${pxToRem(15)} ${pxToRem(22)}`,
    borderRadius: pxToRem(10),
    background: isActive
      ? "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)"
      : "",
    border: isActive ? "none" : ".063rem solid #282A37",
    marginBottom: pxToRem(10),
    cursor: "pointer",
  };
};
