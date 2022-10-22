import { pxToRem } from "../../../../utils/pxToRem";

export const infoCardTitle = {
  fontWeight: 600,
  fontSize: pxToRem(42),
  lineHeight: pxToRem(48),
};

export const infoCardContent = {
  margin: `${pxToRem(31)} 0 ${pxToRem(42)}`,
  fontSize: pxToRem(18),
  lineHeight: pxToRem(28),
  opacity: ".7",
};

export const infoCardButton = {
  padding: `${pxToRem(18)} ${pxToRem(20.5)}`,
  borderRadius: pxToRem(5),
  background: "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
  textTransform: "none",
  color: "#fafafa",
};
