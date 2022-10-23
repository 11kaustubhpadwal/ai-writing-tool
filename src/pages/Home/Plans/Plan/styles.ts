import { pxToRem } from "../../../../utils/pxToRem";

export const planNameText = {
  marginBottom: pxToRem(28),
  lineHeight: pxToRem(24),
};

export const planPriceText = {
  fontWeight: 600,
  fontSize: pxToRem(42),
  lineHeight: pxToRem(48),
};

export const planPriceMonthText = {
  fontSize: pxToRem(18),
  lineHeight: pxToRem(22.68),
};

export const packageTypeText = {
  marginBottom: pxToRem(42),
  fontSize: pxToRem(14),
  lineHeight: pxToRem(20),
  opacity: ".7",
};

export const includedFeaturesText = {
  marginBottom: pxToRem(15),
  fontWeight: 700,
  lineHeight: pxToRem(28),
};

export const packageFeatureText = {
  fontWeight: 500,
  opacity: ".7",
  lineHeight: pxToRem(34),
};

export const planButton = (isActive: boolean) => {
  return {
    padding: `${pxToRem(13.5)} 0`,
    borderRadius: pxToRem(10),
    textTransform: "none",
    marginTop: pxToRem(30),
    background: isActive
      ? "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)"
      : "",
    border: isActive ? "none" : ".063rem solid #12141D",
  };
};

export const planButtonText = {
  fontWeight: 700,
  lineHeight: pxToRem(28),
  color: "#fff",
};
