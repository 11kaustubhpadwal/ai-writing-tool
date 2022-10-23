import { pxToRem } from "../../../utils/pxToRem";

export const plansHeading = {
  fontWeight: 600,
  fontSize: pxToRem(42),
  lineHeight: pxToRem(48),
};

export const plansSubHeading = {
  margin: `${pxToRem(20)} 0 ${pxToRem(67)}`,
  fontSize: pxToRem(18),
  lineHeight: pxToRem(28),
  opacity: ".7",
};

export const planCardWrapper = {
  padding: pxToRem(30),
  borderRadius: pxToRem(15),
  background: "#282A37",
};

export const plansSectionWrapper = { padding: "0 7rem 7rem" };
