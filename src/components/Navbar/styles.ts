import { pxToRem } from "../../utils/pxToRem";

export const navbarWrapper = {
  padding: `${pxToRem(34)} ${pxToRem(170)}`,
};

export const logoText = {
  fontWeight: 700,
  fontSize: pxToRem(22),
  lineHeight: pxToRem(24),
};

export const linkText = { lineHeight: pxToRem(24), fontWeight: 500 };

export const signInButton = {
  padding: `${pxToRem(13)} ${pxToRem(20)}`,
  textTransform: "none",
  color: "#fafafa",
  borderRadius: pxToRem(5),
  border: ".063rem solid rgba(255, 255, 255, 0.3)",
  marginRight: pxToRem(16),
};

export const getStartedButton = {
  padding: `${pxToRem(13)} ${pxToRem(20)}`,
  background: "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
  textTransform: "none",
  color: "#fafafa",
  borderRadius: pxToRem(5),
};

export const buttonText = { lineHeight: pxToRem(24), fontWeight: 500 };
