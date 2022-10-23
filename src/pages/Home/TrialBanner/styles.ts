import { pxToRem } from "../../../utils/pxToRem";

export const bannerWrapper = {
  padding: `${pxToRem(34)} ${pxToRem(48)}`,
  background: "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
  borderRadius: pxToRem(10),
};

export const bannerText = {
  fontWeight: 600,
  fontSize: pxToRem(32),
  lineHeight: pxToRem(42),
  maxWidth: "58%",
};

export const buttonWrapper = {
  padding: `${pxToRem(18)} ${pxToRem(20.5)}`,
  background: "#fff",
  borderRadius: pxToRem(5),
};

export const buttonText = {
  fontWeight: 600,
  lineHeight: pxToRem(24),
  color: "#12141D",
};
