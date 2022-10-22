import { pxToRem } from "../../../utils/pxToRem";

export const heroText = {
  fontWeight: 500,
  fontSize: pxToRem(60),
  lineHeight: pxToRem(66),
};

export const heroTextMain = {
  fontWeight: 500,
  fontSize: pxToRem(60),
  lineHeight: pxToRem(66),
  background: "linear-gradient(268.28deg, #FFC947 16.84%, #FC6739 84.26%)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const heroTextUnderline = {
  height: pxToRem(5),
  background: "linear-gradient(268.28deg, #FFC947 16.84%, #FC6739 84.26%)",
  width: "85%",
  margin: "0 auto",
};

export const heroTextSecondary = {
  opacity: ".7",
  fontSize: pxToRem(18),
  lineHeight: pxToRem(28),
  margin: `${pxToRem(39)} 0 ${pxToRem(46)}`,
};

export const heroButton = {
  marginBottom: pxToRem(20),
  padding: `${pxToRem(18)} ${pxToRem(20.5)}`,
  background: "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
  borderRadius: pxToRem(5),
  textTransform: "none",
  color: "#fafafa",
};

export const heroTextTertiary = { fontWeight: 600, lineHeight: pxToRem(24) };

export const playWrapper = { margin: "0 auto", width: "9rem" };
